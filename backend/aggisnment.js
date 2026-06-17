const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema(
  {
    studentName: String,
    rollNo: String,
    subject: String,
    fileName: String,
    aiScore: Number,
    plagiarismScore: Number,
    grammarScore: Number,
    status: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Assignment", assignmentSchema);