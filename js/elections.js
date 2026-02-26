// js/elections.js

function getElections() {
  return JSON.parse(localStorage.getItem("elections")) || [];
}

function displayElections() {
  const container = document.getElementById("elections-container");
  const elections = getElections();

  elections.forEach(election => {
    const card = document.createElement("div");
    card.classList.add("election-card");
    card.innerHTML = `
      <h3>${election.title}</h3>
      <p><strong>Election Date:</strong> ${election.date}</p>
      <p><strong>Registration Deadline:</strong> ${election.registrationDeadline}</p>
      <p>${election.description}</p>
    `;
    container.appendChild(card);
  });
}

displayElections();
