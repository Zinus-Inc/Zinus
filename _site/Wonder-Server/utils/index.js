exports.isProduction =
  process.env.NODE_ENV === 'PRODUCTION' || process.env.NODE_ENV === 'production';

exports.welcomeMessage = `
  <html lang="en-US">
  <head>
    <title>Zinus Wonder Server</title>
    <meta name="robots" content="noindex" />
  </head>
  <body>
    <h3>Welcome to the Zinus, Inc. Wonder Server!</h3>
    <p>If you don't have needed credentials, email your friendly neighborhood webdev.</p>
  </body>
`;
