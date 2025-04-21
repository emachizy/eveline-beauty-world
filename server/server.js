import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000;

// Connect to DB
(async () => {
  await connectDB();
})();

// Middleware
app.use(express.json()); // ✅ Parses JSON bodies
app.use(cookieParser()); // ✅ Parses cookies

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

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
