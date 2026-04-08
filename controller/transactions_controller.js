const model_transactions = require("../models/transaction_model");
const { validationResult } = require("express-validator");
const AppError = require("../utils/appError");
const cache = require("../config/cache");
const { json } = require("express");
const { getAllWithRelation } = require("./course_controller");

const transaction_controller = {
  getAll: async (req, res, next) => {
    try {
      const CACHE_KEY = "all transactions";
      const cachedData = await cache.get(CACHE_KEY);

      if (cachedData) {
        return res.json({
          code: 200,
          source: "cache",
          message: "Successfully get transactions",
          data: JSON.parse(cachedData),
        });
      }

      const transactions = await model_transactions.findAll();

      cache.set(CACHE_KEY, JSON.stringify(transactions), { EX: 60 });

      res.json({
        code: 200,
        source: "database",
        message: "Successfully get transaction",
        data: transactions,
      });
    } catch (error) {
      next(error);
    }
  },

  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const transaction = await model_transactions.findById(id);

      res.json({
        code: 200,
        message: "Successfully get transaction",
        data: transaction,
      });
    } catch (error) {
      next(error);
    }
  },

  getAlltransactionDetails: async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }
      const transaction = await model_transactions.findAllWithRelation();
      res.json({
        code: 200,
        message: "Successfully get all transaction details",
        data: transaction,
      });
    } catch (error) {
      next(error);
    }
  },

  store: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id_user, id_course, total_price, status } = req.body;

      const data = {
        id_user: id_user,
        id_course: id_course,
        total_price: total_price,
        status: status,
      };

      const transaction = await model_transactions.store(data);

      res.json({
        code: 200,
        message: "Successfully store transaction",
        data: {
          id: transaction.insertId,
          id_user: data.id_user,
          id_course: data.id_course,
          total_price: data.total_price,
          status: data.status,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  update: async (res, req, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const { id_user, id_course, total_price, status } = req.body;

      if (!id_user && !id_course && !total_price && !status) {
        throw new AppError("All field are required", 400);
      }

      const oldTransaction = await model_transactions.findById(id);

      if (!oldTransaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }

      const data = {
        id_user: id_user ? id_user : oldTransaction.id_user,
        id_course: id_course ? id_course : oldTransaction.id_course,
        total_price: total_price ? total_price : oldTransaction.total_price,
        status: status ? status : oldTransaction.status,
      };

      await model_transactions.update(id, data);

      res.json({
        code: 200,
        message: "Successfully update transaction",
        data: {
          id: id,
          id_user: id_user,
          id_course: id_course,
          total_price: total_price,
          status: status,
        },
      });
    } catch (error) {
      next(error);
    }
  },

  destroy: async (req, res, next) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { id } = req.params;
      const transaction = await model_transactions.findById(id);

      if (!transaction) {
        throw new AppError("Transaction not found", 404);
      }

      await model_transactions.destroy(id);
      res.json({
        code: 200,
        message: "Successfully delete transaction",
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = transaction_controller;
