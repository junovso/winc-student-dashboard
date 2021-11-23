import React from "react";
import { useParams } from "react-router-dom";
import StudentChart from "./Data/StudentChart";

function StudentProfile() {
  const { studentName } = useParams();

  return (
    <div className="main">
      <h3>Student : {studentName}</h3>
      <StudentChart studentToFilter={studentName} />
    </div>
  );
}

export default StudentProfile;
