import { useState, useEffect } from 'react';
import {
  BlockLayout,
  View,
  Button,
  Text,
  useApi,
  useTranslate,
  reactExtension,
  useEmail,
  useSettings
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.thank-you.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension, orderConfirmation } = useApi();
  const email = useEmail();
  const { orderStatusTitle, orderStatusMessage, orderStatusButton } = useSettings();
  const [link, setLink] = useState('');

  useEffect(() => {
    if (email) {
      setLink(`https://www.zinus.com/apps/tracktor/track?token=${modifyEmail(email)}&order=${orderConfirmation.current.number}`)
    }
  }, [email, orderConfirmation])

  function modifyEmail(email) {
    const splitString = email.split('');
    const reverseArray = splitString.reverse();
    const joinArray = reverseArray.join('');
    return encodeURIComponent(joinArray.replace('@', '_-_'));
  }

  console.log('email: ', email);

  return (
    <BlockLayout rows={['auto', 'fill']}>
      <View border='base' padding='base' cornerRadius={['base', 'base', 'none', 'none']}>
        <Text>{orderStatusTitle || translate('orderStatusTitle', {target: extension.target})}</Text>
      </View>
      <View border='base' padding='base' cornerRadius={['none', 'none', 'base', 'base']}>
        <Text>
          {orderStatusMessage || translate('orderStatusMessage', {target: extension.target})}
        </Text>
        <View padding={['base', 'none']}>
          <Button to={link}>
            {orderStatusButton || translate('orderStatusButton', {target: extension.target})}
          </Button>
        </View>
      </View>
    </BlockLayout>
  );
}