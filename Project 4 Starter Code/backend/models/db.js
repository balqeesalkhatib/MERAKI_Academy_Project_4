const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("backend project 4 ready to use");
  })
  .catch((err) => {
    console.log(err);
  });
