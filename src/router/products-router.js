const express = require("express");
const router = express.Router();

// const productsList = [
//   {
//     id: 0,
//     title: "computer",
//   },
//   {
//     id: 1,
//     title: "phone",
//   },
//   {
//     id: 2,
//     title: "monitor",
//   },
// ];

// Create new item in list
router.post("/products", (req, res) => {
  const newProduct = {
    id: productsList.length,
    title: req.body.title,
  };
  console.log(newProduct);

  productsList.push(newProduct);

  res.send("POST");
});

// Retrieve
router.get("/", (req, res) => {
  res.send("GET");
});

// Update
router.put("/", (req, res) => {
  res.send("PUT");
});

// Delete
router.delete("/", (req, res) => {
  res.send("DELETE");
});

module.exports = router;
