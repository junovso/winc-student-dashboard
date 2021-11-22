import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../Layout/Main";
import Sidenav from "../Layout/Sidenav";
import Sheets from "../Layout/Sheets";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sheets" element={<Sheets />} />
      </Routes>
    </div>
  );
}

export default App;
