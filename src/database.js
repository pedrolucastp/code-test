const mongoose = require("mongoose");
const { MONGO_URI } = require("./constants.js");

const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connection OK!!");
  } catch (e) {
    console.error(e);
    setTimeout(connect, 3000);
  }
};

connect();



// const Product = mongoose.model("Product", productsSchema);

// const computer1 = new Product({ title: "MacBook Air Pro" })

// await computer1.save();

// const computer2 = new Product({ title: "MacBook Pro" });

// await computer2.save();

// await Product.deleteOne({ title: "MacBook Air" })

// await Product.deleteOne({  _id: "6306c1fff18a2cd19c225251" })

// await Product.deleteOne({  _id: "6306c201f18a2cd19c225253" })

// const productsFromDB = await Product.find();

// console.log("Products List from DB: \n", productsFromDB);
