const express = require("express");
const productRouter = express.Router();
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const productCheck=require('../middleware/productCheck')
const { createProduct,
     readByCategoryId,
     readById,
     updateProduct,
     DeleteProductById,
     } = require("../controllers/product");
productRouter.post(
  "/:id/product",
  authentication,
  authorization("create"),
  createProduct
);
productRouter.get("/:id/product", authentication, readByCategoryId);
productRouter.get("/product/:id",authentication,readById)
productRouter.put("/product/:id",authentication,authorization("update"),updateProduct)
productRouter.delete("/product/:id",authentication,authorization("delete"),DeleteProductById)
module.exports = productRouter;
