require("dotenv").config();

const { MONGO_URI} = require("./constants");

const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URI);
  console.log("Connection OK!!");

  const productsSchema = new mongoose.Schema({
    // id: Number,
    title: String,
  });

  const Product = mongoose.model("Product", productsSchema);

  // const computer1 = new Product({ title: "MacBook Air" });

  // await computer1.save();

  // const computer2 = new Product({ title: "MacBook Pro" });

  // await computer2.save();

  // await Product.deleteOne({ title: "MacBook Air" })

  // await Product.deleteOne({  _id: "6306c1fff18a2cd19c225251" })

  // await Product.deleteOne({  _id: "6306c201f18a2cd19c225253" })

  const productsFromDB = await Product.find();

  console.log("Products List from DB: \n", productsFromDB);
}
