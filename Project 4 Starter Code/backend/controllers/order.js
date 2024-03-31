const orderModel = require("../models/orderSchema");
// send token
const createOrder = (req, res) => {
  const { status, date, product, user } = req.body;
  const newOrder = new orderModel({ status, date, product, user });
  newOrder
    .save()
    .then((result) => {
      res.status(201).json({
        success: true,
        message: `Order has been created successfully`,
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
const getOrder = (req, res) => {
  const { id } = req.params;
  orderModel
    .find({ user: id })
    .then((result) => {
      if (result.length) {
        res.status(200).json({
          success: true,
          message: `All the orders for user ${id}`,
          result: result,
        });
      } else {
        res.status(404).json({
          success: false,
          message: `User with ${id} has no order yet`,
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
const deleteOrder = (req, res) => {
  const { id } = req.params;
  orderModel
    .findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        res.status(404).json({
          success: false,
          message: `The product with ${id} not found`,
        });
      } else {
        res.status(201).json({
          success: true,
          message: `The product with ${id} has been deleted successfully`,
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

module.exports = { createOrder, getOrder, deleteOrder };
