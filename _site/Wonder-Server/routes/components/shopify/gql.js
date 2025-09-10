const { gql, GraphQLClient } = require('graphql-request');
const { isProduction } = require('../../../utils');

exports.shopifyProdURL = 'https://zinususa.myshopify.com/admin/api/2020-10/graphql.json';
exports.shopifyDevURL = 'https://zinusdevtl.myshopify.com/admin/api/2020-10/graphql.json';

exports.shopifyGQLclient = (() => {
  const gqlURL = isProduction ? this.shopifyProdURL : this.shopifyDevURL;

  return new GraphQLClient(gqlURL, {
    headers: {
      'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
    }
  });
})();

exports.mutateOrder = gql`
  mutation orderUpdate($input: OrderInput!) {
    orderUpdate(input: $input) {
      order {
        id
      }
      userErrors {
        field
        message
      }
    }
  }
`;

exports.orderDetails = gql`
  query order($id: ID!) {
    order(id: $id) {
      name
      customAttributes {
        key
        value
      }
      email
      fulfillable
      shippingAddress {
        firstName
        lastName
        phone
        address1
        address2
        city
        province
        provinceCode
        zip
      }
      lineItems(first: 50) {
        edges {
          node {
            title
            fulfillableQuantity
          }
        }
      }
    }
  }
`;
