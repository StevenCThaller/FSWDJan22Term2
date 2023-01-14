import { Router } from "express";
import { Coupon } from "../models";

const couponRouter = Router();

couponRouter.get("/", async (req, res, next) => {
  try {
    const { code, discount } = req.query;

    // Make sure this code doesn't already exist
    const existingCoupon = await Coupon.findOne({ code });

    if (existingCoupon) {
      return res.status(422).json({ error: "Coupon code exists." });
    }

    const coupon = await Coupon.create({ code, discount });

    res.json(coupon);
  } catch (error) {
    next(error);
  }
});

couponRouter.get("/verify", async (req, res, next) => {
  try {
    const { code } = req.query;

    if (!code) {
      return res.status(422).json({ error: "Code required." });
    }

    const coupon = await Coupon.findOne({ code });

    if (!coupon) {
      return res.status(404).json({ error: "Coupon does not exist" });
    }

    res.json(coupon.discount);
  } catch (error) {
    next(error);
  }
});

export default couponRouter;
