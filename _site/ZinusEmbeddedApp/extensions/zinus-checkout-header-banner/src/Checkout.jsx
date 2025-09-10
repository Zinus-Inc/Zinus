import {
  reactExtension,
  Image,
  BlockSpacer,
  Grid,
  InlineStack,
  Text,
  Style,
  BlockStack,
  TextBlock,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  'purchase.checkout.header.render-after',
  () => <Extension />,
);

function Extension() {
  return (
    <Grid spacing="none" padding={"none"} inlineAlignment="center" columns={[`auto`, `auto`, `auto`]} responsive>
      <InlineStack blockAlignment="center" spacing="tight" maxInlineSize="80%" minInlineSize="50%" responsive>
        <Grid spacing="none" inlineAlignment="center" columns={Style.default(['auto']).when({viewportInlineSize: {min: 'small'}}, ['auto', '70%'])} blockAlignment="center" responsive>
          <Image source="https://cdn.shopify.com/s/files/1/0681/7359/4853/files/image_2.png?v=1730927700" accessibilityDescription="Zinus logo featuring a green leaf design and the company name, specializing in Zinus mattress, Zinus bed frame, Zinus bedframe, and Zinus bed frames, offering quality sleep solutions and upsell opportunities." />
          <BlockStack inlineAlignment={Style.default("start").when({viewportInlineSize: {min: 'small'}}, "center")}>
          <TextBlock inlineAlignment="center" emphasis="bold">Ships in 1 business day</TextBlock>
          </BlockStack>
        </Grid>
      </InlineStack>
      <InlineStack blockAlignment="center" spacing="tight" maxInlineSize="80%" minInlineSize="50%" responsive>
        <Grid spacing="none" inlineAlignment="center" columns={Style.default(['auto']).when({viewportInlineSize: {min: 'small'}}, ['auto', '60%'])} blockAlignment="center" responsive>
          <Image source="https://cdn.shopify.com/s/files/1/0681/7359/4853/files/image_3.png?v=1730927699" fit="contain" />
          <BlockStack inlineAlignment="center">
          <TextBlock  inlineAlignment="center" emphasis="bold" align="center">Free Delivery in 3-5 days</TextBlock>
          </BlockStack>
        </Grid>
      </InlineStack>
      <InlineStack blockAlignment="center" spacing="tight" maxInlineSize="80%" minInlineSize="50%" responsive>
        <Grid spacing="none" inlineAlignment="center" columns={Style.default(['auto']).when({viewportInlineSize: {min: 'small'}}, ['auto', '70%'])} blockAlignment="center" responsive>
          <Image source="https://cdn.shopify.com/s/files/1/0681/7359/4853/files/image_1_1.png?v=1730927699" fit="contain" />
          <BlockStack inlineAlignment="center">
          <TextBlock  inlineAlignment="center" emphasis="bold" align="center">100-night mattress trial</TextBlock>
          </BlockStack>
        </Grid>
      </InlineStack>
    </Grid>
  );
}