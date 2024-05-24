const userModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = (req, res) => {
  const { firstName, lastName, country, email, password, role } = req.body;
  const newUser = new userModel({
    firstName,
    lastName,
    country,
    email,
    password,
    role:"6607fa03c8f72b090fcb9972",
  });
  newUser
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        success: true,
        message: `Account Created Successfully`,
        result: result,
      });
    })
    .catch((err) => {
      console.log(err.keyPattern);
      console.log(err);
      if (err.keyPattern) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      res.status(500).json({
        success: false,
        message: `Server error`,
        error: err.message,
      });
    });
};
const login = (req, res) => {
  const { email, password } = req.body;
  userModel
    .findOne({ email })
    .populate("role")
    .then(async (result) => {
      if (!result) {
        res.status(403).json({
          success: false,
          message: `The email doesn't exist or The password you’ve entered is incorrect`,
        });
      } else {
        const isValid = await bcrypt.compare(password, result.password);
        if (!isValid) {
          res.status(403).json({
            success: false,
            message: `The email doesn't exist or The password you’ve entered is incorrect`,
          });
        } else {
          const options = { expiresIn: "10h" };
          const payload = {
            userId: result._id,
            email: result.email,
            firstName: result.firstName,
            expiresIn: options.expiresIn,
            country: result.country,
            role: {
              role: result.role.role,
              permissions: result.role.permissions,
            },
          };
          const token = jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json({
            success: true,
            message: `Valid login`,
            token: token,
          });
        }
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
        error: err.message,
      });
    });
};
module.exports = {
  register,
  login,
};
