const express=require('express')
const orderRouter=express.Router();
const {createOrder,getOrder}=require('../controllers/order')
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
orderRouter.post('/', 
authentication,
authorization("create"),
createOrder)
orderRouter.get('/:id',getOrder)
module.exports=orderRouter