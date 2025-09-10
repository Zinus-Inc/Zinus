const express = require('express');
const router = express.Router();
const { isProduction } = require('../utils/index');

router.post('/:cjeventID', async (req, res) => {
  const { cjeventID } = req.params;

  if (!cjeventID) {
    return res.status(400);
  }

  const thirteenMonths = 60 * 1000 * 60 * 24 * 30 * 13;

  res.cookie('cje', cjeventID, {
    domain: isProduction && '.zinus.com',
    maxAge: thirteenMonths,
    httpOnly: false,
    secure: isProduction ? true : false
  });

  return res.send('Success. Cookie sent at ya.');
});

module.exports = router;
