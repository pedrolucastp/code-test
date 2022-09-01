const { Router } = require("express");
const productRouter = new Router();

const {
  getAllProducts,
  createNewProduct,
  deleteProduct,
  updateProduct,
} = require("../services/products.js");

// Create
productRouter.post("/", async (req, res) => {
  const { title, price } = req.body;
  const newProduct = await createNewProduct(title, price);
  res.json(newProduct);
});

// Retrieve
productRouter.get("/", async (req, res) => {
  const productsList = await getAllProducts();
  res.json(productsList);
});

// Update
productRouter.put("/:id", async (req, res) => {
  const query = { _id: req.params.id };
  const { field, newValue } = req.body;
  
  const updateProductById = await updateProduct(query, field, newValue);
 
  res.json(updateProductById);
});

// Delete
productRouter.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteProductById = await deleteProduct(id);
  res.json(deleteProductById);
});

module.exports = productRouter;
