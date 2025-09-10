const e = require('express');
const express = require('express');
const router = express.Router();

const {
  loadupAttrKey,
  generatePickupRequests,
  cancelPickupRequest
} = require('./components/pickup');
const { getShopifyOrderInfo, addPickupAttrToOrder } = require('./components/shopify');

const countPickupItems = (lineItems, quantityKey) => {
  let mattressCount = 0;
  let boxSpringCount = 0;
  let mattressBoxCombo = 0;

  lineItems.forEach((item) => {
    console.log('item: ', item);
    const titleIncludes = (text) => item.title.toLowerCase().includes(text);
    console.log('titleIncludes("box spring"): ', titleIncludes('box spring'));
    console.log('titleIncludes("mattress"): ', titleIncludes('mattress'));
    console.log('titleIncludes("topper"): ', titleIncludes('topper'));
    console.log('titleIncludes("cover"): ', titleIncludes('cover'));

    if (titleIncludes('box spring')) {
      console.log('titleIncludes box spring');
      boxSpringCount += item[quantityKey];
    } else if (
      titleIncludes('mattress') &&
      !titleIncludes('topper') &&
      !titleIncludes('cover') &&
      !titleIncludes('pad')
    ) {
      console.log('titleIncludes mattress');
      mattressCount += item[quantityKey];
    }
  });

  console.log('mattressCount: ', mattressCount);
  console.log('boxSpringCount: ', boxSpringCount);

  if (mattressCount && boxSpringCount) {
    console.log('mattress and box spring');
    if (mattressCount === boxSpringCount) {
      console.log('mattress = box spring');
      // Quantities match, set box combo
      mattressBoxCombo = mattressCount;
      mattressCount = 0;
      boxSpringCount = 0;
    } else if (mattressCount > boxSpringCount) {
      console.log('mattress > box spring');
      mattressBoxCombo = boxSpringCount;
      mattressCount -= boxSpringCount;
      boxSpringCount = 0;
    } else {
      console.log('mattress < box spring');
      mattressBoxCombo = mattressCount;
      boxSpringCount -= mattressCount;
      mattressCount = 0;
    }
  }

  return {
    mattresses: mattressCount,
    boxSprings: boxSpringCount,
    comboCount: mattressBoxCombo,
    totalCount: mattressCount + boxSpringCount + mattressBoxCombo
  };
};

router.post('/schedule', async (req, res) => {
  console.log('Received request to schedule pickup');
  const {
    note_attributes: orderAttributes,
    shipping_address: shippingAddress,
    line_items: lineItems,
    email,
    id: orderID
  } = req.body;

  console.log('req.body: ', req.body);

  console.log('orderAttributes: ', orderAttributes);

  const pickupAttribute = orderAttributes.find((attr) => attr.name === 'Pickup Requested');
  console.log('pickupAttribute', pickupAttribute);

  // Check if a pickup is required
  let pickupRequired = false;
  if (pickupAttribute) {
    pickupRequired = pickupAttribute && pickupAttribute.value.toLowerCase() === 'true';
  }
  console.log('pickupRequired: ', pickupRequired);

  const { province, province_code: provinceCode } = shippingAddress;

  if ((province === 'California' || provinceCode === 'CA') && pickupRequired) {
    const pickupItemCount = countPickupItems(lineItems, 'quantity');

    console.log('pickupItemCount: ', pickupItemCount);

    if (pickupItemCount.totalCount === 0) {
      return res.status(202).json({ code: '202', error: 'No mattress or box spring in order.' });
    }

    try {
      const {
        zip,
        address1,
        address2,
        city,
        first_name: firstName,
        last_name: lastName,
        phone
      } = shippingAddress;

      // Create LoadUp Pickup
      const pickupIDs = await generatePickupRequests({
        mattressCount: pickupItemCount.mattresses,
        boxSpringCount: pickupItemCount.boxSprings,
        comboCount: pickupItemCount.comboCount,
        addressline1: address1,
        unitNumber: address2,
        city,
        email,
        firstName,
        lastName,
        phone, // Remove all non-numbers
        state: provinceCode,
        zipcode: zip.split('-')[0] // Only get first digits before a dash (i.e. 95376)
      });

      console.log('pickupIDs: ', pickupIDs);

      // Add LoadUp Pickup ID to Shopify as an order attribute
      // Update Shopify order attribute
      await addPickupAttrToOrder({
        orderID,
        pickupIDs: pickupIDs.join(',')
      });

      return res.status(201).json({ code: '201', response: 'Pickup request generated.' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ code: '500', error: 'Error processing pickup request.' });
    }
  } else {
    return res.status(202).json({ code: '202', response: 'No pickup required.' });
  }
});

router.post('/cancel', async (req, res) => {
  const {
    note_attributes: orderAttributes,
    name: orderNumber,
    shipping_address: shippingAddress
  } = req.body;

  // Find the pickup attr based on the name
  const pickupAttribute = orderAttributes.find((attr) => attr.name === loadupAttrKey);

  if (pickupAttribute) {
    try {
      await cancelPickupRequest({
        pickupIDs: pickupAttribute.value,
        name: shippingAddress.name,
        orderNumber
      });

      return res.status(200).json({ code: '200', response: 'Pickup request cancelled.' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ code: '500', error: 'Unable to access pickup API.' });
    }
  } else {
    return res.status(202).json({ code: '202', error: 'No pickup ID in order.' });
  }
});

router.post('/refund', async (req, res) => {
  const { refund_line_items: refundedLineItems, order_id: orderID } = req.body;

  // Only continue if there are items being refunded
  if (refundedLineItems.length) {
    try {
      const shopifyOrder = await getShopifyOrderInfo(orderID);
      const {
        name: orderNumber,
        email,
        fulfillable,
        shippingAddress,
        lineItems,
        customAttributes: orderAttributes
      } = shopifyOrder.order;

      // Count pickup items
      const pickupItemCount = countPickupItems(
        lineItems.edges.map((item) => item.node),
        'quantity'
      );

      // Only proceed if refund items contain pickup items
      if (pickupItemCount.totalCount === 0) {
        return res.status(202).json({ code: '202', response: 'Products refunded are good' });
      }

      // Orders where all items are shipped (fulfilled), don't continue.
      if (!fulfillable) {
        return res.status(202).json({ code: '202', response: 'Order has already been shipped.' });
      }

      // Find pickup id
      const pickupAttribute = orderAttributes.find((attr) => attr.key === loadupAttrKey);
      if (!pickupAttribute) {
        return res.status(202).json({ code: '202', response: "Order doesn't have pickup attr." });
      }

      // Cancel existing pickup scheduled
      await cancelPickupRequest({
        pickupIDs: pickupAttribute.value,
        name: `${shippingAddress.firstName} ${shippingAddress.lastName}`,
        orderNumber
      });

      // Schedule new pickup
      const pickupIDs = await generatePickupRequests({
        mattressCount: pickupItemCount.mattresses,
        boxSpringCount: pickupItemCount.boxSprings,
        comboCount: pickupItemCount.comboCount,
        addressline1: shippingAddress.address1,
        unitNumber: shippingAddress.address2,
        city: shippingAddress.city,
        email,
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.lastName,
        phone: shippingAddress.phone,
        state: shippingAddress.provinceCode,
        zipcode: shippingAddress.zip.split('-')[0] // Only get first digits before a dash (i.e. 95376)
      });

      // Update Shopify order attribute
      await addPickupAttrToOrder({
        orderID,
        pickupIDs: pickupIDs.join(',')
      });

      return res.status(201).json({ code: '201', response: 'Cancelled pickup and made new one.' });
    } catch (error) {
      return res.status(500).json({ code: '500', error: error.message });
    }
  } else {
    return res.status(202).json({ code: '202', response: 'No item refunded.' });
  }
});

module.exports = router;
