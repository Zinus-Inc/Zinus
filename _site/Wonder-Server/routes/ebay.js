const express = require('express');
const router = express.Router();
const { createHash } = require('crypto');

router.get('/privacy', async (req, res) => {
  const { challenge_code: challengeCode } = req.query;
  if (!challengeCode) {
    return res.status(400).json({ error: 'No challenge code entered.' });
  }

  const hash = createHash('sha256');
  hash.update(challengeCode);
  hash.update(process.env.EBAY_PRIVACY_VERIFICATION_TOKEN);
  hash.update('https://wapi.zinus.com/api/ebay/privacy');
  const responseHash = hash.digest('hex');

  return res.json({ challengeResponse: responseHash });
});

module.exports = router;
