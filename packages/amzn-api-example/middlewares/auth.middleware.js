const createError = require("http-errors");

module.exports.isAuthenticated = (req, _, next) => {
  if (req.session.user) {
    next();
  } else {
    next(createError(401));
  }
};

module.exports.isNotAuthenticated = (req, _, next) => {
  if (req.session.user) {
    next(createError(403));
  } else {
    next();
  }
};
