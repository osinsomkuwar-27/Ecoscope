document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:5000/api/data")
    .then(res => res.json())
    .then(data => {
      if (data.length > 0) {
        const latest = data[data.length - 1];
        document.getElementById("temp").textContent = latest.temperature + "°C";
        document.getElementById("aqi").textContent = latest.aqi;
        document.getElementById("wind").textContent = latest.wind;
        document.getElementById("humidity").textContent = latest.humidity + "%";
      }
    })
    .catch(err => console.error("Error fetching data:", err));

  const form = document.getElementById("feedbackForm");
  if (form) {
    form.addEventListener("submit", submitFeedback);
  }
});

function submitFeedback(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const feedback = document.getElementById("feedback").value.trim();

  if (!name || !feedback) {
    alert("Please fill out both fields.");
    return;
  }

  fetch("http://localhost:5000/submit-feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, feedback })
  })
    .then(res => res.json())
    .then(data => {
      alert(data.message);
      document.getElementById("feedbackForm").reset();
    })
    .catch(err => {
      alert("Error submitting feedback.");
      console.error(err);
    });
}
