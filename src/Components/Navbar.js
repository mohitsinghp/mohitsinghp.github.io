import React from "react";

function Navbar() {
  return (
    <div className="navbar d-flex flex-column">
      <div className="d-flex flex-column w-100">
        <span className="nav-item">Logo</span>
      </div>
      <div className="d-flex flex-column w-100">
        <span className="nav-item">Home</span>
        <span className="nav-item">Projects</span>
        <span className="nav-item">Contact</span>
      </div>
      <div className="d-flex flex-column w-100">
        <span className="nav-item">Blog</span>
      </div>
    </div>
  );
}

export default Navbar;
