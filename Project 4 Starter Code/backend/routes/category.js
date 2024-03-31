const express=require('express')
const categoryRouter=express.Router();
const {createCategory,getAllCategories,updateCategory}=require('../controllers/category')
categoryRouter.post('/',createCategory)
categoryRouter.get('/',getAllCategories)
categoryRouter.put('/:id',updateCategory)
module.exports=categoryRouter