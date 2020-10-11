const createError = require("http-errors");

module.exports.index = (req, res, next) => {
  res.json({ title: "Welcome!" });
};
