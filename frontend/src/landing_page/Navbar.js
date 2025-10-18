import React from 'react';

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark eco-navbar fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-success" href="#">
            EcoScope
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#features">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#stats">
                  Stats
                </a>
              </li>
              <li className="nav-item">
                <a className="btn btn-success ms-lg-3" href="#join">
                  Join Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;