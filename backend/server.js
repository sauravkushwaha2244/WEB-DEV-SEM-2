const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const assignmentRoutes = require("./assignmentRoutes");

const app = express();
let serverStarted = false;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/assignments", assignmentRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running");
});

function startServer(message) {
  if (serverStarted) {
    return;
  }

  serverStarted = true;

  if (message) {
    console.log(message);
  }

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
  });
}

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected");
      startServer();
    })
    .catch((err) => {
      startServer(`MongoDB connection error: ${err.message}. Running in local demo mode.`);
    });
} else {
  startServer("MONGO_URI is not set. Running in local demo mode.");
}