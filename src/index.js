const express = require("express");
const products = require("../router/products-router");

const app = express();

app.use(express.json());

app.use("/products", products);

app.listen(3000, () => {
  console.log("Express server running");
});
