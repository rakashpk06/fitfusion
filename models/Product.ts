import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    badge: { type: String, default: null },
    description: { type: String, required: true },
    sizes: [{ type: String }],
    rating: { type: Number, default: 0 },
    reviews: { type: Number, default: 0 },
    stock: { type: Number, default: 100 },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;