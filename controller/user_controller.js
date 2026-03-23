const user_model = require("../models/user_model");

const user_controller = {
  getAll: async (req, res) => {
    try {
      const users = await user_model.findAll();
      res.json({
        code: 200,
        message: "Succesfully get users",
        data: users,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  getByID: async (req, res) => {
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
  store: async (req, res) => {
    try {
      const { nama, email, role } = req.body;

      if (!nama || !email || !role) {
        return res.status(400).json({ message: "All field are required!" });
      }
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
          id : user.insertId,
          nama: data.nama,
          email: data.email,
          role: data.role,
        },
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { nama, email, role } = req.body;
      if (!nama && !email && !role) {
        return res.status(400).json({ message: "All fields are required" });
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
      res.status(500).json({ message: error.message });
    }
  },
  destroy : async (req,res) => {
    try {
      const { id } = req.params;
      const user = await user_model.findById(id);

      if (!user) {
        return res.status(400).json({ message : "User not foun"});
      }
      await user_model.destroy(id);
      res.json({
        code:200,
        message: "Succesfully delete user",
      });
    } catch (error){
      res.status(500).json({ message : error.message});
    }
  },
};
module.exports = user_controller;
