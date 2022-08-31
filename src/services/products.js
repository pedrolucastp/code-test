const ProductModel = require("../models/products.js");

const createNewProduct = async (title, price) => {
  try {
    const newProduct = new ProductModel({
      title: title,
      price: price,
    });
    await newProduct.save();
    return;
  } catch (e) {
    console.error(e);
  }
};

const getAllProducts = async () => {
  try {
    const productList = await ProductModel.find();
    return productList.map((product) => ({
      id: product._id,
      title: product.title,
      price: product.price,
    }));
  } catch (e) {
    console.error(e);
  }
};

const updateProduct = async (query, field, newValue) => {
  try {
    await ProductModel.findOneAndUpdate(query, { [field]: newValue });
    return;
  } catch (e) {
    console.error(e);
  }
};

const deleteProduct = async (id) => {
  try {
    await ProductModel.deleteOne({ _id: id });
    return;
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  createNewProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
