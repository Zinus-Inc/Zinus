const { shopifyGQLclient, orderDetails, mutateOrder } = require('./gql');
const { loadupAttrKey } = require('../pickup');

exports.getShopifyOrderInfo = (gqlOrderID) => {
  return shopifyGQLclient.request(orderDetails, {
    id: `gid://shopify/Order/${gqlOrderID}`
  });
};

exports.addPickupAttrToOrder = async (options) => {
  // Get existing order attributes
  const existingOrder = await this.getShopifyOrderInfo(options.orderID);

  // Filter out the loadup attr, but keep the rest.
  const preExistingAttributes = existingOrder.order.customAttributes.filter(
    (attr) => attr.key !== loadupAttrKey
  );

  // Add LoadUp Pickup ID to Shopify as an order attribute
  await shopifyGQLclient.request(mutateOrder, {
    input: {
      id: `gid://shopify/Order/${options.orderID}`,
      customAttributes: [
        {
          key: loadupAttrKey,
          value: options.pickupIDs
        },
        ...preExistingAttributes
      ]
    }
  });
};
