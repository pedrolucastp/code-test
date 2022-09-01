const { getAllProducts, createNewProduct } = require("./products");
const { connect, disconnect } = require("../database");
const ProductModel = require("../models/products.js");

beforeAll(() => {
  return connect();
});

afterAll(() => {
  return disconnect();
});

describe("Product Service", () => {
  it("should be able to get a products list", async () => {
    const promise = getAllProducts();
    expect(promise).toBeInstanceOf(Promise);
    await expect(promise).resolves.toBeInstanceOf(Array);
  });
  it("should be able to save a new product", async () => {
    createNewProduct("Test", 0);
    const response = await ProductModel.find({ title: "Test" });
    await expect(response.length).not.toBe(0);
  });
});
