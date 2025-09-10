/**
 * @param {Object} options Pickup details
 * @param {String} options.pickupID LoadUp Pickup ID
 * @param {String} options.customerName Customer name
 * @param {String} options.orderNumber Order number
 */
exports.cancelLoadupPickupEmail = (options) => `
  <p>Hi Team,</p>
  <p>Please cancel the following pickup(s) in LoadUp:</p>
  <p>
      LoadUp ID(s): ${options.pickupIDs}
  </p>
  <p>Customer Name: ${options.customerName}</p>
  <p>Order Number: ${options.orderNumber}</p>
`;
