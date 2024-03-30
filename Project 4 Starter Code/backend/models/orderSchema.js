const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  status: { type: String },
  date: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
});
module.exports = mongoose.model("Order", orderSchema);
