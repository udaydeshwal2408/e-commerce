import mongoose, {Schema} from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  mrp: Number,
  brand: String,
  stock: Number,
  
  // THIS IS THE CORRECT WAY
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },

  images: [
    {
      url: String,
      public_id: String
    }
  ],
  
  ratings: { type: Number, default: 0 }
}, { timestamps: true });

export const Product = mongoose.model("Product", ProductSchema);
