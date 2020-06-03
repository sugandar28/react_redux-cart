const express = require("express");
const bodyPraser = require("body-parser");
const mongoose = require("mongoose");
const shortid = require("shortid");

const app = express();
app.use(bodyPraser.json());
mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const product = mongoose.model(
  "product",
  new mongoose.Schema({
    _id: { type: String, default: shortid.generate },
    title: String,
    descrption: String,
    image: String,
    price: Number,
    availableSizes: [String],
  })
);

app.get("/api/products", async (req, res) => {
  const products = await product.find({});
  res.send(products);
});

app.post("/api/products", async (req, res) => {
  const newProduct = new product(req.body);
  const savedProducts = await newProduct.save();
  res.send(savedProducts);
});

app.delete("/api/products/:id", async (req, res) => {
  const deletedProduct = await product.findByIdAndDelete(req.params.id);
  res.send(deletedProduct);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("server at http://localhost:5000"));
