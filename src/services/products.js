const ProductModel = require("../models/products.js");

const getAllProducts = async () => {
  const productList = await ProductModel.find();
  return productList.map((product) => ({
    id: product._id,
    title: product.title,
    price: product.price,
    salePrice:(product.price * 1.1).toFixed(2),
    productsQuantity: productList.length
  }));
};

const createNewProduct = async (title, price) => {
  const newProduct = new ProductModel({
    title: title,
    price: price,
  });
  await newProduct.save();
  return;
};

const deleteProduct = async (value) => {
  await ProductModel.deleteOne({ _id: value });
  return;
};

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteProduct,
};
