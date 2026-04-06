require("dotenv").config();
// const { validationResult } = require("express-validator");
const userModel = require("../models/user_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");