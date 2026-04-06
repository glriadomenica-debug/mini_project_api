require("dotenv").config();
// const { validationResult } = require("express-validator");
const userModel = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const authController = {
  registration : async (req,res,next) => {
    try {
      const errors = validationResult(req);

      if(!errors.isEmpty()){
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const {}
    }
  }
}