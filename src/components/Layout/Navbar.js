import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div class="navbar">
      <ul>
        <li>
          <Link to="/">
            <h1>
              <i class="bi bi-house-fill"></i>
            </h1>
          </Link>
        </li>
      </ul>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Kies een student
        </button>
        <ul
          class="dropdown-menu dropdown-menu-dark"
          aria-labelledby="dropdownMenuButton2"
        >
          <li>
            <Link to="/Aranka" className="dropdown-item bstrap">
              Aranka
            </Link>
          </li>
          <li>
            <Link to="/Evelyn" className="dropdown-item bstrap">
              Evelyn
            </Link>
          </li>
          <li>
            <Link to="/Floris" className="dropdown-item bstrap">
              Floris
            </Link>
          </li>
          <li>
            <Link to="/Hector" className="dropdown-item bstrap">
              Hector
            </Link>
          </li>
          <li>
            <Link to="/Martina" className="dropdown-item bstrap">
              Martina
            </Link>
          </li>
          <li>
            <Link to="/Maurits" className="dropdown-item bstrap">
              Maurits
            </Link>
          </li>
          <li>
            <Link to="/Rahima" className="dropdown-item bstrap">
              Rahima
            </Link>
          </li>
          <li>
            <Link to="/Sandra" className="dropdown-item bstrap">
              Sandra
            </Link>
          </li>
          <li>
            <Link to="/Wietske" className="dropdown-item bstrap">
              Wietske
            </Link>
          </li>
          <li>
            <Link to="/Storm" className="dropdown-item bstrap">
              Storm
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
