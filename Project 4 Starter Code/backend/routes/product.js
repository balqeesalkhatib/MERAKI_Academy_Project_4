const express = require("express");
const productRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const { createProduct } = require("../controllers/product");
productRouter.post(
  "/:id/product",
  authentication,
  authorization("create"),
  createProduct
);
module.exports = productRouter;
