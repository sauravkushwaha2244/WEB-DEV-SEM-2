const { randomUUID } = require("crypto");

const assignments = [];

function createAssignment(data) {
  const assignment = {
    _id: randomUUID(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...data
  };

  assignments.unshift(assignment);
  return assignment;
}

function listAssignments() {
  return [...assignments].sort((left, right) => {
    return new Date(right.createdAt).getTime() - new Date(left.createdAt).getTime();
  });
}

function updateAssignmentStatus(id, status) {
  const assignment = assignments.find((item) => item._id === id);

  if (!assignment) {
    return null;
  }

  assignment.status = status;
  assignment.updatedAt = new Date();

  return assignment;
}

module.exports = {
  createAssignment,
  listAssignments,
  updateAssignmentStatus
};