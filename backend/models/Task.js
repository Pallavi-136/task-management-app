import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, enum: ["pending", "done"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

export default mongoose.model("Task", taskSchema);
