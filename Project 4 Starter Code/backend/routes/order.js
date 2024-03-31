const express=require('express')
const orderRouter=express.Router();
const {createOrder}=require('../controllers/order')
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
orderRouter.post('/', 
authentication,
authorization("create"),
createOrder)
module.exports=orderRouter