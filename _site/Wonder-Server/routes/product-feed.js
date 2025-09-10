const express = require('express');
const axios = require('axios');
const { convert } = require('html-to-text');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const authUrlPortion = `https://${process.env.SHOPIFY_USERNAME}:${process.env.SHOPIFY_PASSWORD}@zinususa.myshopify.com`;
    const productFeed = [];
    let requestURL = `${authUrlPortion}/admin/api/2022-01/products.json?status=ACTIVE&selectedView=all`;
    let morePages = true;

    while (morePages) {
      const response = await axios.get(requestURL);

      for (product of response.data.products) {
        const { body_html, title: productTitle, handle, images, variants, product_type, id: productId } = product;
        if (product_type === 'Protection Plan' || product_type === 'Insurance') {
          continue;
        }

        if (variants.length > 1) {
          variants.forEach((variant) => {
            let variantImageId = variant.image_id;
            let variantImage = null;
            if (variantImageId) {
              const variantImageObj = images.find((image) => image.id === variantImageId);
              variantImage = variantImageObj?.src;
            } else if (!variantImageId && images.length > 0) {
              variantImage = images[0]?.src;
            }
            
            productFeed.push({
              title: productId !== 7269091967039 ? `${productTitle} - ${variant.title}` : `${variant.title}`,
              id: variant.id,
              inventory_quantity: variant.inventory_quantity,
              description: convert(body_html),
              price: parseFloat(variant.price),
              link: `https://www.zinus.com/${product_type}/${handle}?variant=${variant.id}`,
              inventory_policy: 1,
              categories: [product_type],
              image_link: variantImage
            });
          });
        } else {
          productFeed.push({
            title: productTitle,
            id: variants[0].id,
            description: convert(body_html),
            inventory_quantity: variants[0].inventory_quantity,
            price: parseFloat(variants[0].price),
            link: `https://www.zinus.com/${product_type}/${handle}`,
            inventory_policy: 1,
            categories: [product_type],
            image_link: (images.length > 0 && images[0].src) || null
          });
        }
      }

      const headerLink = response.headers.link;
      if (headerLink && headerLink.includes('next')) {
        requestURL = headerLink
          .substring(headerLink.lastIndexOf('<') + 1, headerLink.lastIndexOf('>'))
          .replace('https://zinususa.myshopify.com', authUrlPortion);
        morePages = true;
      } else {
        morePages = false;
      }
    }

    return res.json(productFeed);
  } catch (error) {
    console.error(error);

    return res.status(500);
  }
});

module.exports = router;
