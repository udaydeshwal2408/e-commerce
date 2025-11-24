import mongoose,{Schema} from "moongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderItems: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    quantity: Number,
    price: Number
  }],
  shippingAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String
  },
  paymentInfo: {
    method: String,
    status: String,
    transactionId: String
  },
  amount: Number,
  orderStatus: { type: String, default: "Processing" },
  deliveredAt: Date
}, { timestamps: true });


export const Order=mongoose.model("Order",OrderSchema)