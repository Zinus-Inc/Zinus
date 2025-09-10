import React from 'react';
import {
  Banner,
  reactExtension,
  useShippingAddress,
  useBuyerJourneyIntercept
} from '@shopify/ui-extensions-react/checkout';

const deliveryAddress = reactExtension("purchase.checkout.delivery-address.render-before", () => <ContiguousStatesBanner />);
export { deliveryAddress };

function ContiguousStatesBanner() {
  const shippingAddress = useShippingAddress();
  const restrictedLocations = ['AK', 'HI', 'GU', 'AS', 'PR', 'FM', 'MH', 'MP', 'PW', 'VI', 'AA', 'AE', 'AP'];

  useBuyerJourneyIntercept(
    () => {
      return shippingAddress?.provinceCode && 
      restrictedLocations.includes(shippingAddress?.provinceCode)
      ? {
        behavior: 'block',
        reason: 'We currently do not ship to your location.',
        errors: [
          {
            message: 'We ship to the 48 contiguous states and the District of Columbia. We currently do not ship to Alaska, Hawaii, and U.S. territories.',
            target: '$.cart.deliveryGroups[0].deliveryAddress.provinceCode',
          },
        ],
      }
      : {
        behavior: 'allow',
      };
    }
  );

  return null;
}