import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <Link to="/"> Home </Link>
      <hr />
      <a href="#clients">Aranka</a>
      <a href="#services">Evelyn</a>
      <a href="#contact">Floris</a>
      <a href="#contact">Hector</a>
      <a href="#contact">Martina</a>
      <a href="#contact">Maurits</a>
      <a href="#contact">Rahima</a>
      <a href="#contact">Sandra</a>
      <a href="#contact">Wietske</a>
      <a href="#contact">Storm</a>
    </div>
  );
};

export default Sidenav;
