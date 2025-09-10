const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
    console.log('route triggered for rebuy proxy');
    try {
        const { data_id, product_ids, variant_ids } = req.query;
        const key = process.env.REBUY_API_KEY;
        const url = `https://rebuyengine.com/api/v1/custom/id/${data_id}?key=${key}&shopify_product_ids=${product_ids}&shopify_variant_ids=${variant_ids}&metafields=yes`;
        const response = await axios.get(url);
        return res.json(response.data);

    } catch (error) {
        console.error(error);
        const { data_id, product_ids, variant_ids } = req.query;
        return res.json({data: error, status: 404, data_id, product_ids, variant_ids});
    }

})

module.exports = router;