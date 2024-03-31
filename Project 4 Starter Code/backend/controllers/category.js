const categoryModel = require("../models/categorySchema");
const createCategory = (req, res) => {
  const { name, description } = req.body;
  const newCategory = new categoryModel({
    name,
    description,
  });
  newCategory
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Created successfully`,
        category: result,
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
const getAllCategories = (req, res) => {
  categoryModel
    .find({})
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `All the categories`,
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
const updateCategory = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  categoryModel
    .findOneAndUpdate({ _id: id }, { name, description }, { new: true })
    .then((result) => {
      res.status(200).json({
        success: true,
        message: `Category updated`,
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
module.exports = { createCategory, getAllCategories, updateCategory };
