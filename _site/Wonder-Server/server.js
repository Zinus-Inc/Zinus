require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('express-jwt');
const rateLimit = require('express-rate-limit');
const timeout = require('connect-timeout');
const cors = require('cors');
const multer = require('multer');
const port = process.env.PORT || 1818;
const { checkScopeAccess } = require('./middleware/auth');
const { isProduction, welcomeMessage } = require('./utils');

if (isProduction) {
  app.enable('trust proxy');
  app.use(function (req, res, next) {
    if (req.secure) {
      // request was via https, so do no special handling
      return next();
    } else {
      // request was via http, so redirect to https
      return res.redirect('https://' + req.headers.host + req.url);
    }
  });

  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 300 // limit each IP to 100 requests per windowMs
  });

  // rate limiter
  app.use(limiter);
}

app.use(timeout('20s'));
app.use(express.json());
const upload = multer();

app.get('/', (req, res) => {
  return res.status(200).send(welcomeMessage);
});

const whitelist = [
  'https://www.zinus.com',
  'https://zinus.frontend.getshogun.com',
  'https://zinus-canada.frontend.getshogun.com',
  'https://www.zinus.ca',
  'https://zinus-uk.frontend.getshogun.com',
  'https://www.zinus.uk',
  'https://www.zinus.co.uk',
  'https://zinus-germany.frontend.getshogun.com',
  'https://www.zinus.com.de',
  'https://zinus-australia.frontend.getshogun.com',
  'https://www.zinus.com.au',
  'https://www.zinus.jp',
  'https://zinus-france.frontend.getshogun.com',
  'https://www.zinus.fr',
  'https://zinus-staging-preview.frontend.getshogun.com',
  'https://zinus-staging.frontend.getshogun.com',
  'https://zinususa.myshopify.com',
  'https://zinusdevtl.myshopify.com',
  'https://www.zinus.it',
  'https://zinus-it.frontend.getshogun.com',
  'https://www.zinus.es',
  'https://zinus-es.frontend.getshogun.com',
  'https://www.zinus.fr',
  'https://zinus-fr.frontend.getshogun.com',
  'https://www.mellow-home.com',
  'https://mallowsleep.myshopify.com',
  'https://mellow-home.com.au'
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log('origin: ', origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log('allowed by CORS, callback being fired');
      callback(null, true);
    } else {
      console.log('in else, not allowed by CORS');
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const cjCorsOptions = {
  origin: 'https://www.zinus.com',
  optionsSuccessStatus: 200,
  credentials: true
};

// Public Routes
app.use('/api/cj-track', cors(isProduction && cjCorsOptions), require('./routes/cj-track'));
app.use('/api/klaviyo', cors(isProduction && corsOptions), require('./routes/klaviyo'));
app.use('/api/rebuy-proxy', cors(isProduction && corsOptions), require('./routes/rebuy-prox'));
app.use('/api/product-feed', require('./routes/product-feed'));

const cpUpload = upload.fields([{ name: 'file', maxCount: 5 }]);
app.use('/api/email', [cors(isProduction && corsOptions), cpUpload], require('./routes/email'));
app.use('/api/ebay', require('./routes/ebay'));

// Private Routes
if (isProduction) {
  // Don't check API keys in development env.
  app.use(
    jwt({
      secret: process.env.JWT_SECRET,
      algorithms: ['HS256'],
      credentialsRequired: true,
      getToken: function fromHeaderOrQuerystring(req) {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          return req.headers.authorization.split(' ')[1];
        }

        if (req.query && req.query.token) {
          return req.query.token;
        }

        return null;
      }
    })
  );

  // Handle errors from JWT validation
  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(401).json({ code: '401', error: err.message });
    }
  });
}

app.use('/api/pickup', checkScopeAccess(['pickup_program']), require('./routes/pickup'));

// 404. Handle when a path doesn't exist.
app.use((req, res) => {
  return res.status(404).json({ code: '404', error: 'Whoops, that path does not exist :o' });
});

app.listen(port, () => {
  if (!isProduction) {
    // eslint-disable-next-line no-console
    console.log(`API listening on port ${port}!`);
  }
});
