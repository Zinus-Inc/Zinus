const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/back-in-stock', async (req, res) => {
  try {
    console.log('req.body.data: ', req.body.data);
    const response = await axios.post(
      'https://a.klaviyo.com/onsite/components/back-in-stock/subscribe',
      req.body.data ? req.body.data : new URLSearchParams(req.body).toString(),
    );
    return res.json(response.data);
  } catch (error) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }

    console.error(error);
    return res.status(500);
  }
});

router.post('/subscribe', async (req, res) => {
  const { listId } = req.query;
  const { email } = req.body.profiles[0];

  const getKlaviyoKey = () => {
    let originStoreUrl = req.header('Origin')?.split('www.')[1];
    const referrer = req.get('Referrer') || req.headers.referrer;
    console.log('referrer: ', referrer);
    console.log('originStoreUrl before check: ', originStoreUrl);
    if (originStoreUrl === undefined) {
      console.log('inside if');
      originStoreUrl = referrer.replace('https://', '');
    }
    console.log('originStoreUrl updated: ', originStoreUrl);
    let key;
    if (!originStoreUrl) return process.env.KLAVIYO_KEY;
    switch (originStoreUrl) {
      case 'zinus.fr':
      case 'zinus.com.de':
      case 'zinus.co.uk':
      case 'zinus.it':
      case 'zinus.es':
        key = process.env.KLAVIYO_EU_KEY;
        break;
      case 'zinus.com.au':
      case 'zinus.com':
        key = process.env.KLAVIYO_KEY;
        break;
      case 'mellow-home.com.au/':
        key = process.env.KLAVIYO_MELLOW_AUS_KEY;
        break;
    }
    return key;
  }

  const url = `https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/`;
  const headers = {
    accept: 'application/json',
    revision: '2024-02-15',
    'content-type': 'application/json',
    Authorization: `Klaviyo-API-Key ${getKlaviyoKey()}`
  }
  const data = {
    data: {
      type: 'profile-subscription-bulk-create-job',
      attributes: {
        custom_source: 'Web Signup',
        profiles: {
          data: [
            {
              type: 'profile',
              attributes: {
                email: email,
                subscriptions: {
                  email: { marketing: { consent: 'SUBSCRIBED'}},
                }
              }
            }
          ]
        }
      },
      relationships: { list: { data: { type: 'list', id: listId }}}
    }
  };

  console.log('data: ', data);

  try {
    const response = await axios.post(url, data, { headers });
    return res.json(response.data);
  } catch (error) {
    console.error(error);
  }
});

// router.post('/subscribe', async (req, res) => {
//   try {
//     const { listId } = req.query;
//     console.log('req.body: ', req.body);
//     const { email } = req.body.profiles[0]
    
//     const getKlaviyoKey = () => {
//       const originStoreUrl = req.header('Origin').split('www.')[1];
//       let key;
//       switch (originStoreUrl) {
//         case 'zinus.fr':
//         case 'zinus.com.de':
//         case 'zinus.co.uk':
//         case 'zinus.it':
//         case 'zinus.es':
//           key = process.env.KLAVIYO_EU_KEY;
//           break;
//         case 'zinus.com.au':
//         case 'zinus.com':
//           key = process.env.KLAVIYO_KEY;
//           break;
//       }
//       return key;
//     }
    
//     const response = await axios.post(
//       `https://a.klaviyo.com/api/v2/list/${listId}/subscribe?api_key=${getKlaviyoKey()}`,
//       req.body
//     );

//     return res.json(response.data);
//   } catch (error) {
//     console.error(error);

//     if (error.response) {
//       return res.status(error.response.status).json(error.response.data);
//     }

//     return res.status(500);
//   }
// });

module.exports = router;
