import {
  Text,
  reactExtension,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.reductions.render-after',
  () => <Extension />,
);

function Extension() {
  const {
    merchandise: {title},
  } = useTarget();
  return <Text size='large'>Line item title: </Text>;
}