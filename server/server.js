import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = ["http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
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

// Flag to ensure we connect only once
let isConnected = false;

// For local development
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 4000;
  app.listen(port, async () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
    await connectDB();
    await connectCloudinary();
  });
}

// For Vercel Serverless
export default async function handler(req, res) {
  if (!isConnected) {
    await connectDB();
    await connectCloudinary();
    isConnected = true;
  }
  return app(req, res);
}
