const Product = require("../models/Product.model");
const Review = require("../models/Review.model");
const createError = require("http-errors");

module.exports.createReview = (req, res, next) => {
  Product.findById(req.params.id)
    .then((p) => {
      if (p.user === req.currentUser.id) {
        throw createError(403, "You cannot leave reviews for your own product");
      } else {
        const review = new Review({
          ...req.body,
          user: req.currentUser.id,
          product: p.id,
        });
        return review.save().then((r) => {
          res.json(r);
        });
      }
    })
    .catch((e) => next(e));
};

module.exports.deleteReview = (req, res, next) => {
  Review.findById(req.params.id)
    .then((r) => {
      if (r.user != req.currentUser.id) {
        throw createError(403, "You cannot delete another user's reviews");
      } else {
        return r.delete().then((r) => {
          res.json({});
        });
      }
    })
    .catch((e) => next(e));
};
