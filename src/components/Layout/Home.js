import React from "react";
import Footer from "./Footer";
import Chart from "../Data/Chart";

const Home = () => {
  return (
    <div className="content">
      <div className="header-wrapper">
        <h1 className="header-text">Dashboard - Overview</h1>
      </div>
      <div className="chart-div">
        <Chart />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
