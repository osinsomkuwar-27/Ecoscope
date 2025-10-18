import React from 'react';

function Stats() {
    return (
      <section id="stats" className="stats-section text-light py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-4 text-success">Impact Snapshot 🌍</h2>
          <div className="row g-4">
            <div className="col-6 col-md-3">
              <div className="stat-card p-3">
                <h3 className="display-6 fw-bold text-success">87</h3>
                <p className="text-muted">AQI Today</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card p-3">
                <h3 className="display-6 fw-bold text-success">62%</h3>
                <p className="text-muted">Humidity Level</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card p-3">
                <h3 className="display-6 fw-bold text-success">1,250</h3>
                <p className="text-muted">Trees Planted</p>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="stat-card p-3">
                <h3 className="display-6 fw-bold text-success">320 kg</h3>
                <p className="text-muted">CO₂ Offset</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Stats;