const { pool } = require("../config/database");

const model_transactions = {
  findAll: async () => {
    const [row] = await pool.query("SELECT * FROM transactions");
    return row;
  },
  findById: async (id) => {
    const [row] = await pool.query("SELECT * from transactions WHERE id=?", [
      id,
    ]);
    return row;
  },
  store: async (data) => {
    const [row] = await pool.query("INSERT INTO transactions SET ?", [data]);
    return row;
  },
  findAllWithRelation: async () => {
    const [rows] = await pool.query(
      "SELECT transactions.*, users.nama AS nama_user, courses.nama_course AS nama_course FROM transactions JOIN courses ON transactions.id_course=courses.id JOIN users ON courses.id_users = users.id",
    );
    return rows;
  },
  update: async (id, data) => {
    const [row] = await pool.query("UPDATE transactions SET ? WHERE id=?", [
      data,
      id,
    ]);
    return row;
  },
  destroy: async (id) => {
    const [row] = await pool.query("DELETE FROM transactions WHERE id=?", [id]);
    return row;
  },
};

module.exports = model_transactions;
