const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
const baseController = require("../controllers/base.controller");
const userController = require("../controllers/user.controller");
const productController = require("../controllers/product.controller");
const reviewController = require("../controllers/review.controller");

module.exports = router;

router.get("/", baseController.index);

// Authentication
router.post("/login", userController.login);
router.get("/logout", authMiddleware.isAuthenticated, userController.logout);

// Users
router.get("/user/:id", authMiddleware.isAuthenticated, userController.profile);

// Products
router.get("/product", authMiddleware.isAuthenticated, productController.list);

router.post(
  "/product",
  authMiddleware.isAuthenticated,
  productController.create
);

router.get(
  "/product/:id",
  authMiddleware.isAuthenticated,
  productController.single
);

router.patch(
  "/product/:id/edit",
  authMiddleware.isAuthenticated,
  productController.edit
);

router.delete(
  "/product/:id",
  authMiddleware.isAuthenticated,
  productController.delete
);

// Reviews
router.post(
  "/product/:id/review",
  authMiddleware.isAuthenticated,
  reviewController.createReview
);
router.delete(
  "/review/:id",
  authMiddleware.isAuthenticated,
  reviewController.deleteReview
);
