function globalSearch(query) {
  query = query.toLowerCase();

  const stations = JSON.parse(localStorage.getItem("stations")) || [];
  const candidates = JSON.parse(localStorage.getItem("candidates")) || [];
  const faqs = JSON.parse(localStorage.getItem("faqs")) || [];

  const results = [];

  stations.forEach(s => {
    if (s.name.toLowerCase().includes(query) || s.lga.toLowerCase().includes(query)) {
      results.push({ type: "Polling Station", title: s.name, link: "polling.html" });
    }
  });

  candidates.forEach(c => {
    if (c.name.toLowerCase().includes(query) || c.party.toLowerCase().includes(query)) {
      results.push({ type: "Candidate", title: c.name, link: "candidates.html" });
    }
  });

  faqs.forEach(f => {
    if (f.question.toLowerCase().includes(query)) {
      results.push({ type: "FAQ", title: f.question, link: "faq.html" });
    }
  });

  return results;
}

const searchBtn = document.getElementById("global-search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const query = document.getElementById("global-search-input").value;
    const results = globalSearch(query);
    const container = document.getElementById("search-results");
    container.innerHTML = "";

    if (results.length === 0) {
      container.innerHTML = "<p>No results found.</p>";
      return;
    }

    results.forEach(r => {
      container.innerHTML += `
        <div class="search-result">
          <span class="result-type">${r.type}</span>
          <a href="${r.link}">${r.title}</a>
        </div>`;
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
// ===============================
// AUTO ACTIVE NAV LINK
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  const navLinks = document.querySelectorAll(".nav-links a");

  // Get current file name
  const currentPage = window.location.pathname.split("/").pop();

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || 
        (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }

  });

});