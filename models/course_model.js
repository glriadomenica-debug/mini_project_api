const { pool } = require("../config/database");
const { update } = require("../controller/course_controller");

const model_course = {
  findAll: async () => {
    const [rows] = await pool.query("SELECT * FROM courses");
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM courses WHERE id=?", [id]);
    return rows[0];
  },
  store: async (data) => {
    const [rows] = await pool.query("INSERT INTO courses SET ?", [data]);
    return rows;
  },
  update: async (id, data) => {
    const [rows] = await pool.query("UPDATE courses SET ? WHERE id=?", [
      data,
      id,
    ]);
    return rows;
  },
  destroy: async (id) => {
    const [rows] = await pool.query("DELETE FROM courses WHERE id=?", [id]);
    return rows;
  },
};

module.exports = model_course;
