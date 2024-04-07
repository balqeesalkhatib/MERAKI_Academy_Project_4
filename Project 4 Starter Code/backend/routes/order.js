const express=require('express')
const orderRouter=express.Router();
const {createOrder,getOrder,deleteOrder,getAllOrders}=require('../controllers/order')
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");
const check=require('../middleware/check')
orderRouter.get('/',authentication,getAllOrders)
orderRouter.post('/', 
authentication,
authorization("create"),check,
createOrder)
orderRouter.get('/:id',getOrder)
orderRouter.delete('/:id',authentication,
authorization("delete"),check,deleteOrder)
module.exports=orderRouter