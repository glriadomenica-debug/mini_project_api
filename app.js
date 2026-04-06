//Entry point app - Menghubungkan semua router
//Inisialisasi terlebih dahulu
const express = require("express");
//DB connection
const { testConnection } = require("./config/database");
const userRouter = require("./router/users");
const courseRouter = require("./router/courses");
const categoryRouter = require("./router/categories");

const app = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/categories", categoryRouter);

//DB
const start = async () => {
  await testConnection();

  app.listen(3000, () => {
    console.log("server berjalan di port 3000!");
  });
};

start();
