const productModel = require("../models/productSchema");
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
  newProduct.save()
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
  })
};
module.exports = { createProduct };
