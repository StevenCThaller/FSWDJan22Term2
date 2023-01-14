import { Schema, model } from "mongoose";

const couponSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      uppercase: true,
      unique: true,
    },
    discount: {
      type: Number,
      required: true,
      min: 0.01,
      max: 1,
    },
    expirationDate: {
      type: Date,
      default: () =>
        new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    },
  },
  { timestamps: true }
);

const Coupon = model("Coupon", couponSchema);

export default Coupon;
