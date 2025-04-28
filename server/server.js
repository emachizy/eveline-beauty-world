import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://eveline-beauty-world.vercel.app",
    ],
    credentials: true,
  })
);

// Routes
app.get("/", (req, res) => res.send("API is working ✅"));
app.use("/api/user", userRouter);
app.use("/api/seller", sellerRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/address", addressRouter);
app.use("/api/order", orderRouter);

// Connect DB and Cloudinary once
let isConnected = false;

// Local Development (starts server normally)
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 4000;
  app.listen(port, async () => {
    console.log(`🚀 Server running locally on http://localhost:${port}`);
    if (!isConnected) {
      await connectDB();
      await connectCloudinary();
      isConnected = true;
    }
  });
}

// Serverless function export for Vercel
const handler = async (req, res) => {
  try {
    if (!isConnected) {
      await connectDB();
      await connectCloudinary();
      isConnected = true;
    }
    return app(req, res);
  } catch (error) {
    console.error("Error in Vercel handler:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
