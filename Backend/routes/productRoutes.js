const express = require("express");
const multer = require("multer");
const path = require("path");
const Product = require('../model/Product');

const router = express.Router();

/* MULTER SETUP */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  }
});

const upload = multer({ storage });

/* POST PRODUCT */
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, unit, rating, price } = req.body;

    const product = new Product({
      title,
      unit,
      rating,
      price,
      image: req.file.path.replace(/\\/g, "/") // store image path
    });

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* GET PRODUCTS */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
