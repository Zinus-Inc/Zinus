import React, { useState, useEffect } from "react";
import {
  reactExtension,
  Banner,
  useSettings,
} from "@shopify/ui-extensions-react/checkout";

// Set the entry points for the extension
const checkoutBlock = reactExtension("purchase.checkout.block.render", () => <App />);
export { checkoutBlock };

function App() {
  // Use the merchant-defined settings to retrieve the extension's content
  const {title: merchantTitle, description: merchantDescription, collapsible, status: merchantStatus, expiredTimerMessage: merchantExpiredTimer} = useSettings();
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  function getSeconds(num) {
    const minutes = num / 60;
    const seconds = num - Math.floor(minutes) * 60;
    if (seconds < 10) {
      return `0${seconds}`;
    } else {
      return (seconds);
    }
  }

  function getMinutes(num) {
    return Math.floor(num / 60);
  }

  function getTimeLeft(num) {
    const minutes = getMinutes(num);
    const seconds = getSeconds(num);
    return `${minutes}:${seconds}`;
  }

  // Set a default status for the banner if a merchant didn't configure the banner in the checkout editor
  const status = merchantStatus ?? 'info';
  const title = merchantTitle ?? 'Hurry!';
  const description = merchantDescription ?? 'Your order is reserved for {{ timeLeft }} minutes!';
  const expiredTimer = merchantExpiredTimer ?? 'Check out now to secure your items.';

  // Render the banner
  return (
    <Banner title={title} status={status} collapsible={collapsible}>
      {getMinutes(timeLeft) === 0 && (getSeconds(timeLeft) === 0 || getSeconds(timeLeft) === "00") ? expiredTimer : description.replace('{{ timeLeft }}', getTimeLeft(timeLeft))}
    </Banner>
  );
}
