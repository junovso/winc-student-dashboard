import React from "react";
import Footer from "./Footer";
import Chart from "../Data/Chart";

const Home = () => {
  return (
    <div className="main">
      <p className="main-header-span">Winc Student Dashboard - Home</p>
      <Chart />
      <Footer />
    </div>
  );
};
export default Home;
