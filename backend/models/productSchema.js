const mongoose = require("mongoose");
const productSchema=new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    price: { type: Number },
   category: { type: mongoose.Schema.Types.ObjectId,ref:"Category"},
   image:{type:String},
   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})
module.exports=mongoose.model("Product",productSchema)