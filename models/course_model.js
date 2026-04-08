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
  findAllWithRelation: async () => {
    const [rows] = await pool.query(
      "SELECT courses.*, users.nama AS nama_user, categories.nama_category AS nama_category FROM courses JOIN users ON courses.id_users=users.id JOIN categories ON courses.id_category = categories.id",
    );
    return rows;
  },
  findInstructorCourseCount: async () => {
    const [rows] = await pool.query( "SELECT users.id, users.nama AS instructor_name, COUNT(courses.id) AS total_course FROM users LEFT JOIN courses ON courses.id_users = users.id WHERE users.role = 'instructor GROUP BY users.id, users.nama");
    return rows;
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
