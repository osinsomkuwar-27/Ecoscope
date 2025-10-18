import React from 'react';

function Footer() {
    return (
      <footer className="footer-section text-center text-light py-5">
        <div className="container">
          <h3 className="text-success mb-3">EcoScope ♻️</h3>
          <p className="text-muted mb-4">
            Built with 💚 for a sustainable tomorrow. Join us to monitor,
            analyze, and act for our planet.
          </p>

          <div className="d-flex justify-content-center gap-3 mb-3 flex-wrap">
            <a href="#" className="btn btn-success">
              Sign Up
            </a>
            <a href="#" className="btn btn-outline-success">
              Register NGO
            </a>
          </div>

          <hr className="border-success opacity-25" />

          <p className="small text-muted mb-0">
            © 2025 EcoScope | Designed by Team EcoScope 🌿
          </p>
        </div>
      </footer>
    );
}

export default Footer;