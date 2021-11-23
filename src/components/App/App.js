import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "../Layout/Home";
import Sidenav from "../Layout/Sidenav";
import StudentProfile from "../StudentProfile";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":studentName" element={<StudentProfile />} />
      </Routes>
    </div>
  );
}

export default App;
