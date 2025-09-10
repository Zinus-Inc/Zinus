const { isProduction } = require('../utils');

exports.checkScopeAccess = (requiredScopes) => {
  return (req, res, next) => {
    if (isProduction) {
      const token = req.user;

      // Check if any token scopes matches a required scope
      token.scopes.forEach((scope) => {
        if (requiredScopes.find((requiredScope) => requiredScope === scope)) {
          return next();
        } else {
          return res.status(401).json({ code: '401', error: 'Insufficient permissions' });
        }
      });
    } else {
      return next();
    }
  };
};
