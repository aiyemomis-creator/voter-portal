// A simple mockup of site content for searching
const siteContent = [
    {
        title: "Find Polling Station",
        url: "polling-stations.html",
        description: "Search and locate your nearest polling unit. Information on centers in Ikeja, Surulere, Eti-Osa, Alimosho, Mushin, Kosofe, and Ikorodu.",
        category: "Tools"
    },
    {
        title: "Election Dates & Deadlines",
        url: "elections.html",
        description: "Stay up to date with the Civic Calendar. Track the Presidential Primary, Municipal Elections, State Midterms, General Election, and Special Runoffs.",
        category: "Information"
    },
    {
        title: "How to Vote Guide",
        url: "procedures.html",
        description: "Your 4-step voting guide: Register to Vote, Collect Your PVC, Find Your Polling Station, and Cast Your Vote. Check required documents.",
        category: "Guide"
    },
    {
        title: "Candidates & Parties",
        url: "candidates.html",
        description: "Explore profiles of presidential, gubernatorial, and senatorial candidates from APC, PDP, LP, NNPP, APGA, and ADC. View manifestos.",
        category: "Profiles"
    },
    {
        title: "Frequently Asked Questions (FAQ)",
        url: "FAQ.html",
        description: "Answers to questions on registration, voting process, eligibility, and voter rights. Also covers myth-busting about BVAS and PVC requirements.",
        category: "Information"
    },
    {
        title: "BVAS - Bimodal Voter Accreditation System",
        url: "FAQ.html",
        description: "Information about the device used by INEC to verify voters via PVC chip, fingerprints and facial recognition.",
        category: "FAQ"
    },
    {
        title: "Permanent Voter Card (PVC)",
        url: "procedures.html",
        description: "Learn how to collect your PVC, and why it is the only accepted document for voting.",
        category: "Guide"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');

    const titleEl = document.getElementById('search-title');
    const subtitleEl = document.getElementById('search-subtitle');
    const resultsContainer = document.getElementById('search-results');

    if (!query) {
        titleEl.textContent = "Search";
        subtitleEl.textContent = "Enter a search term securely to find information.";
        resultsContainer.innerHTML = '<div class="no-results">Please enter a search term above.</div>';
        return;
    }

    subtitleEl.textContent = `Showing results for "${query}"`;
    document.title = `Search: ${query} - VoteWise`;

    const lowerQuery = query.toLowerCase();

    // Basic filtering logic checking title, description, and category
    const results = siteContent.filter(item => {
        return item.title.toLowerCase().includes(lowerQuery) ||
            item.description.toLowerCase().includes(lowerQuery) ||
            item.category.toLowerCase().includes(lowerQuery);
    });

    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = `
      <div class="no-results">
        <h3>No results found</h3>
        <p>Sorry, we couldn't find any content matching "${query}". Try adjusting your search terms.</p>
        <br>
        <a href="index.html" style="color: #2d6a4f; font-weight: 600; text-decoration: none;">&larr; Back to Home</a>
      </div>
    `;
    } else {
        results.forEach(result => {
            const el = document.createElement('a');
            el.href = result.url;
            el.className = 'search-result-item';

            el.innerHTML = `
        <div class="search-result-title">${result.title}</div>
        <div class="search-result-desc">${result.description}</div>
        <div class="search-result-meta">${result.category}</div>
      `;

            resultsContainer.appendChild(el);
        });
    }
});
