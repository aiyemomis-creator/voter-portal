// js/polling.js

// Load stations from localStorage
function getStations() {
  return JSON.parse(localStorage.getItem("stations")) || [];
}

// Display station cards
function displayStations(stations) {
  const container = document.getElementById("results-container");
  container.innerHTML = "";

  if (stations.length === 0) {
    container.innerHTML = "<p>No polling stations found for that LGA.</p>";
    return;
  }

  stations.forEach(station => {
    const card = document.createElement("div");
    card.classList.add("station-card");
    card.innerHTML = `
      <h3>${station.name}</h3>
      <p><strong>LGA:</strong> ${station.lga}</p>
      <p><strong>Address:</strong> ${station.address}</p>
      <p><strong>Hours:</strong> ${station.openingTime} – ${station.closingTime}</p>
      <p><strong>Contact:</strong> ${station.contact}</p>
    `;
    container.appendChild(card);
  });
}

// Search/filter logic
function searchStations() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const all = getStations();
  const filtered = all.filter(s => s.lga.toLowerCase().includes(query));
  displayStations(filtered);
}

// Show all on page load
displayStations(getStations());

// Attach search button
document.getElementById("search-btn").addEventListener("click", searchStations);

// Also search on Enter key
document.getElementById("search-input").addEventListener("keypress", function(e) {
  if (e.key === "Enter") searchStations();
});
