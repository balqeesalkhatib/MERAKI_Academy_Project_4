const productModel = require("../models/productSchema");
//should send token
const createProduct = (req, res) => {
  //by user
  const { name, description, price, category, image } = req.body;
  //   const user = req.token.userId;
  //   console.log(user);
  const newProduct = new productModel({
    name,
    description,
    price,
    // user,
    category,
    image,
  });
  newProduct
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Product created successfully`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};
const readByCategoryId = (req, res) => {
  const { id } = req.params;
  productModel
    .find({ category: id })
    .populate("category", "-_id -__v -description")
    .exec()
    .then((result) => {
      if (result.length) {
        res.status(201).json({
          success: true,
          message: `Products of category ${id}`,
          result: result,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `The category with ${id} has no products yet`,
          result: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};
const readById = (req, res) => {
  const { id } = req.params;
  productModel
    .findOne({ _id: id })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Product with ${id}`,
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};
const updateProduct=(req,res)=>{
    const { name, description, price, category, image}=req.body
    const {id}=req.params
    productModel.findOneAndUpdate({_id:id},{ name, description, price, category, image},{ new: true})
    .then((result) => {
        res.status(201).json({
          success: true,
          message: `The product with ${id} has been updated successfully`,
          result: result,
        });
      })
    .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server error`,
          error: err.message,
        });
      })
}
module.exports = { createProduct, readByCategoryId, readById ,updateProduct};
