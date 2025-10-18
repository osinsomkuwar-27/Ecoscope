import React from 'react';

function Hero() {
    return (
      <section className="hero-section text-center text-light d-flex align-items-center justify-content-center flex-column">
        <div className="container">
          <h1 className="display-4 fw-bold text-success mb-3">
            Track Air. Plant Trees. Build Impact.
          </h1>
          <p className="lead mb-4">
            EcoScope helps you monitor environmental data, offset carbon
            emissions, and join a global community working for a sustainable
            planet.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button className="btn btn-success btn-lg px-4">
              Explore Dashboard
            </button>
            <button className="btn btn-outline-success btn-lg px-4">
              Join as NGO
            </button>
          </div>
        </div>

        {/* Decorative Wave */}
        <svg
          className="hero-wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0b0b0b"
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,138.7C384,171,480,245,576,261.3C672,277,768,235,864,197.3C960,160,1056,128,1152,144C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </section>
    );
}

export default Hero;