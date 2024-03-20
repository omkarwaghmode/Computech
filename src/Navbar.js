import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar ">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Laptop">
            Laptop's
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Accessories">
            Accessories
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Components">
            Hardware
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
