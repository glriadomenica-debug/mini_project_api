require("dotenv").config();

const errorHandler = (err, _req, res, _next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  if (process.env.MODE === "Developmeny") {
    return res.status(statusCode).json({
      code: statusCode,
      message: err.message,
      stack: err.stack,
    });
  }

  return res.status(statusCode).json({
    code: statusCode,
    message: statusCode == 500 ? "Internal Server Error" : err.message,
  });
};

module.exports = errorHandler;
