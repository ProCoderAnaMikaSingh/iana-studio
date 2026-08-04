const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");

app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend is Running 🚀");
});

module.exports = app;