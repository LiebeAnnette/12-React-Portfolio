import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#794E57" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          My Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["/", "/portfolio", "/contact", "/resume"].map((path, index) => {
              const labels = ["About Me", "Portfolio", "Contact", "Resume"];
              return (
                <li className="nav-item" key={path}>
                  <Link
                    className="nav-link text-light"
                    style={{ margin: "0 0.5rem" }}
                    to={path}
                  >
                    {labels[index]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
