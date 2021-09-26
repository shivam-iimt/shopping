const express = require("express");
const { getProducts, getSingleProduct } = require('../controllers/productControl')
const Product = require("../models/ProductModel");
const asyncHandler = require("express-async-handler");
const router = express.Router();
router.get(
  "/products", getProducts

);
router.get(
  "/products/:id", getSingleProduct

);
module.exports = router;
