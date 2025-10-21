import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
