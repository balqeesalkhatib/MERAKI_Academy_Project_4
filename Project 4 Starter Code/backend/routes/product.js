const express = require("express");
const productRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const { createProduct,
     readByCategoryId,
     readById } = require("../controllers/product");
productRouter.post(
  "/:id/product",
  authentication,
  authorization("create"),
  createProduct
);
productRouter.get("/:id/product", authentication, readByCategoryId);
productRouter.get("/product/:id",authentication,readById)
module.exports = productRouter;
