import React, { useState } from "react";

function Dashboard() {
  const [city, setCity] = useState("");

  const timelineData = [
    { title: "AQI", value: "82 (Moderate)" },
    { title: "Humidity", value: "63%" },
    { title: "Live Map", value: "🗺️ Map of your area" },
    { title: "Trees Planted", value: "1,245 🌳" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Fetching data for ${city}...`);
  };

  return (
    <div
      className="container py-5 text-light"
      style={{ background: "#0b0b0b", minHeight: "100vh" }}
    >
      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold text-success mb-2">Dashboard</h2>
        <p className="text-muted">
          Monitor city-wise AQI, humidity, live maps & community tree data.
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="d-flex justify-content-center mb-5"
      >
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Enter City or State"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Search
        </button>
      </form>

      {/* Timeline Section */}
      <div
        className="timeline-wrapper position-relative"
        style={{ maxWidth: "700px", margin: "auto" }}
      >
        {/* Central vertical line only inside timeline */}
        <div
          className="position-absolute top-0 start-50 translate-middle"
          style={{
            width: "4px",
            height: "100%",
            backgroundColor: "green",
            zIndex: 0,
          }}
        ></div>

        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={item.title}
              className="d-flex w-100 mb-5 position-relative"
            >
              {/* Card */}
              <div
                className={`bg-dark text-light p-4 rounded shadow`}
                style={{
                  width: "250px",
                  marginLeft: isLeft ? "0" : "auto",
                  marginRight: isLeft ? "auto" : "0",
                  zIndex: 1,
                  position: "relative",
                }}
              >
                <h5 className="text-success">{item.title}</h5>
                <h3>{item.value}</h3>
              </div>

              {/* Marker dot */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#0b0b0b",
                  border: "4px solid green",
                  borderRadius: "50%",
                  zIndex: 2,
                }}
              ></div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer className="text-center mt-5 text-muted small">
        <hr className="border-success" />© 2025 EcoScope | Building Sustainable
        Futures Together 🌿
      </footer>
    </div>
  );
}

export default Dashboard;
