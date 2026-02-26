// inline in procedures.html <script> tag

const steps = [
  "Confirm you are a registered voter",
  "Collect your Permanent Voter's Card (PVC) from INEC",
  "Find your assigned polling station using our Polling Lookup",
  "Arrive at the station before closing time with your PVC",
  "Join the accreditation queue",
  "Cast your vote and have your finger inked",
  "Wait for results to be announced publicly"
];

const documents = [
  "Permanent Voter's Card (PVC)",
  "Valid national ID (as backup)",
  "Knowledge of your polling station location"
];

// Render steps
const stepsList = document.getElementById("steps-container");
steps.forEach((step, i) => {
  stepsList.innerHTML += `<div class="step"><span class="step-number">${i + 1}</span><p>${step}</p></div>`;
});

// Render interactive checklist
const docList = document.getElementById("docs-container");
documents.forEach((doc, i) => {
  docList.innerHTML += `
    <label class="doc-item">
      <input type="checkbox" id="doc-${i}" onchange="saveCheck(${i})">
      ${doc}
    </label>`;
});

// Save checkbox state to localStorage
function saveCheck(index) {
  const checked = document.getElementById(`doc-${index}`).checked;
  localStorage.setItem(`doc_check_${index}`, checked);
}

// Restore checkbox state on page load
documents.forEach((_, i) => {
  const saved = localStorage.getItem(`doc_check_${i}`);
  if (saved === "true") document.getElementById(`doc-${i}`).checked = true;
});
