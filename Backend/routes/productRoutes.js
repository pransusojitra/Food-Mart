const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");               // ✅ ADD THIS
const Product = require("../model/Product");

const router = express.Router();

/* MULTER SETUP */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
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
      image: req.file.path.replace(/\\/g, "/"),
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

/* DELETE PRODUCT */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // 🔥 DELETE IMAGE FILE
    if (product.image) {
      fs.unlink(product.image, (err) => {
        if (err) console.log("Image delete error:", err);
      });
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
