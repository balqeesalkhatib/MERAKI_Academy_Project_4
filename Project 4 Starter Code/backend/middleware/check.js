const orderModel = require("../models/orderSchema");
const check=(req,res,next)=>{
    const {id}=req.params;
    orderModel.findById(id).then((result)=>{
       if(result){
        if(result.user.valueOf()===req.token.userId){
            next()
        }
        else{
            res.status(403).json({
                success: false,
                message: `Unauthorized`,
              });
        }
       }
else{
    next()
}
    })
    .catch(
        (err) => {
            res.status(500).json({
              success: false,
              message: `Server error`,
              error: err.message,
            });
          }
    )
}
module.exports= check