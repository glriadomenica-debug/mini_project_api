require("dotenv").config();
const { validationResult } = require("express-validator");
const model_user = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");

const authController = {
  registration: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { nama, email, password, role } = req.body;

      const hashPassword = await bcrypt.hash(password, 10);
     
      const data = {
        nama: nama,
        email: email,
        password: hashPassword,
        role: role,
      };

      const user = await model_user.registration(data);
      if (user) {
        return res.status(201).json({
          code: 201,
          message: "Successfully registration",
          data: user,
        });
      }

      console.log(hashPassword);
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;

      const user = await model_user.findByEmail(email);

      if (!user) {
        throw new AppError("Email or password is wrong", 400);
      }

      const checkPassword = await bcrypt.compare(password, user.password);
      if (!checkPassword) {
        throw new AppError("email or password is wrong", 400);
      }

      const token = jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_SECRET_KEY,
        {
          expiresIn: process.env.JWT_EXPIRES_IN,
        },
      );

      res.json({
        code: 200,
        message: "Successfully login",
        data: {
          token: token,
          user: {
            nama: user.nama,
            email: user.email,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = authController;
