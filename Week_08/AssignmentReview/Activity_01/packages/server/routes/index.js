import { Router } from 'express'
import userRouter from "./users";

const router = Router();

// Every route in this file starts with: '/api'
router.get("/", (req, res, next) => {
  res.status(200).send("api endpoint");
});

router.use("/users", userRouter);

export default router
