// js/faq.js

function getFaqs() {
  return JSON.parse(localStorage.getItem("faqs")) || [];
}

function displayFaqs(faqs) {
  const container = document.getElementById("faq-container");
  container.innerHTML = "";

  faqs.forEach(f => {
    const item = document.createElement("div");
    item.classList.add("faq-item");
    item.innerHTML = `
      <div class="faq-question" onclick="toggleAnswer(${f.id})">
        ${f.isMyth ? '<span class="myth-badge">MYTH</span>' : ""}
        ${f.question}
        <span class="arrow">▼</span>
      </div>
      <div class="faq-answer" id="answer-${f.id}" style="display:none;">
        ${f.isMyth ? '<span class="truth-label">✅ The Truth:</span>' : ""}
        <p>${f.answer}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

function toggleAnswer(id) {
  const el = document.getElementById(`answer-${id}`);
  el.style.display = el.style.display === "none" ? "block" : "none";
}

function filterFaqs() {
  const category = document.getElementById("category-filter").value;
  const all = getFaqs();
  const filtered = category === "all" ? all : all.filter(f => f.category === category);
  displayFaqs(filtered);
}

displayFaqs(getFaqs());
document.getElementById("category-filter").addEventListener("change", filterFaqs);
