import express from "express";
import jwt from "jsonwebtoken";
import Task from "../models/task.js";

const router = express.Router();

// Middleware
function auth(req, res, next) {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(403).json({ message: "No token" });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.userId = decoded.id;
    next();
  });
}

// Create Task
router.post("/", auth, async (req, res) => {
  const task = new Task({ ...req.body, userId: req.userId });
  await task.save();
  res.json(task);
});

// Get Tasks (with search & filter)
router.get("/", auth, async (req, res) => {
  const { search, status, page = 1, limit = 5 } = req.query;
  const query = { userId: req.userId };

  if (search) query.title = { $regex: search, $options: "i" };
  if (status) query.status = status;

  const tasks = await Task.find(query)
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(tasks);
});

// Update Task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );
  res.json(task);
});

// Delete Task
router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Task deleted" });
});

export default router;
