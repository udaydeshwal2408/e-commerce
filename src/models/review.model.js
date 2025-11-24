import mongoose, {Schema} from "mongoose";

const ReviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  rating: Number,
  comment: String,
  sentiment: {
    positive: Number,
    neutral: Number,
    negative: Number
  }
}, { timestamps: true });


export const Review=moongoose.model("Review",ReviewSchema);