import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Import routes
import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/tasks.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  credentials: true,
}));
app.use(express.json());

// Test route
app.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  // Start server after DB connection
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((err) => {
  console.error("MongoDB connection failed:", err.message);
});





