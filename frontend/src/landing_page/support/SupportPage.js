import React from "react";

import Hero from "./Hero";
import Payment from "./Payment";
import Donation from "./Donation";

import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import ProgressBar from "./ProgressBar";

function SupportPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProgressBar />
      <Donation/>
      <Payment />
      <Footer />
    </>
  );
}

export default SupportPage;
