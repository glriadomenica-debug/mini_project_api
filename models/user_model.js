const { pool } = require("../config/database");

const model_user = {
  //auth
  registration: async (data) => {
    const [rows] = await pool.query("INSERT INTO users SET ?", [data]);
    return rows;
  },
  login: async (data) => {
    const [rows] = await pool.query(
      "SELECT * FROM users WHERE email=? AND password=?",
      [data.email, data.password],
    );
    return rows;
  },
  findByEmail: async (email) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE email=?", [
      email,
    ]);
    return rows[0];
  },

  //crud users
  findAll: async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  },
  findById: async (id) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE id=?", [id]);
    return rows[0];
  },
  store: async (data) => {
    const [rows] = await pool.query("INSERT INTO users SET ?", [data]);
    return rows;
  },
  update: async (id, data) => {
    const [rows] = await pool.query("UPDATE users SET ? WHERE id=?", [
      data,
      id,
    ]);
    return rows;
  },
  destroy: async (id) => {
    const [rows] = await pool.query("DELETE FROM users WHERE id=?", [id]);
    return rows;
  },

  ///tambahin update
  updatePassword: async (password, id) => {
    const [rows] = await pool.query(
      "UPDATE users SET password = ? WHERE id = ?",
      [password, id],
    );
    return rows;
  },
};

module.exports = model_user;
