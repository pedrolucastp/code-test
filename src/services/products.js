const ProductModel = require("../models/products.js");

const getAllProducts = async () => {
  try {
    const productList = await ProductModel.find();
    return productList.map((product, index) => ({
      id: product._id,
      title: product.title,
      price: product.price,
      salePrice: (product.price * 1.1).toFixed(2),
      productIndex: index,
    }));
  } catch (e) {
    console.error(e);
  }
};

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

const deleteProduct = async (value) => {
  try {
    await ProductModel.deleteOne({ _id: value });
    return;
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

module.exports = {
  getAllProducts,
  createNewProduct,
  deleteProduct,
  updateProduct,
};
