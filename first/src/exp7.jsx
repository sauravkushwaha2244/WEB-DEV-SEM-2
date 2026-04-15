import React from 'react';
import './StudentComponent.css';


const Student = ({ name, course, marks }) => {

  const getGrade = (marks) => {
    if (marks >= 90) return 'A+';
    if (marks >= 80) return 'A';
    if (marks >= 70) return 'B+';
    if (marks >= 60) return 'B';
    return 'C';
  };

  const grade = getGrade(marks);

  return (
    <div className="student-card">
      <div className="card-header">
        <h2 className="student-name">{name}</h2>
        <div className={`grade-badge grade-${grade.replace('+', 'plus')}`}>
          {grade}
        </div>
      </div>
      
      <div className="card-body">
        <div className="info-item">
          <span className="label">Course</span>
          <span className="value">{course}</span>
        </div>
        
        <div className="info-item">
          <span className="label">Marks</span>
          <div className="marks-container">
            <span className="marks-value">{marks}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill" 
                style={{ width: `${marks}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <div className="performance-indicator">
          {marks >= 90 && <span className="indicator excellent">Excellent</span>}
          {marks >= 80 && marks < 90 && <span className="indicator good">Good</span>}
          {marks >= 70 && marks < 80 && <span className="indicator satisfactory">Satisfactory</span>}
          {marks < 70 && <span className="indicator needsimprovement">Needs Improvement</span>}
        </div>
      </div>
    </div>
  );
};


const StudentDashboard = () => {
  const students = [
    {
      name: 'Rahul Sharma',
      course: 'Computer Science',
      marks: 85
    },
    {
      name: 'Anita Verma',
      course: 'Information Technology',
      marks: 92
    },
    {
      name: 'Rohan Gupta',
      course: 'Electronics',
      marks: 78
    }
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Student Information</h1>
        <p className="subtitle">Academic Performance Overview</p>
      </header>

      <div className="students-container">
        {students.map((student, index) => (
          <Student
            key={index}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
