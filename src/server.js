const express = require("express");
const { PORT } = require("./constants.js");
const { productRouter } = require("./router/index.js");

const server = express();

server.use(express.json());

server.use("/products", productRouter);

server.listen(PORT, () => {
  console.log(`Express Server running on port ${PORT}`);
});

