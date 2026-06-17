const express = require("express");
const crypto = require("crypto");
const fs = require("fs");
const mongoose = require("mongoose");
const Assignment = require("./aggisnment");
const upload = require("./upload");
const store = require("./store");

const router = express.Router();

function hashFile(filePath) {
  const fileBuffer = fs.readFileSync(filePath);

  return crypto.createHash("sha256").update(fileBuffer).digest("hex");
}

function scoreFromHash(hash, start, min, max) {
  const segment = hash.slice(start, start + 8);
  const value = Number.parseInt(segment, 16);

  return min + (value % (max - min + 1));
}

function getStatus(ai, plagiarism) {
  const score = Math.max(ai, plagiarism);

  if (score <= 30) return "Safe";
  if (score <= 60) return "Needs Review";
  return "High Risk";
}

function useDatabase() {
  return mongoose.connection.readyState === 1;
}

router.post("/upload", upload.single("assignment"), async (req, res) => {
  try {
    const fileHash = req.file ? hashFile(req.file.path) : crypto.createHash("sha256").update(`${req.body.studentName}|${req.body.rollNo}|${req.body.subject}`).digest("hex");
    const aiScore = scoreFromHash(fileHash, 0, 10, 90);
    const plagiarismScore = scoreFromHash(fileHash, 8, 5, 80);
    const grammarScore = scoreFromHash(fileHash, 16, 60, 100);

    const payload = {
      studentName: req.body.studentName,
      rollNo: req.body.rollNo,
      subject: req.body.subject,
      fileName: req.file ? req.file.filename : "",
      aiScore,
      plagiarismScore,
      grammarScore,
      status: getStatus(aiScore, plagiarismScore)
    };

    const assignment = useDatabase()
      ? await Assignment.create(payload)
      : store.createAssignment(payload);

    res.json({
      message: "Assignment uploaded successfully",
      assignment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  const assignments = useDatabase()
    ? await Assignment.find().sort({ createdAt: -1 })
    : store.listAssignments();

  res.json(assignments);
});

router.patch("/:id/status", async (req, res) => {
  const assignment = useDatabase()
    ? await Assignment.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      )
    : store.updateAssignmentStatus(req.params.id, req.body.status);

  res.json(assignment);
});

module.exports = router;