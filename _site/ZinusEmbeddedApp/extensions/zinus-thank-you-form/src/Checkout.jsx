import React, { useEffect, useState } from 'react';
import {
  reactExtension,
  BlockStack,
  Checkbox,
  Text,
  Heading,
  useShippingAddress,
  useAttributes,
  useApplyAttributeChange,
  useCartLines
} from '@shopify/ui-extensions-react/checkout';

// Allow the alert banner message when click test button without checking 'Agree to zinus Terms of Use'
// const thankYouBlock = reactExtension("purchase.thank-you.block.render", () => <Attribution />);
const thankYouBlock = reactExtension("purchase.checkout.block.render", () => <Attribution />);
export { thankYouBlock };

function Attribution() {
  const lines = useCartLines([]);
  const updateAttribute = useApplyAttributeChange();
  const attributes = useAttributes();
  const shippingAddress = useShippingAddress();
  const [qualifyingItems, setQualifyingItems] = useState(false);
  const feeLocations = ['CA'];

  useEffect(() => {
    for (const line of lines) {
      if (line.merchandise.product.productType === 'mattress' || line.merchandise.product.productType === 'Box Spring') {
        setQualifyingItems(true);
        return;
      }
    }
  }, [lines])

  const handleCheckboxClicked = (value, element) => {
    console.log('value: ', value);
    if (value) {
      updateAttribute({
        type: "updateAttribute",
        key: "Pickup Requested",
        value: 'true'
      });
      
      return;
    }
    updateAttribute({
      type: "updateAttribute",
      key: "Pickup Requested",
      value: 'false'
    })
  }

  return <>
    {feeLocations.includes(shippingAddress.provinceCode) && qualifyingItems ? (
      <BlockStack>
        <Heading>
          Add Pick Up
        </Heading>
        <Text size="medium">Free Pickup Request</Text>
        <Checkbox id="checkbox" name="checkout[attribute][Pickup Requested]" onChange={checked => handleCheckboxClicked(checked, this)}>
          I will require removal of my old mattress/box spring from my delivery address.
        </Checkbox>
      </BlockStack>
    ) : <></>}
  </>
    ;
}