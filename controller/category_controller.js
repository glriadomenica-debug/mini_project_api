const category_model = require("../models/category_model");

const model_category = {
  getAll: async (req, res) => {
    try {
      const category = await category_model.findAll();
      res.json({
        code: 200,
        message: "Successfully get category",
        data: category,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getByID: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await category_model.findById(id);
      res.json({
        code: 200,
        message: "Succesfully get course",
        data: category,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  store: async (req, res) => {
    try {
      const { nama_category, deskripsi } = req.body;
      if (!nama_category || !deskripsi) {
        res.status(400).json({ message: "All field are required!!" });
      }
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
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama_category, deskripsi } = req.body;
      if (!nama_category && !deskripsi) {
        return res.status(400).json({ message: "All field are required" });
      }
      const oldCategory = await category_model.findById(id);
      if (!oldCategory) {
        return res.status(400).json({ message: "Category not found" });
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
      res.status(500).json({ message: error.message });
    }
  },
  destroy: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await category_model.findById(id);
      if (!category) {
        return res.status(400).json({ message: "User not found" });
      }
      await category_model.destroy(id);
      res.json({
        code: 200,
        message: "Succesfully delete user",
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};
module.exports = model_category;
