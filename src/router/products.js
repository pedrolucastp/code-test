const { Router } = require("express");
const {
  getAllProducts,
  createNewProduct,
  deleteProduct,
} = require("../services/products.js");

const productRouter = new Router();

// Retrieve
productRouter.get("/", async (req, res) => {
  const productsList = await getAllProducts();
  console.log(productsList);
  res.json(productsList);
  // res.send("GET");
});

// Create
productRouter.post("/", async (req, res) => {
  const { title, price } = req.body;
  const newProduct = await createNewProduct(title, price);
  console.log(newProduct);
  res.json(newProduct);
});

// Update
// productRouter.put("/", (req, res) => {
//   res.send("PUT");
// });

// Delete
productRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteProductById = await deleteProduct(id);
  console.log(`Product Deleted: ID ${id}`);
  res.json(deleteProductById);
});

module.exports = productRouter;
