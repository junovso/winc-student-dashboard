import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <Link to="/"> Home </Link>
      <hr />
      <Link to="/Aranka"> Aranka </Link>
      <Link to="/Evelyn"> Evelyn </Link>
      <Link to="/Floris"> Floris </Link>
      <Link to="/Hector"> Hector </Link>
      <Link to="/Martina"> Martina </Link>
      <Link to="/Maurits"> Maurits </Link>
      <Link to="/Rahima"> Rahima </Link>
      <Link to="/Sandra"> Sandra </Link>
      <Link to="/Wietske"> Wietske </Link>
      <Link to="/Storm"> Storm </Link>
    </div>
  );
};

export default Sidenav;
