import React, { useState } from "react";
import AISuggestions from "./AISuggestions";
import CommunityImpact from "./CommunityImpact";
import LogImpacts from "./LogImpact";
import WeatherStats from "./WeatherStats";

function Dashboard() {
  return (
    <>
      <AISuggestions />
      <CommunityImpact />
      <LiveMapping />
      <LogImpacts />
      <WeatherStats />
    </>
  );
}

export default Dashboard;
