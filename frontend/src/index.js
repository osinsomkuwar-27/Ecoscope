import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/livemapping" element={<LiveMappingPage />} />
      <Route path="/support" element={<SupportPage />} /> */}
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
