/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */

const phone = require('phone');
const { loadupGQLclient, createPickupRequest, cancelPickupRequest } = require('./gql');
const { isProduction } = require('../../../utils');
const { sendHTMLEmail } = require('../../../utils/email');
const { cancelLoadupPickupEmail } = require('../../../utils/email/templates/support');

// Used to for Shopify order key and later lookup
// If we dare change this, change logic for looking up older orders
exports.loadupAttrKey = "LoadUp Pickup IDs (DON'T MODIFY)";

exports.gqlRequestPickUp = (inputs) => {
  return loadupGQLclient.request(createPickupRequest, {
    inputs
  });
};

exports.gqlRequestPickUpCancellation = (scheduleRequestId) => {
  return loadupGQLclient.request(cancelPickupRequest, {
    inputs: {
      scheduleRequestId
    }
  });
};

exports.generatePickupRequests = async (options) => {
  const { comboCount, mattressCount, boxSpringCount } = options;
  const customerInfo = {
    addressline1: options.addressline1,
    unitNumber: options.unitNumber,
    city: options.city,
    orderEmail: options.email,
    orderFirstName: options.firstName,
    orderLastName: options.lastName,
    orderPrimaryPhone: phone(options.phone, 'USA')[0],
    state: options.state,
    zip: options.zipcode
  };
  const pickupIDs = [];

  // Add in promise for mattress
  if (comboCount) {
    const comboRequest = await this.gqlRequestPickUp({
      ...customerInfo,
      pricedPackageSku: 'LOADUP_229A12E4',
      quantity: comboCount
    });

    if (comboRequest.createPricedScheduleRequest.errorCode) {
      throw new Error('Error creating pickup request.');
    }

    pickupIDs.push(comboRequest.createPricedScheduleRequest.scheduleRequest.id);
  }

  // Add request for mattress count or box spring
  if (mattressCount || boxSpringCount) {
    const secondaryPickupRequest = await this.gqlRequestPickUp({
      ...customerInfo,
      pricedPackageSku: mattressCount ? 'LOADUP_270E60F8' : 'LOADUP_AE745791', // No box spring sku yet...
      quantity: mattressCount || boxSpringCount
    });

    if (secondaryPickupRequest.createPricedScheduleRequest.errorCode) {
      throw new Error('Error creating pickup request.');
    }

    pickupIDs.push(secondaryPickupRequest.createPricedScheduleRequest.scheduleRequest.id);
  }

  return pickupIDs;
};

exports.cancelPickupRequest = async (options) => {
  const pickups = options.pickupIDs.split(',');

  for (const pickup of pickups) {
    // Attempt to cancel pickup request
    const cancelRequest = await this.gqlRequestPickUpCancellation(pickup);

    if (cancelRequest.cancelScheduleRequest.errorCode) {
      // Error recieved from pickup request API
      try {
        await sendHTMLEmail({
          toEmail: isProduction ? 'support@zinusinc.com' : 'webdev@zinusinc.com',
          emailSubject: 'LoadUp Manual Cancellation Request',
          html: cancelLoadupPickupEmail({
            pickupIDs: options.pickupIDs,
            customerName: options.name,
            orderNumber: options.orderNumber
          }),
          attachACat: true
        });
        break;
      } catch (error) {
        console.error(error);
        throw new Error('Trouble sending email to agents');
      }
    }
  }
};
