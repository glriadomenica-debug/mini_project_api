//Entry point app - Menghubungkan semua router
//Inisialisasi terlebih dahulu
const express = require("express");
//DB connection
const userRouter = require("./router/users");
const courseRouter = require("./router/courses");
const categoryRouter = require("./router/categories");
const transactionRouter = require("./router/transactions");
const authRouter = require("./router/auth");
const AppError = require("./utils/appError");
const cors = require("cors");

const app = express();
const { testConnection } = require("./config/database");
const errorHandler = require("./middleware/errorHandler");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/categories", categoryRouter);
app.use("/transaction", transactionRouter);

//test endpoiint
app.get("/test", (req, res) => {
  res.json({ message: "CORS OK" });
});

app.use((req, _res, next) => {
  next(new AppError(`${req.method} ${req.originalUrl} not found`, 404));
});

app.use(errorHandler);

//DB
const start = async () => {
  await testConnection();

  app.listen(3000, () => {
    console.log("server berjalan di port 3000!");
  });
};

start();
