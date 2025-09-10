import { useEffect, useState } from "react";
import {
  Text,
  reactExtension,
  useCartLineTarget,
  useApi,
  useSubscription,
  useAppMetafields
} from '@shopify/ui-extensions-react/checkout';
import { BlockLayout, extension } from "@shopify/ui-extensions/checkout";

// Allow the cart item shows some product information on checkout page.  e.g: Welcome, product type
export default cartItemExtension = reactExtension("purchase.checkout.cart-line-item.render-after", () => <App />);

function App() {
  const extensionApi = useApi();
  const {query} = useApi();

  const deliveryGroups = useSubscription(extensionApi.deliveryGroups);

  const deliveryOptions = deliveryGroups[0]?.deliveryOptions;
  
  const heightMetafields = useAppMetafields({ type: "product", namespace: "custom", key: "variant_title" });
  const selectedOption = deliveryGroups[0]?.selectedDeliveryOption;
  const shippingMethodTitle = selectedOption && deliveryOptions.find(opt => opt.handle === selectedOption.handle)?.title;

  const cartLineTarget = useCartLineTarget();

  const [height, setHeight] = useState("");

  useEffect(() => {
    // Get the product id
    const productId = cartLineTarget?.merchandise?.product?.id;
    query(
      `
        query {
          product(id: "${productId}") {
            title
            description
            variants(first: 25) {
              edges {
                node {
                  id
                  title
                  metafield(namespace: "custom", key: "mattress_height") {
                    value
                  }
                }
              }
            }
          }
        }
      `
    )
    .then(({ data, errors }) => {
      const variantMetafiledData = data?.product?.variants.edges.map(item =>  {
        if (item?.node?.id === cartLineTarget?.merchandise?.id) return item}
      )
      setHeight(variantMetafiledData[0].node.metafield.value);
    })
    .catch(console.error);
  }, [cartLineTarget, height]);

  return (
    <BlockLayout>
      <Text>Height: {height}"</Text>
    </BlockLayout>
  );
}