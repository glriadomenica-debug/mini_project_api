const course_model = require("../models/course_model");
const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");
const cache = require("../config/cache");
const { json } = require("express");

const course_controller = {
  getAll: async (req, res, next) => {
    try {
      const courses = await course_model.findAll();

      res.json({
        code: 200,
        message: "Succesfully get courses",
        data: courses,
      });
    } catch (error) {
      next(error);
    }
  },
  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await course_model.findById(id);
      res.json({
        code: 200,
        message: "Succesfully get course by ID " + id,
        data: course,
      });
    } catch (error) {
      next(error);
    }
  },
  getAllWithRelation: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const courses = await course_model.findAllWithRelation();
      res.json({
        code: 200,
        message: "Successfully get courses with users & categories",
        data: courses,
      });
    } catch (error) {
      next(error);
    }
  },

  getCountInstructor : async (res, req, next) => {
    try {
      const count = await course_model.getCountInstructor();

      res.json({
        code: 200,
        message : "Succesfully get course count per instructor",
        data : count,
      });
    } catch (error) {
      next(error);
    }
  },
  store: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const { nama_course, price, kuota, id_category, id_users } = req.body;

      // if (!nama_course || !price || !kuota || !id_category || !id_users) {
      //   res.status(400).json({ message: "All field are required!!" });
      // }
      const data = {
        nama_course: nama_course,
        price: price,
        kuota: kuota,
        id_category: id_category,
        id_users: id_users,
      };
      const course = await course_model.store(data);
      res.json({
        code: 200,
        message: "Succesfully store course",
        data: {
          id: course.insertId,
          nama_course: data.nama_course,
          price: data.price,
          kuota: data.kuota,
          id_category: data.id_category,
          id_users: data.id_users,
        },
      });
    } catch (error) {
      next(error);
    }
  },
  update: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const { id } = req.params;
      const { nama_course, price, kuota, id_category, id_users } = req.body;

      if (!nama_course && !price && !kuota && !id_category && !id_users) {
        throw new AppError("All field are required", 400);
      }

      const oldDataCourse = await course_model.findById(id);

      if (!oldDataCourse) {
        return res.status(404).json({ message: "Course not found" });
      }
      const data = {
        nama_course: nama_course ? nama_course : oldDataCourse.nama_course,
        price: price ? price : oldDataCourse.price,
        kuota: kuota ? kuota : oldDataCourse.kuota,
        id_category: id_category ? id_category : oldDataCourse.id_category,
        id_users: id_users ? id_users : oldDataCourse.id_users,
      };
      await course_model.update(id, data);
      res.json({
        code: 200,
        message: "Successfully update course",
        data: {
          id: id,
          nama_course: data.nama_course,
          price: data.price,
          kuota: data.kuota,
          id_category: data.id_category,
          id_users: data.id_users,
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
      const course = await course_model.findById(id);

      if (!course) {
        throw new AppError("Course not found", 404);
      }
      await course_model.destroy(id);
      res.json({
        code: 200,
        message: "Successfully delete course",
      });
    } catch (error) {
      next(error);
    }
  },
};
module.exports = course_controller;
