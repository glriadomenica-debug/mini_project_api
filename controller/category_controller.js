const category_model = require("../models/category_model");
const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");
const cache = require("../config/cache");
const { json } = require("express");

const controller_category = {
  getAll: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const CACHE_KEY = "all categories";
      const cachedData = await cache.get(CACHE_KEY);

      if (cachedData) {
        return res.json({
          code: 200,
          source: "cache",
          message: "Successfully get categories",
          data: JSON.parse(cachedData),
        });
      }

      const categories = await category_model.findAll();

      cache.set(CACHE_KEY, JSON.stringify(categories), 60);
      res.json({
        code: 200,
        source: "database",
        message: "Successfully get categories",
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  },
  getByID: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const category = await category_model.findById(id);
      res.json({
        code: 200,
        message: "Succesfully get course",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errrors: errors.array(),
        });
      }
      const { nama_category, deskripsi } = req.body;

      const data = {
        nama_category: nama_category,
        deskripsi: deskripsi,
      };
      const category = await category_model.store(data);
      res.json({
        code: 200,
        message: "Succesfully store category",
        data: {
          id: category.insertId,
          nama_category: data.nama_category,
          deskripsi: data.deskripsi,
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
      const { nama_category, deskripsi } = req.body;

      if (!nama_category && !deskripsi) {
        throw new AppError("category name and description are required", 400);
      }
      const oldCategory = await category_model.findById(id);
      if (!oldCategory) {
        return res.status(400).json({ message: "category not found" });
      }
      const data = {
        nama_category: nama_category
          ? nama_category
          : oldCategory.nama_category,
        deskripsi: deskripsi ? deskripsi : oldCategory.deskripsi,
      };
      await category_model.update(id, data);
      res.json({
        code: 200,
        message: "Succesfully update category",
        data: {
          id: id,
          nama_category: data.nama_category,
          deskripsi: data.deskripsi,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  destroy: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const category = await category_model.findById(id);

      if (!category) {
        throw new AppError("Category not found", 404);
      }
      await category_model.destroy(id);
      res.json({
        code: 200,
        message: "Succesfully delete category",
      });
    } catch (error) {
      next(error);
    } 
  },
};
module.exports = controller_category;
