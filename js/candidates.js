const manifestos = {
    "Engr. Adewale Okonkwo": `
    <h3>Infrastructure First</h3>
    <p>My vision is to connect every part of Nigeria through a modern rail and road network, boosting interstate commerce and reducing the cost of transportation of goods by 40%.</p>
    
    <h3>Economic Rehabilitation</h3>
    <p>We will introduce targeted subsidies for small manufacturing businesses (SMEs) to transform our economy from consumption to production. We aim to create 5 million direct industrial jobs in 4 years.</p>
  `,
    "Dr. Hauwa Garba Idris": `
    <h3>Healthcare for All</h3>
    <p>I will revitalize Kano State's primary healthcare centers, ensuring that every ward has a fully equipped clinic with 24-hour power and water supply.</p>
    
    <h3>Youth Education Initiative</h3>
    <p>We'll implement an aggressive out-of-school children enrollment program and integrate modern tech skills into the secondary school curriculum.</p>
  `,
    "Hon. Chukwuemeka Nwosu": `
    <h3>Legislative Reforms</h3>
    <p>I pledge to propose bills that increase the devolution of powers to local governments, ensuring resources are managed closer to the grassroots.</p>
    
    <h3>Youth Empowerment</h3>
    <p>We will construct three tech hubs across Anambra Central to provide free coding, design, and entrepreneurial training for young people.</p>
  `,
    "Alhaji Babatunde Fashola-Adeleke": `
    <h3>Financial Stability</h3>
    <p>As President, I will lower inflation by strictly regulating monetary policies, and stopping the over-reliance on borrowing. Our focus will be on boosting the Naira's value through export-driven growth.</p>
    
    <h3>National Security</h3>
    <p>We will transition to a more decentralized policing framework, empowering local and state authorities to handle community-level security while equipping the federal police with advanced intelligence tech.</p>
  `,
    "Prof. Ngozi Amara Eze": `
    <h3>Environmental Restoration</h3>
    <p>My administration will enforce strict penalties on environmental pollution in Rivers State and begin a massive cleanup of ongoing oil spill sites within my first 100 days in office.</p>
    
    <h3>Women in Governance</h3>
    <p>I will guarantee a 50% inclusion of women in all state executive and board appointments, setting a standard for gender equality in Nigeria.</p>
  `,
    "Col. (Rtd.) Musa Danladi Usman": `
    <h3>Peace & Conflict Resolution</h3>
    <p>My top priority for Plateau North is ending the cycle of communal clashes. I will establish rapid response security outposts and foster continuous interfaith dialogue.</p>
    
    <h3>Agricultural Development</h3>
    <p>We will secure our farmlands and provide subsidized farming implements to restore Plateau State as the food basket of the nation.</p>
  `,
    "Dr. Obiageli Kanu-Obi": `
    <h3>The New Economy</h3>
    <p>We will cut top-heavy government spending by 30% and redirect funds into education, healthcare, and infrastructure. Productivity over consumption is our core principle.</p>
    
    <h3>Power Sector Reform</h3>
    <p>We will unbundle the power grid further, encouraging state governments and private entities to generate and distribute power independently to reach 20,000 MW in 4 years.</p>
  `,
    "Barr. Segun Adelabu Bankole": `
    <h3>Justice Reform</h3>
    <p>I will fast-track the digitization of Oyo State's judicial system to ensure cases are heard and resolved swiftly, bringing justice closer to the common man.</p>
    
    <h3>Urban Development</h3>
    <p>We will upgrade Ibadan's drainage networks to prevent perennial flooding and expand the city's inner road networks.</p>
  `,
    "Hon. Aisha Maikudi Bello": `
    <h3>Community Healing</h3>
    <p>I will prioritize bills that provide financial compensation and rebuilding funds for communities affected by banditry in Kaduna South.</p>
    
    <h3>Empowering the Vulnerable</h3>
    <p>Will establish state-backed monthly stipends for widows and orphans, coupled with free basic education and vocational training.</p>
  `,
    "Sen. Rabiu Suleiman Kwankwaso": `
    <h3>Education Revolution</h3>
    <p>We will re-introduce free education from primary to secondary levels nationwide, and establish a specialized student loan board for tertiary institutions.</p>
    
    <h3>Agricultural Self-Sufficiency</h3>
    <p>We will heavily subsidize fertilizers and modern agricultural equipment to ensure food security and lower the cost of basic food items.</p>
  `,
    "Arch. Fatima Zahra Maigari": `
    <h3>Modern Adamawa</h3>
    <p>My administration will completely overhaul the state capital's master plan, introducing modern affordable housing estates for civil servants.</p>
    
    <h3>Job Creation</h3>
    <p>We will partner with private IT firms to train 10,000 youths annually in remote-work skills, plugging Adamawa into the global gig economy.</p>
  `,
    "Dr. Idris Yusuf Galadima": `
    <h3>Proactive Healthcare</h3>
    <p>I will sponsor legislation to mandate free maternal and child healthcare in all federal medical centers across the country.</p>
    
    <h3>Disease Control</h3>
    <p>We will build a regional center for disease control and epidemiology in Kano to rapidly respond to outbreaks and protect our citizens.</p>
  `,
    "Prof. Emeka Ozoemena Ifejirika": `
    <h3>True Federalism</h3>
    <p>My administration will immediately initiate constitutional amendments to restructure the country, allowing states to control their resources and pay taxes to the center.</p>
    
    <h3>Industrialization</h3>
    <p>We will establish tax-free industrial zones in all six geopolitical zones to attract foreign direct manufacturing investments.</p>
  `,
    "Hon. Chidinma Roseline Obasi": `
    <h3>Revive Local Government</h3>
    <p>I will restore full financial autonomy to local governments in Imo State, ensuring grassroots development is no longer choked by the state executive.</p>
    
    <h3>Youth & Sports</h3>
    <p>We will build modern sports complexes in every local government to discover and nurture young talent, keeping them away from crime.</p>
  `,
    "Engr. Ikechukwu Ositadinma Nwachukwu": `
    <h3>Aba - The Hub of Africa</h3>
    <p>I will advocate for special federal intervention funds to completely rebuild the commercial infrastructure of Aba, from its roads to steady power supply.</p>
    
    <h3>Trade Policies</h3>
    <p>I will sponsor bills to streamline import and export duties, making it easier for Southeastern merchants to trade globally.</p>
  `,
    "Dr. Abubakar Sadiq Musa": `
    <h3>Healthcare over Bureaucracy</h3>
    <p>My administration will dedicate 15% of the national budget to healthcare, meeting the Abuja Declaration target and ending medical tourism.</p>
    
    <h3>Civil Service Reform</h3>
    <p>We will introduce radical performance-based evaluation systems in the civil service to weed out ghost workers and reward merit.</p>
  `,
    "Mrs. Blessing Nkechi Okafor": `
    <h3>Tech-Driven Governance</h3>
    <p>I will ensure all government processes in Enugu State—from tax collection to land plotting—are digitized and transparent.</p>
    
    <h3>Tourism & Culture</h3>
    <p>We will heavily invest in Enugu's cultural and historical sites, turning the state into the premium tourist destination of the Southeast.</p>
  `,
    "Barr. Uche Emmanuel Ani": `
    <h3>Protecting the Environment</h3>
    <p>I will push for rigorous enforcement of logging laws in Cross River to protect our rainforests and ensure sustainable timber harvesting.</p>
    
    <h3>Customs Reform</h3>
    <p>I will work closely with the federal government to ensure the Calabar port is dredged and fully operational, decongesting Lagos ports.</p>
  `
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('manifestoModal');
    const closeBtn = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalSubtitle = document.getElementById('modalSubtitle');
    const modalBody = document.getElementById('modalBody');

    const manifestoBtns = document.querySelectorAll('.btn-manifesto');

    manifestoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Find the card container
            const card = e.target.closest('.card');
            const candidateName = card.querySelector('.card-name').textContent.trim();
            const candidateRole = card.querySelector('.card-role').textContent.trim();
            const partyBadge = card.querySelector('.party-badge').textContent.trim();

            modalTitle.textContent = candidateName;
            modalSubtitle.textContent = `${candidateRole} — ${partyBadge}`;

            const content = manifestos[candidateName];
            if (content) {
                modalBody.innerHTML = content;
            } else {
                modalBody.innerHTML = '<p>Manifesto currently unavailable for this candidate.</p>';
            }

            modal.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });

    // Close when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
});
