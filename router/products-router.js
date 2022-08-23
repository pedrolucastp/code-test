const express = require("express");
const router = express.Router();

const productsList = [
  {
    id: 0,
    title: "computer",
  },
  {
    id: 1,
    title: "phone",
  },
  {
    id: 2,
    title: "monitor",
  },
];

// Create new item in list
router.post("/", (req, res) => {
  const currentList = productsList;

  //   const product = {id,title};

  const newProduct = req.body;
  console.log(newProduct);

  //   currentList.push(newProduct);

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
