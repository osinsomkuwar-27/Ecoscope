// Simulate fetching real-time data (replace with API later)
document.addEventListener("DOMContentLoaded", () => {
  const weatherStats = {
    temperature: "28°C",
    aqi: "85 (Moderate)",
    wind: "10 km/h",
    humidity: "60%"
  };

  document.getElementById("temp").textContent = weatherStats.temperature;
  document.getElementById("aqi").textContent = weatherStats.aqi;
  document.getElementById("wind").textContent = weatherStats.wind;
  document.getElementById("humidity").textContent = weatherStats.humidity;
});

// Form submission
function submitFeedback(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (name && feedback) {
    alert(`Thanks for your input, ${name}!\n\n"${feedback}"`);
    document.getElementById("feedbackForm").reset();
  } else {
    alert("Please fill out both name and feedback fields.");
  }
}
// Load mock weather data when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const data = {
    temperature: "28°C",
    aqi: "85 (Moderate)",
    wind: "10 km/h",
    humidity: "60%"
  };

  document.getElementById("temp").textContent = data.temperature;
  document.getElementById("aqi").textContent = data.aqi;
  document.getElementById("wind").textContent = data.wind;
  document.getElementById("humidity").textContent = data.humidity;
});

// Handle form submission
function submitFeedback(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (name && feedback) {
    alert(`Thanks, ${name}! Your feedback:\n"${feedback}"`);
    document.getElementById("feedbackForm").reset();
  } else {
    alert("Please fill out both fields.");
  }
}

