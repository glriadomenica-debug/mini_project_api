const { pool } = require("../config/database");
const { update } = require("../controller/category_controller");

const model_category = {
  findAll: async () => {
    const [rows] = await pool.query("SELECT * FROM categories");
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM categories WHERE id=?", [id]);
    return rows[0];
  },
  store: async (data) => {
    const [rows] = await pool.query("INSERT INTO categories SET ?", [data]);
    return rows;
  },
  update: async (id, data) => {
    const [rows] = await pool.query("UPDATE categories SET ? WHERE id=?", [
      data,
      id,
    ]);
    return rows;
  },
  destroy: async (id) => {
    const [rows] = await pool.query("DELETE FROM categories WHERE id=?", [id]);
    return rows;
  },
};

module.exports = model_category;
