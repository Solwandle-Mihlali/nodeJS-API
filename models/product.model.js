const mongoose = require("mongoose");


const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "ENTER PRODUCT NAME"],
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: string,
    required: true,
  },
 
},{
    timestamps: true
}
);

const Product = mongoose.model("Product" , ProductSchema);

module.exports = Product;