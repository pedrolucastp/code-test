const { Router } = require("express");
const {
  getAllProducts,
  createNewProduct,
  deleteProduct,
  updateProduct
} = require("../services/products.js");

const productRouter = new Router();

// Create
productRouter.post("/", async (req, res) => {
  const { title, price } = req.body;
  const newProduct = await createNewProduct(title, price);
  console.log(newProduct);
  res.json(newProduct);
});

// Retrieve
productRouter.get("/", async (req, res) => {
  const productsList = await getAllProducts();
  console.log(productsList);
  res.json(productsList);
  // res.send("GET");
});

// Update
productRouter.put("/", async (req, res) => {
  const { query, field, newValue } = req.body;
  const updateProductByQuery = await updateProduct(query, field, newValue);
  res.json(updateProductByQuery);
});

// Delete
productRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteProductById = await deleteProduct(id);
  console.log(`Product Deleted: ID ${id}`);
  res.json(deleteProductById);
});

module.exports = productRouter;
