const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config()
const db=require('./models/db')
app.use(cors());
app.use(express.json());
//=============Routers===================
const userRouter =require('./routes/user')
const roleRouter=require('./routes/role')
const categoryRouter=require('./routes/category')
const productRouter=require('./routes/product')
const orderRouter=require('./routes/order')
app.use('/users',userRouter)
app.use('/roles',roleRouter)
app.use('/category',categoryRouter)
app.use('/category',productRouter)
app.use('/order',orderRouter)
// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
