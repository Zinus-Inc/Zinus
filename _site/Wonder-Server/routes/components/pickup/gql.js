const { gql, GraphQLClient } = require('graphql-request');
const { isProduction } = require('../../../utils');

exports.loadupProdURL = 'https://order.goloadup.com/partner_api/graphql';
exports.loadupDevURL = 'https://sandbox.goloadup.com/partner_api/graphql';

exports.loadupGQLclient = (() => {
  const gqlURL = isProduction ? this.loadupProdURL : this.loadupDevURL;

  return new GraphQLClient(gqlURL, {
    headers: {
      'X-Access-Token': process.env.LOADUP_ACCESS_TOKEN
    }
  });
})();

exports.createPickupRequest = gql`
  mutation createPricedScheduleRequest($inputs: CreatePricedScheduleRequestInputs!) {
    createPricedScheduleRequest(inputs: $inputs) {
      scheduleRequest {
        conversionPageUrl
        id
        total
      }
      errorCode
    }
  }
`;

exports.cancelPickupRequest = gql`
  mutation cancelScheduleRequest($inputs: CancelScheduleRequestInputs!) {
    cancelScheduleRequest(inputs: $inputs) {
      errorCode
    }
  }
`;
