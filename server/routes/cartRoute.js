import express from "express"; // ✅ Use express, not mongoose
import authUser from "../middlewares/authUser.js";
import { updateCart } from "../controllers/cartController.js";

const cartRouter = express.Router(); // ✅ Correctly initialize Router

cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
