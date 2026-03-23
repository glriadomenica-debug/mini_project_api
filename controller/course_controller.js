const course_model = require("../models/course_model");

const course_controller = {
  getAll: async (req, res) => {
    try {
      const courses = await course_model.findAll();
      res.json({
        code: 200,
        message: "Succesfully get courses",
        data: courses,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await course_model.findById(id);
      res.json({
        code: 200,
        message: "Succesfully get course",
        data: course,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getAllWithRelation: async (req, res) => {
    try {
      const courses = await course_model.findAllWithRelation();
      res.json({
        code: 200,
        message: "Successfully get courses with users & categories",
        data: courses,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  store: async (req, res) => {
    try {
      const { nama_course, price, kuota, id_category, id_users } = req.body;

      if (!nama_course || !price || !kuota || !id_category || !id_users) {
        res.status(400).json({ message: "All field are required!!" });
      }
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
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_course, price, kuota, id_category, id_users } = req.body;

      if (!nama_course && !price && !kuota && !id_category && !id_users) {
        return res.status(400).json({ message: "All field are required" });
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
      res.status(500).json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const course = await course_model.findById(id);

      if (!course) {
        return res.status(400).json({ message: "User not found" });
      }
      await course_model.destroy(id);
      res.json({
        code: 200,
        message: "Successfully delete user",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
module.exports = course_controller;
