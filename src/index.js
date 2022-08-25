const express = require("express");

const { PORT } = require("constants");

const products = require("./router/products-router");

require("./database");

const app = express();

app.use(express.json());

app.use("/products", products);

app.listen(PORT, () => {
  console.log("Express server running");
});
