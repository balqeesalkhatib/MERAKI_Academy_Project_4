const orderModel=require('../models/orderSchema')
// send token
const createOrder=(req,res)=>{
const {status,date,product,user}=req.body
const newOrder= new orderModel({status,date,product,user});
newOrder.save()
.then((result)=>{
    res.status(201).json({
        success: true,
      message: `Order has been created successfully`,
      result:result,
    })
})
.catch((err) => {
    res.status(500).json({
      success: false,
      message: `Server error`,
      error: err.message,
    });
  })
}
module.exports={createOrder}