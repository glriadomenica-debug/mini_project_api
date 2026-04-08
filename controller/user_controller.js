const user_model = require("../models/user_model");
const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");
const cache = require("../config/cache");
const { json } = require("express");

const user_controller = {
  getAll: async (req, res, next) => {
    try {
      const CACHE_KEY = "all users";
      const cachedData = cache.get(CACHE_KEY);
      if (cachedData) {
        return res.json({
          codde: 200,
          source: "cache",
          message: "Successfully get users",
          data: JSON.parse(cachedData),
        });
      }
      const users = await user_model.findAll();

      cache.set(CACHE_KEY, JSON.stringify(users));
      res.json({
        code: 200,
        source: "database",
        message: "Succesfully get users",
        data: users,
      });
    } catch (error) {
      next(error);
    }
  },
  getByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await user_model.findById(id);
      res.json({
        code: 200,
        message: "Succesfully get user",
        data: user,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  store: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const { nama, email, role } = req.body;

      // if (!nama || !email || !role) {
      //   return res.status(400).json({ message: "All field are required!" });
      // }
      const data = {
        nama: nama,
        email: email,
        role: role,
      };
      const user = await user_model.store(data);
      res.json({
        code: 200,
        message: "Succesfully store user",
        data: {
          id: user.insertId,
          nama: data.nama,
          email: data.email,
          role: data.role,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const { nama, email, role } = req.body;
      if (!nama && !email && !role) {
        throw new AppError("All field are required!", 400);
      }
      const oldUser = await user_model.findById(id);

      if (!oldUser) {
        return res.status(404).json({ message: "User not found" });
      }
      const data = {
        nama: nama ? nama : oldUser.nama,
        email: email ? email : oldUser.email,
        role: role ? role : oldUser.role,
      };
      await user_model.update(id, data);
      res.json({
        code: 200,
        message: "Succesfully update user",
        data: {
          id: id,
          nama: data.nama,
          email: data.email,
          role: data.role,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const user = await user_model.findById(id);

      if (!user) {
        throw new AppError("User not found", 404);
      }
      await user_model.destroy(id);
      res.json({
        code: 200,
        message: "Succesfully delete user",
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = user_controller;
