import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    colors: {
        type: Array,
        required: true,
        default: undefined
    },
    sizes: Array,
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', ProductSchema);

export default Product;