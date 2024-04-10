const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = 2808;

mongoose
  .connect(
    "mongodb+srv://devOne:Scalds*Fred1@myfullstackdb.fb78zws.mongodb.net/?retryWrites=true&w=majority&appName=myFullStackDB"
  )
  .then(() => {
    console.log("connected to DB");
    app.listen(port, () => {
      console.log(`server cruising nicely on ${port} `);
    });
  })
  .catch((err) => {
    console.log(err);
  });

//this api creates a product
app.post("/api/products", async (req, res) => {
  try {
    const prod = await Product.create(req.body);
    res.status(200).json(prod);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//gets a list of all products
app.get("/api/products", async (req, res) => {
  try {
    const prods = await Products.find({});
    res.status(200).json(prods);
  } catch (err) {
    res.status(500).json({
      message: "NO PRODUCT",
    });
  }
});

//gets a specific product
app.get("/api/products:id?", async (req, res) => {
  try {
    const prods = await Products.find({});
    res.status(200).json(prods);
  } catch (err) {
    res.status(500).json({
     
      message: 
      "NO PRODUCT",
    });
  }
});
