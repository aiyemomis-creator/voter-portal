// js/candidates.js

function getCandidates() {
  return JSON.parse(localStorage.getItem("candidates")) || [];
}

function displayCandidates(candidates) {
  const container = document.getElementById("candidates-container");
  container.innerHTML = "";

  candidates.forEach(c => {
    const card = document.createElement("div");
    card.classList.add("candidate-card");
    card.innerHTML = `
      <div class="candidate-avatar">👤</div>
      <h3>${c.name}</h3>
      <span class="party-badge">${c.party}</span>
      <p><strong>Running for:</strong> ${c.position}</p>
      <p>${c.bio}</p>
      <button onclick="toggleManifesto(${c.id})">View Manifesto</button>
      <div id="manifesto-${c.id}" style="display:none;">
        <p>${c.manifesto}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function toggleManifesto(id) {
  const el = document.getElementById(`manifesto-${id}`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function filterByParty() {
  const selected = document.getElementById("party-filter").value;
  const all = getCandidates();
  const filtered = selected === "all" ? all : all.filter(c => c.party === selected);
  displayCandidates(filtered);
}

// Populate party filter options dynamically
function populateFilter() {
  const all = getCandidates();
  const parties = [...new Set(all.map(c => c.party))];
  const select = document.getElementById("party-filter");
  parties.forEach(p => {
    const option = document.createElement("option");
    option.value = p;
    option.textContent = p;
    select.appendChild(option);
  });
}

populateFilter();
displayCandidates(getCandidates());
document.getElementById("party-filter").addEventListener("change", filterByParty);
