import React, { useEffect, useState } from "react";
import {
  Banner,
  reactExtension,
  useCartLines,
  useApplyCartLinesChange,
  useShippingAddress,
  useApi,
  useSettings,
} from "@shopify/ui-extensions-react/checkout";
// Set up the entry point for the extension
export default reactExtension("purchase.checkout.block.render", () => <App />);

function App() {
  const { productId } = useSettings();
  const { query } = useApi();
  const applyCartLinesChange = useApplyCartLinesChange();
  const shippingAddress = useShippingAddress();
  const [product, setProduct] = useState();
  const [showFeeMessage, setShowFeeMessage] = useState(false);
  const lines = useCartLines([]);
  const feeLocations = ['CT', 'RI', 'CA', 'OR'];

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    if (product) {
      checkForRecycleFee();
    }
  },[product, shippingAddress.provinceCode]);

  function checkForRecycleFee() {
    if(!product) return;
    const provinceCode = shippingAddress?.provinceCode;
    let feeId = '';
    // if province code requires a recycling fee
    if (feeLocations.includes(provinceCode)) {
      for (const variant of product.variants.edges) {
        if (variant.node.selectedOptions[0].value === provinceCode) {
          console.log('found fee: ', variant);
          feeId = variant.node.id;
        }
      }
      if (feeId !== '') {
        let feeNeeded = 0;
        let feeFound = 0;
        let feeInCart;
        for (const line of lines) {
          if (line.merchandise.product.productType.toLowerCase() === 'mattress' || line.merchandise.product.productType.toLowerCase() === 'box spring') {
            feeNeeded = feeNeeded + line.quantity;
          } else if (line.merchandise.product.id === product.id) {
            feeFound = feeFound + line.quantity;
            feeInCart = line;
          } 
        }

        console.log('feeInCart: ', feeInCart);

        if (feeInCart && feeInCart.merchandise.selectedOptions[0].value !== provinceCode) {
          handleRemoveFromCart(feeInCart.id, feeInCart.quantity);
          handleAddToCart(feeId, feeInCart.quantity);
        }

        if (feeNeeded > feeFound) {
          const difference = feeNeeded - feeFound;
          setShowFeeMessage(true);
          handleAddToCart(feeId, difference);
        } else if (feeNeeded < feeFound) {
          handleRemoveFromCart(line.id, feeFound - feeNeeded);
        }
      }
    } else {
      // if province code does not require a recycling fee
      for (const line of lines) {
        if (line.merchandise.product.id === product.id) {
          setShowFeeMessage(false);
          handleRemoveFromCart(line.id, line.quantity);
        }
      }
    }
  }

  async function handleAddToCart(variantId, quantity) {
    const res = await applyCartLinesChange({
      type: 'addCartLine',
      merchandiseId: variantId,
      quantity: quantity,
    });
    console.log('res: ', res);
  }

  async function handleRemoveFromCart(lineId, quantity) {
    const res = await applyCartLinesChange({
      type: 'removeCartLine',
      id: lineId,
      quantity: quantity,
    });
    console.log('res: ', res);
  }

  async function fetchProduct() {
    try {
      const { data } = await query(
        `query ($id: ID!) {
          product(id: $id) {
            id
            variants(first: 4) {
              edges {
                node {
                  id
                  selectedOptions {
                    name
                    value
                  }
                }
              }
            }
          }
        }`,
        {
          variables: { id: `gid://shopify/Product/7516695199807` },
        }
      );
      if (product !== data.product) {
        setProduct(data.product);
      }
      return data.product;
    } catch (error) {
      console.error(error);
    }
  };

  if (showFeeMessage) {
    return (
      <Banner title="Recycling Fee Required" status="warning">
        This purchase requires a recycling fee, which we have added to your cart.
      </Banner>
    )
  } else {
    return null;
  }
}