import React from "react";
import { useParams } from "react-router-dom";
import StudentChart from "./Data/StudentChart";

function StudentProfile() {
  const { studentName } = useParams();

  return (
    <div className="content">
      <div className="header-wrapper">
        <h1 className="header-text">Student : {studentName}</h1>
      </div>
      <StudentChart studentToFilter={studentName} />
    </div>
  );
}

export default StudentProfile;
