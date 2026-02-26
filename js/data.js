// js/data.js
// ─────────────────────────────────────────────
//  POLLING STATIONS  (10 entries)
// ─────────────────────────────────────────────
const pollingStations = [
  {
    id: "PS001",
    name: "Surulere Ward 3 – Community Primary School",
    address: "14 Adeniran Ogunsanya Street, Surulere, Lagos",
    lga: "Surulere",
    state: "Lagos",
    coordinates: { lat: 6.4969, lng: 3.3515 },
    registeredVoters: 847,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Wheelchair ramp", "Braille ballot guide"],
    ward: "Ward 03",
    senatoralDistrict: "Lagos Central"
  },
  {
    id: "PS002",
    name: "Garki Area 11 – Multipurpose Hall",
    address: "Plot 22 Moshood Abiola Way, Garki, Abuja FCT",
    lga: "Abuja Municipal Area Council",
    state: "FCT Abuja",
    coordinates: { lat: 9.0365, lng: 7.4892 },
    registeredVoters: 1134,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Wheelchair ramp", "Dedicated elderly queue"],
    ward: "Ward 06",
    senatoralDistrict: "Abuja Municipal"
  },
  {
    id: "PS003",
    name: "Enugu North – St. Patrick's Anglican School Hall",
    address: "3 Ogui Road, Enugu North, Enugu",
    lga: "Enugu North",
    state: "Enugu",
    coordinates: { lat: 6.4584, lng: 7.5464 },
    registeredVoters: 692,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Braille ballot guide"],
    ward: "Ward 01",
    senatoralDistrict: "Enugu North"
  },
  {
    id: "PS004",
    name: "Kano Municipal – Emir's Palace Civic Centre",
    address: "Bello Road, Kano Municipal, Kano",
    lga: "Kano Municipal",
    state: "Kano",
    coordinates: { lat: 11.9964, lng: 8.5167 },
    registeredVoters: 2041,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Wheelchair ramp", "Dedicated elderly queue", "Sign language officer"],
    ward: "Ward 12",
    senatoralDistrict: "Kano Central"
  },
  {
    id: "PS005",
    name: "Port Harcourt Township – GRA Phase 2 Community Hall",
    address: "8 Aba Road, GRA Phase 2, Port Harcourt, Rivers",
    lga: "Port Harcourt",
    state: "Rivers",
    coordinates: { lat: 4.8156, lng: 7.0498 },
    registeredVoters: 978,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Wheelchair ramp"],
    ward: "Ward 09",
    senatoralDistrict: "Port Harcourt"
  },
  {
    id: "PS006",
    name: "Ibadan North – Agodi Government House Annex Hall",
    address: "Agodi Gate, Ibadan North, Oyo",
    lga: "Ibadan North",
    state: "Oyo",
    coordinates: { lat: 7.3986, lng: 3.9054 },
    registeredVoters: 1309,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Braille ballot guide", "Dedicated elderly queue"],
    ward: "Ward 05",
    senatoralDistrict: "Ibadan North"
  },
  {
    id: "PS007",
    name: "Benin City South – Uwasota Junior Secondary School",
    address: "Uwasota Road, Benin City South, Edo",
    lga: "Oredo",
    state: "Edo",
    coordinates: { lat: 6.3350, lng: 5.6270 },
    registeredVoters: 815,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Wheelchair ramp"],
    ward: "Ward 04",
    senatoralDistrict: "Edo South"
  },
  {
    id: "PS008",
    name: "Maiduguri Metropolitan – Borno Express Hall",
    address: "15 Kashim Ibrahim Road, Maiduguri, Borno",
    lga: "Maiduguri Metropolitan",
    state: "Borno",
    coordinates: { lat: 11.8333, lng: 13.1500 },
    registeredVoters: 763,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Sign language officer"],
    ward: "Ward 07",
    senatoralDistrict: "Borno Central"
  },
  {
    id: "PS009",
    name: "Abeokuta South – Centenary Hall Polling Unit",
    address: "Oke-Lantoro, Abeokuta South, Ogun",
    lga: "Abeokuta South",
    state: "Ogun",
    coordinates: { lat: 7.1557, lng: 3.3451 },
    registeredVoters: 541,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Wheelchair ramp", "Braille ballot guide"],
    ward: "Ward 02",
    senatoralDistrict: "Ogun Central"
  },
  {
    id: "PS010",
    name: "Owerri Municipal – Holy Ghost Cathedral Parish Hall",
    address: "Douglas Road, Owerri Municipal, Imo",
    lga: "Owerri Municipal",
    state: "Imo",
    coordinates: { lat: 5.4836, lng: 7.0333 },
    registeredVoters: 889,
    openingTime: "08:00",
    closingTime: "17:00",
    accessibilityFeatures: ["Dedicated elderly queue"],
    ward: "Ward 01",
    senatoralDistrict: "Imo North"
  }
];


// ─────────────────────────────────────────────
//  CANDIDATES  (18 total — 3 per party × 6 parties)
//  Parties: APC · PDP · LP · NNPP · APGA · ADC
// ─────────────────────────────────────────────

const candidates = [

  // ══════════════════════════════════════════
  //  APC  –  All Progressives Congress
  // ══════════════════════════════════════════
  {
    id: "C001",
    fullName: "Adewale Okonkwo",
    title: "Engr.",
    party: "APC",
    partyFullName: "All Progressives Congress",
    position: "Presidential Candidate",
    state: "Osun",
    age: 62,
    education: "B.Eng Civil Engineering, University of Ife; MSc Infrastructure Policy, University of Edinburgh",
    occupation: "Civil Engineer & Former Minister of Works",
    manifesto: [
      "Rehabilitate 5,000 km of federal roads within first term",
      "Create 2 million jobs through public infrastructure projects",
      "Digitise the federal civil service to eliminate ghost workers",
      "Expand the National Grid to achieve 10,000 MW generation capacity"
    ],
    trackRecord: [
      "Served as Minister of Works 2015–2019; oversaw Second Niger Bridge completion",
      "Elected Senator, Osun Central 2011–2015",
      "Founded the Okonkwo Foundation providing STEM scholarships to 4,000 students"
    ],
    socialMedia: { twitter: "@adewale_okonkwo", instagram: "@adewale.okonkwo" },
    photo: "/assets/candidates/c001.jpg"
  },
  {
    id: "C002",
    fullName: "Hauwa Garba Idris",
    title: "Dr.",
    party: "APC",
    partyFullName: "All Progressives Congress",
    position: "Governorship Candidate – Kano State",
    state: "Kano",
    age: 54,
    education: "MBBS, Ahmadu Bello University; MPH, Johns Hopkins University",
    occupation: "Public Health Physician & Politician",
    manifesto: [
      "Establish free primary healthcare in all 484 wards in Kano",
      "Reduce maternal mortality by 40% within four years",
      "Build 200 new model schools in underserved communities",
      "Implement cash transfer programme for 500,000 low-income households"
    ],
    trackRecord: [
      "Commissioner for Health, Kano State 2019–2023",
      "Led Kano's COVID-19 response; state recorded lowest fatality rate in the North",
      "United Nations Public Health Award recipient, 2021"
    ],
    socialMedia: { twitter: "@drHauwaGarba", instagram: "@dr.hauwagarba" },
    photo: "/assets/candidates/c002.jpg"
  },
  {
    id: "C003",
    fullName: "Chukwuemeka Nwosu",
    title: "Hon.",
    party: "APC",
    partyFullName: "All Progressives Congress",
    position: "Senatorial Candidate – Anambra Central",
    state: "Anambra",
    age: 48,
    education: "LLB, University of Nigeria Nsukka; BL, Nigerian Law School",
    occupation: "Barrister & Former House of Representatives Member",
    manifesto: [
      "Sponsor legislation to decentralise power distribution to states",
      "Push for 30% budget allocation to education at federal level",
      "Advocate for Southeast rail corridor connecting Onitsha to Aba",
      "Establish a ₦5bn SME fund for Anambra entrepreneurs"
    ],
    trackRecord: [
      "House of Representatives, Onitsha North/South 2015–2023",
      "Chaired House Committee on Finance, 2019–2023",
      "Authored the Small Business Protection Act, 2021"
    ],
    socialMedia: { twitter: "@emekaNwosu_law", instagram: "@emeka.nwosu" },
    photo: "/assets/candidates/c003.jpg"
  },


  // ══════════════════════════════════════════
  //  PDP  –  Peoples Democratic Party
  // ══════════════════════════════════════════
  {
    id: "C004",
    fullName: "Babatunde Fashola-Adeleke",
    title: "Alhaji",
    party: "PDP",
    partyFullName: "Peoples Democratic Party",
    position: "Presidential Candidate",
    state: "Kwara",
    age: 58,
    education: "BSc Economics, University of Lagos; MBA, INSEAD Business School",
    occupation: "Economist & Former Central Bank Deputy Governor",
    manifesto: [
      "Unify the foreign exchange market and stabilise the naira within 18 months",
      "Remove fuel subsidy gradually with a ₦30,000/month transport palliative",
      "Increase tax-to-GDP ratio from 6% to 15% by broadening the tax base",
      "Achieve food security through irrigation financing for northern farmers"
    ],
    trackRecord: [
      "Deputy Governor, Central Bank of Nigeria 2014–2019",
      "Co-authored Nigeria's Economic Recovery & Growth Plan, 2017",
      "Senator, Kwara North 2003–2007"
    ],
    socialMedia: { twitter: "@BT_Adeleke", instagram: "@bt.adeleke" },
    photo: "/assets/candidates/c004.jpg"
  },
  {
    id: "C005",
    fullName: "Ngozi Amara Eze",
    title: "Prof.",
    party: "PDP",
    partyFullName: "Peoples Democratic Party",
    position: "Governorship Candidate – Rivers State",
    state: "Rivers",
    age: 51,
    education: "BSc Political Science, University of Port Harcourt; PhD Development Studies, University of Ibadan",
    occupation: "Academic & Women's Rights Activist",
    manifesto: [
      "End oil bunkering through community policing partnerships with host communities",
      "Establish a ₦10bn Rivers State Venture Capital Fund for tech startups",
      "Build 10 new technical colleges to address youth unemployment",
      "Guarantee 40% cabinet appointments for women"
    ],
    trackRecord: [
      "Special Adviser on Gender Affairs to the Rivers State Governor, 2019–2023",
      "Founded WomenRise NG, a political empowerment NGO with 120,000 members",
      "Recipient, African Women Leadership Award, AU 2022"
    ],
    socialMedia: { twitter: "@ProfNgoziEze", instagram: "@prof.ngozi.eze" },
    photo: "/assets/candidates/c005.jpg"
  },
  {
    id: "C006",
    fullName: "Musa Danladi Usman",
    title: "Col. (Rtd.)",
    party: "PDP",
    partyFullName: "Peoples Democratic Party",
    position: "Senatorial Candidate – Plateau North",
    state: "Plateau",
    age: 65,
    education: "BSc Military Science, Nigerian Defence Academy; MSc Strategic Studies, University of Jos",
    occupation: "Retired Military Officer & Farmer",
    manifesto: [
      "Sponsor a Plateau State Farmers' Protection Bill to end herder-farmer conflicts",
      "Secure federal funding for rebuilding communities destroyed by violence",
      "Push for a dedicated security intervention fund for the Middle Belt",
      "Advocate for a national grazing reserves law to reduce land disputes"
    ],
    trackRecord: [
      "Commanded peacekeeping mission in Liberia under ECOMOG, 1995–1997",
      "Plateau State Security Adviser 2011–2015; facilitated Wase peace accord",
      "Established Danladi Farm Cooperative employing 3,000 families in Jos"
    ],
    socialMedia: { twitter: "@ColMusaDanladi", instagram: "@col.musa.danladi" },
    photo: "/assets/candidates/c006.jpg"
  },


  // ══════════════════════════════════════════
  //  LP  –  Labour Party
  // ══════════════════════════════════════════
  {
    id: "C007",
    fullName: "Obiageli Kanu-Obi",
    title: "Dr.",
    party: "LP",
    partyFullName: "Labour Party",
    position: "Presidential Candidate",
    state: "Enugu",
    age: 50,
    education: "BSc Economics, University of Nigeria Nsukka; PhD Development Economics, London School of Economics",
    occupation: "Economist & Trade Union Leader",
    manifesto: [
      "Introduce a living wage of ₦150,000 as the new national minimum wage",
      "Establish a National Youth Employment Guarantee Scheme for ages 18–35",
      "Reverse all anti-labour privatisation deals signed without National Assembly approval",
      "Create a sovereign wealth endowment to fund free university education"
    ],
    trackRecord: [
      "President-General, Nigerian Labour Congress 2018–2023",
      "Led the 2022 nationwide strike that secured a ₦30,000 interim minimum wage",
      "Negotiated the Oil Workers' Welfare Compact reducing industry fatalities by 60%"
    ],
    socialMedia: { twitter: "@ObiageliKanuObi", instagram: "@obiageli.kanuobi" },
    photo: "/assets/candidates/c007.jpg"
  },
  {
    id: "C008",
    fullName: "Segun Adelabu Bankole",
    title: "Barr.",
    party: "LP",
    partyFullName: "Labour Party",
    position: "Governorship Candidate – Oyo State",
    state: "Oyo",
    age: 45,
    education: "LLB, Obafemi Awolowo University; LLM Human Rights Law, University of Cape Town",
    occupation: "Human Rights Lawyer & Civic Activist",
    manifesto: [
      "Establish a Oyo State Police Force with community oversight boards",
      "Digitise land registry to eliminate title fraud and ease property access",
      "Fund a ₦3bn agri-processing zone in Iseyin to boost textile cotton value chain",
      "Mandate 50% local content in all state procurement contracts"
    ],
    trackRecord: [
      "Founded Justice Watch Nigeria, providing free legal aid to 25,000 citizens",
      "Lead counsel in landmark Supreme Court ruling on police brutality liability, 2020",
      "Oyo State Youth Leader of the Year Award, 2018"
    ],
    socialMedia: { twitter: "@SegunBankole_LP", instagram: "@segun.bankole.lp" },
    photo: "/assets/candidates/c008.jpg"
  },
  {
    id: "C009",
    fullName: "Aisha Maikudi Bello",
    title: "Hon.",
    party: "LP",
    partyFullName: "Labour Party",
    position: "Senatorial Candidate – Kaduna South",
    state: "Kaduna",
    age: 39,
    education: "BSc Sociology, Ahmadu Bello University; MSc Conflict Resolution, University of Bradford",
    occupation: "Community Organiser & Interfaith Peacebuilder",
    manifesto: [
      "Establish a Southern Kaduna Reconstruction & Reconciliation Commission",
      "Sponsor a bill mandating interfaith dialogue units in all LGA councils",
      "Secure federal allocation for mass housing in communities displaced by violence",
      "Push for a dedicated youth vocational training budget line in the federal appropriation"
    ],
    trackRecord: [
      "Brokered 14 inter-communal ceasefire agreements in Southern Kaduna, 2016–2022",
      "USAID Community Peacebuilder of the Year, 2020",
      "Convened the Kaduna Youth Parliament, now an annual civic institution"
    ],
    socialMedia: { twitter: "@AishaMaikudi", instagram: "@aisha.maikudi" },
    photo: "/assets/candidates/c009.jpg"
  },


  // ══════════════════════════════════════════
  //  NNPP  –  New Nigeria Peoples Party
  // ══════════════════════════════════════════
  {
    id: "C010",
    fullName: "Rabiu Suleiman Kwankwaso",
    title: "Sen.",
    party: "NNPP",
    partyFullName: "New Nigeria Peoples Party",
    position: "Presidential Candidate",
    state: "Kano",
    age: 67,
    education: "BSc Civil Engineering, Ahmadu Bello University; MSc Water Resources Engineering, University of Reading",
    occupation: "Engineer & Veteran Politician",
    manifesto: [
      "Restructure Nigeria into a true federation with stronger state fiscal autonomy",
      "Invest ₦2tn in a National Water Infrastructure Programme over four years",
      "Reform INEC to deploy biometric voter authentication at every polling unit",
      "Expand free education from primary through to first degree level"
    ],
    trackRecord: [
      "Governor of Kano State 1999–2003 and 2011–2015",
      "Minister of Defence, 2003–2007; modernised procurement processes",
      "Established Kano State University of Science & Technology, Wudil"
    ],
    socialMedia: { twitter: "@RabiuKwankwaso", instagram: "@rabiu.kwankwaso" },
    photo: "/assets/candidates/c010.jpg"
  },
  {
    id: "C011",
    fullName: "Fatima Zahra Maigari",
    title: "Arch.",
    party: "NNPP",
    partyFullName: "New Nigeria Peoples Party",
    position: "Governorship Candidate – Adamawa State",
    state: "Adamawa",
    age: 47,
    education: "B.Arch, Ahmadu Bello University; MSc Urban Planning, University of Stuttgart",
    occupation: "Architect & Urban Development Consultant",
    manifesto: [
      "Develop a 20-year Adamawa Spatial Plan to guide sustainable urban growth",
      "Build 50,000 affordable housing units through public-private partnership",
      "Revive the Savannah Sugar Company to restore 8,000 direct jobs in Numan",
      "Establish a Girei Technology Hub to attract digital economy investment to the North-East"
    ],
    trackRecord: [
      "Lead architect, Yola Urban Renewal Project 2017–2021",
      "Adamawa State Urban Development Commissioner, 2021–2023",
      "African Union Emerging Leader in Sustainable Architecture, 2022"
    ],
    socialMedia: { twitter: "@ArchFatimaZahra", instagram: "@arch.fatima.zahra" },
    photo: "/assets/candidates/c011.jpg"
  },
  {
    id: "C012",
    fullName: "Idris Yusuf Galadima",
    title: "Dr.",
    party: "NNPP",
    partyFullName: "New Nigeria Peoples Party",
    position: "Senatorial Candidate – Kano Central",
    state: "Kano",
    age: 55,
    education: "MBBS, Bayero University Kano; PhD Epidemiology, London School of Hygiene & Tropical Medicine",
    occupation: "Epidemiologist & Public Health Advocate",
    manifesto: [
      "Sponsor the Universal Health Coverage Bill to guarantee free basic healthcare",
      "Push for reinstatement of 15% government budget allocation to health",
      "Establish disease surveillance centres in each of the 44 LGAs of Kano",
      "Advocate for pharmaceutical manufacturing incentives to reduce drug import dependency"
    ],
    trackRecord: [
      "WHO Nigeria Country Representative for Non-Communicable Diseases, 2015–2020",
      "Designed Kano's meningitis early-warning system, reducing outbreaks by 70%",
      "Published 31 peer-reviewed papers in international health journals"
    ],
    socialMedia: { twitter: "@DrIdrisGaladima", instagram: "@dr.idris.galadima" },
    photo: "/assets/candidates/c012.jpg"
  },


  // ══════════════════════════════════════════
  //  APGA  –  All Progressives Grand Alliance
  // ══════════════════════════════════════════
  {
    id: "C013",
    fullName: "Emeka Ozoemena Ifejirika",
    title: "Prof.",
    party: "APGA",
    partyFullName: "All Progressives Grand Alliance",
    position: "Presidential Candidate",
    state: "Imo",
    age: 59,
    education: "BSc Political Science, University of Ibadan; PhD Comparative Politics, Yale University",
    occupation: "Political Scientist & Former Vice-Chancellor",
    manifesto: [
      "Convene a Sovereign National Conference to settle the question of restructuring",
      "Increase local government fiscal autonomy through constitutional amendment",
      "Develop a Southeast-Southwest economic corridor with a shared rail and road axis",
      "Create a National Digital Identity & Creditworthiness System to formalise the informal economy"
    ],
    trackRecord: [
      "Vice-Chancellor, Imo State University 2014–2020",
      "Chaired the National Population Commission, 2010–2014",
      "Authored A New Federation: Rethinking Nigerian Governance (2019), adopted as policy reference"
    ],
    socialMedia: { twitter: "@ProfOzoIfejirika", instagram: "@prof.ozo.ifejirika" },
    photo: "/assets/candidates/c013.jpg"
  },
  {
    id: "C014",
    fullName: "Chidinma Roseline Obasi",
    title: "Hon.",
    party: "APGA",
    partyFullName: "All Progressives Grand Alliance",
    position: "Governorship Candidate – Imo State",
    state: "Imo",
    age: 43,
    education: "BSc Accounting, University of Nigeria Nsukka; MBA Finance, University of Lagos",
    occupation: "Chartered Accountant & Social Entrepreneur",
    manifesto: [
      "Audit and recover all Imo State assets alienated since 2015",
      "Establish an Imo Diaspora Investment Bond to attract $500m in five years",
      "Create an Owerri Technology & Creative Arts District to employ 20,000 youth",
      "Introduce free school meals in all public primary schools in Imo State"
    ],
    trackRecord: [
      "Imo State Commissioner for Finance & Economic Planning, 2020–2023",
      "Reduced Imo internally generated revenue shortfall from 38% to 12% in three years",
      "Founded HomeCraft Imo, a social enterprise employing 2,500 rural artisans"
    ],
    socialMedia: { twitter: "@ChidinmaObasi_", instagram: "@chidinma.obasi" },
    photo: "/assets/candidates/c014.jpg"
  },
  {
    id: "C015",
    fullName: "Ikechukwu Ositadinma Nwachukwu",
    title: "Engr.",
    party: "APGA",
    partyFullName: "All Progressives Grand Alliance",
    position: "Senatorial Candidate – Abia North",
    state: "Abia",
    age: 52,
    education: "B.Eng Electrical Engineering, University of Benin; MSc Energy Systems, Cranfield University",
    occupation: "Power Engineer & Renewable Energy Developer",
    manifesto: [
      "Sponsor a Rural Electrification (Off-Grid Communities) Amendment Bill",
      "Push for ₦50bn federal investment in solar micro-grids for Southeast communities",
      "Advocate for a dedicated agroprocessing industrial cluster in Abia North",
      "Establish a ₦2bn Abia Entrepreneurship & Innovation Fund through legislative appropriation"
    ],
    trackRecord: [
      "CEO, SunPower Nigeria Ltd — installed 3,200 solar systems across 9 states",
      "Technical Adviser, Rural Electrification Agency 2017–2021",
      "Nigerian Society of Engineers Award for Innovation in Renewable Energy, 2022"
    ],
    socialMedia: { twitter: "@IkeOsitaNwachukwu", instagram: "@ike.osita.nwachukwu" },
    photo: "/assets/candidates/c015.jpg"
  },


  // ══════════════════════════════════════════
  //  ADC  –  African Democratic Congress
  // ══════════════════════════════════════════
  {
    id: "C016",
    fullName: "Yewande Abimbola-Coker",
    title: "Dr.",
    party: "ADC",
    partyFullName: "African Democratic Congress",
    position: "Presidential Candidate",
    state: "Lagos",
    age: 46,
    education: "BSc Computer Science, University of Lagos; PhD Artificial Intelligence, University of Cambridge",
    occupation: "Tech Entrepreneur & Innovation Policy Expert",
    manifesto: [
      "Launch a National Digital Economy Master Plan targeting $50bn contribution to GDP by 2030",
      "Establish 36 state-level coding & AI academies to train 1 million tech workers",
      "Introduce a Startup Act providing tax-free status for registered tech companies in first five years",
      "Digitise all government services end-to-end to eliminate bureaucratic corruption"
    ],
    trackRecord: [
      "Founded Afrotech Ventures, Nigeria's first AI-focused VC firm with $120m portfolio",
      "Presidential Adviser on Digital Economy (unpaid advisory role), 2021–2023",
      "World Economic Forum Young Global Leader, 2019"
    ],
    socialMedia: { twitter: "@YewandeACoker", instagram: "@yewande.acoker" },
    photo: "/assets/candidates/c016.jpg"
  },
  {
    id: "C017",
    fullName: "Emmanuel Taribo Oghenekohwo",
    title: "Barr.",
    party: "ADC",
    partyFullName: "African Democratic Congress",
    position: "Governorship Candidate – Delta State",
    state: "Delta",
    age: 50,
    education: "LLB, University of Benin; LLM Oil & Gas Law, University of Aberdeen",
    occupation: "Petroleum Lawyer & Environmental Rights Advocate",
    manifesto: [
      "Establish a Delta State Environmental Tribunal with binding remediation powers over oil companies",
      "Negotiate a revised host-community development framework increasing NDDC allocation to 5% net profit",
      "Create a Delta Artisan Fishermen Insurance & Support Scheme",
      "Develop a Warri-Asaba economic corridor as a free trade and processing zone"
    ],
    trackRecord: [
      "Won landmark $200m compensation ruling for Ogoni-adjacent communities against a major oil firm, 2019",
      "Delta State Environmental Adviser 2015–2019",
      "Co-founded the Niger Delta Legal Aid Consortium, providing free representation to 18,000 plaintiffs"
    ],
    socialMedia: { twitter: "@BarrTariboOG", instagram: "@barr.taribo.og" },
    photo: "/assets/candidates/c017.jpg"
  },
  {
    id: "C018",
    fullName: "Halima Buba Shehu",
    title: "Hon.",
    party: "ADC",
    partyFullName: "African Democratic Congress",
    position: "Senatorial Candidate – Borno South",
    state: "Borno",
    age: 41,
    education: "BSc Education, University of Maiduguri; MSc Humanitarian Action, Uppsala University",
    occupation: "Humanitarian Worker & Conflict-Recovery Specialist",
    manifesto: [
      "Sponsor a Borno State Post-Conflict Reconstruction & Rehabilitation Act",
      "Push for a federal IDPs (Internally Displaced Persons) Rights & Reintegration Bill",
      "Secure ₦20bn annual special allocation for Borno South infrastructure repair",
      "Establish mobile schools and digital classrooms in remaining IDP camps"
    ],
    trackRecord: [
      "UNHCR Field Coordinator, Northeast Nigeria 2016–2022 — oversaw aid delivery to 1.2 million displaced persons",
      "Founded Rebuild Borno Initiative, reconstructing 4,000 homes in Gwoza and Chibok LGAs",
      "UN Secretary-General's Humanitarian Champion Award, 2021"
    ],
    socialMedia: { twitter: "@HalimaBubaShehu", instagram: "@halima.buba.shehu" },
    photo: "/assets/candidates/c018.jpg"
  }

];


// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────

/** Filter by party abbreviation */
const getByParty = (partyCode) =>
  candidates.filter((c) => c.party === partyCode);

/** Filter by position type keyword (e.g. "Presidential", "Governorship", "Senatorial") */
const getByPosition = (keyword) =>
  candidates.filter((c) =>
    c.position.toLowerCase().includes(keyword.toLowerCase())
  );

/** Look up a single candidate by ID */
const getById = (id) => candidates.find((c) => c.id === id) || null;

/** Summary: list of parties represented */
const partySummary = [...new Set(candidates.map((c) => c.party))].map(
  (code) => ({
    code,
    fullName: candidates.find((c) => c.party === code).partyFullName,
    count: candidates.filter((c) => c.party === code).length
  })
);


// ─────────────────────────────────────────────
//  EXPORTS  (CommonJS + ESM dual compat shim)
// ─────────────────────────────────────────────
if (typeof module !== "undefined" && module.exports) {
  module.exports = { candidates, getByParty, getByPosition, getById, partySummary };
} else {
  // ESM / browser usage — attach to window if available
  if (typeof window !== "undefined") {
    window.candidatesData = { candidates, getByParty, getByPosition, getById, partySummary };
  }
}


// ─────────────────────────────────────────────
//  ELECTIONS  (4 entries)
// ─────────────────────────────────────────────
const elections = [
  {
    id: "EL001",
    title: "2027 Nigerian Presidential Election",
    type: "Presidential",
    date: "2027-02-20",
    registrationDeadline: "2026-12-31",
    status: "Upcoming",
    description: "The quadrennial election to elect the President and Vice-President of the Federal Republic of Nigeria for a four-year term.",
    eligibility: "Nigerian citizens aged 18 and above who are registered with INEC.",
    candidates: ["C001", "C004"],
    keyDates: [
      { event: "Voter Registration Closes", date: "2026-12-31" },
      { event: "Candidate Nomination Deadline", date: "2026-11-15" },
      { event: "Campaign Period Begins", date: "2026-11-28" },
      { event: "Election Day", date: "2027-02-20" },
      { event: "Results Declaration Deadline", date: "2027-03-06" }
    ],
    conductingBody: "Independent National Electoral Commission (INEC)",
    resultsUrl: null
  },
  {
    id: "EL002",
    title: "2027 Kano State Governorship Election",
    type: "Governorship",
    date: "2027-03-06",
    registrationDeadline: "2026-12-31",
    status: "Upcoming",
    description: "Election to determine the next Executive Governor of Kano State, one of Nigeria's most populous states.",
    eligibility: "Nigerian citizens aged 18 and above registered to vote in Kano State.",
    candidates: ["C002"],
    keyDates: [
      { event: "Voter Registration Closes", date: "2026-12-31" },
      { event: "Candidate Nomination Deadline", date: "2026-12-01" },
      { event: "Campaign Period Begins", date: "2026-12-08" },
      { event: "Election Day", date: "2027-03-06" },
      { event: "Results Declaration Deadline", date: "2027-03-13" }
    ],
    conductingBody: "Independent National Electoral Commission (INEC)",
    resultsUrl: null
  },
  {
    id: "EL003",
    title: "2027 Rivers State Governorship Election",
    type: "Governorship",
    date: "2027-03-06",
    registrationDeadline: "2026-12-31",
    status: "Upcoming",
    description: "Election to determine the next Executive Governor of Rivers State.",
    eligibility: "Nigerian citizens aged 18 and above registered to vote in Rivers State.",
    candidates: ["C005"],
    keyDates: [
      { event: "Voter Registration Closes", date: "2026-12-31" },
      { event: "Candidate Nomination Deadline", date: "2026-12-01" },
      { event: "Campaign Period Begins", date: "2026-12-08" },
      { event: "Election Day", date: "2027-03-06" },
      { event: "Results Declaration Deadline", date: "2027-03-13" }
    ],
    conductingBody: "Independent National Electoral Commission (INEC)",
    resultsUrl: null
  },
  {
    id: "EL004",
    title: "2023 Nigerian General Election – Archived Results",
    type: "Presidential",
    date: "2023-02-25",
    registrationDeadline: "2023-01-22",
    status: "Concluded",
    description: "The 2023 General Election in which Bola Ahmed Tinubu of the APC was declared winner by INEC.",
    eligibility: "N/A – Election concluded.",
    candidates: [],
    keyDates: [
      { event: "Election Day", date: "2023-02-25" },
      { event: "Results Declared", date: "2023-03-01" }
    ],
    conductingBody: "Independent National Electoral Commission (INEC)",
    resultsUrl: "https://www.inecnigeria.org/results2023"
  }
];


// ─────────────────────────────────────────────
//  FAQs  (15 total — 10 genuine Q&As + 5 myths)
// ─────────────────────────────────────────────
const faqs = [
  // ── Genuine FAQs (1–10) ──────────────────
  {
    id: "FAQ001",
    category: "Registration",
    type: "genuine",
    question: "How do I register to vote in Nigeria?",
    answer: "You can register at any INEC registration centre in your local government area during active registration periods. Bring a valid form of ID (National ID, passport, or driver's licence) and proof of residence. INEC also runs a Continuous Voter Registration (CVR) exercise online at cvr.inecnigeria.org where you can pre-register before visiting an INEC office to complete biometric enrolment."
  },
  {
    id: "FAQ002",
    category: "Registration",
    type: "genuine",
    question: "Can I transfer my voter registration to a new state if I have relocated?",
    answer: "Yes. INEC allows registered voters to transfer their registration during an active CVR window. You must visit the INEC office in your new local government area, provide your existing Voter Identification Number (VIN), and complete a transfer request form. Your PVC will be updated and reissued at the new location."
  },
  {
    id: "FAQ003",
    category: "Voting Process",
    type: "genuine",
    question: "What do I need to bring to vote on election day?",
    answer: "You must bring your original Permanent Voter Card (PVC). No other document — including National ID or passport — will be accepted as a substitute. Your PVC will be verified using INEC's Bimodal Voter Accreditation System (BVAS) before you are given a ballot."
  },
  {
    id: "FAQ004",
    category: "Voting Process",
    type: "genuine",
    question: "What time do polling units open and close?",
    answer: "Polling units open at 8:00 AM and close at 5:00 PM on election day. However, any voter who is already in the queue by 5:00 PM is entitled to cast their vote. Accreditation and voting now occur simultaneously under the new INEC guidelines, so you can vote as soon as you are accredited."
  },
  {
    id: "FAQ005",
    category: "Results & Transparency",
    type: "genuine",
    question: "How are election results transmitted and verified?",
    answer: "After voting closes, polling unit results are announced publicly at the polling unit, and a copy of the result sheet (Form EC8A) is given to party agents and pasted at the polling unit. The Presiding Officer then uploads the result electronically via INEC's BVAS and the IReV (INEC Result Viewing Portal), which the public can monitor in real time at results.inecnigeria.org."
  },
  {
    id: "FAQ006",
    category: "Eligibility",
    type: "genuine",
    question: "Can Nigerians in the diaspora vote?",
    answer: "As of the 2023 elections, Nigerians living abroad are not yet able to vote in general elections. The Electoral Act 2022 did not include diaspora voting provisions. However, INEC and the National Assembly are reviewing frameworks to enable diaspora voting in future elections. You can follow INEC's official announcements for updates."
  },
  {
    id: "FAQ007",
    category: "Voter Rights",
    type: "genuine",
    question: "What should I do if I am harassed or intimidated at a polling unit?",
    answer: "Report the incident immediately to the INEC Presiding Officer, a police officer on duty at the unit, or an accredited electoral observer. You can also call the INEC Voter Help Line at 0800-CALL-INEC (0800-2255-4632) or report via the INEC Situation Room. Do not engage aggressors — your safety comes first."
  },
  {
    id: "FAQ008",
    category: "Ballots",
    type: "genuine",
    question: "What happens if I make a mistake on my ballot paper?",
    answer: "If you spoil your ballot before depositing it, approach the Presiding Officer immediately. They will cancel the spoilt ballot, record it, and issue you a fresh one. You are only allowed one replacement. Once a ballot is deposited in the ballot box, it cannot be retrieved or replaced."
  },
  {
    id: "FAQ009",
    category: "Technology",
    type: "genuine",
    question: "What is BVAS and how does it affect my voting experience?",
    answer: "BVAS (Bimodal Voter Accreditation System) is INEC's electronic device used to verify voters using fingerprint and facial recognition. When you arrive at your polling unit, the BVAS confirms your identity against the voter register. If the device cannot verify you after multiple attempts, the Presiding Officer can authorise manual verification by checking your PVC details against the printed register."
  },
  {
    id: "FAQ010",
    category: "Candidate Information",
    type: "genuine",
    question: "How can I find out what a candidate stands for before voting?",
    answer: "You can review each candidate's manifesto, track record, and biography right here on VoteWise by visiting the Candidates section. You can also access official party manifestos on party websites, attend town-hall debates, and follow candidate profiles on social media. INEC also publishes a list of all cleared candidates on its website ahead of every election."
  },

  // ── Myth-Busters (11–15) ─────────────────
  {
    id: "FAQ011",
    category: "Myths & Misconceptions",
    type: "myth",
    myth: "Your vote doesn't count — results are always predetermined.",
    fact: "This is false. Nigeria's elections have produced results that defied expectations, including incumbent governors and presidents losing at the polls. The introduction of BVAS and real-time result upload via IReV has significantly reduced the ability to alter results at collation centres. Voter turnout directly determines outcomes, and every vote counted at your polling unit is recorded publicly."
  },
  {
    id: "FAQ012",
    category: "Myths & Misconceptions",
    type: "myth",
    myth: "You can vote without a PVC as long as you have your National ID or BVN.",
    fact: "This is false. Only your original Permanent Voter Card (PVC) is accepted for accreditation on election day. Neither a National Identity Card, driver's licence, BVN slip, nor any other government-issued document can substitute for a PVC. If you have not collected your PVC, visit your INEC LGA office before the collection deadline."
  },
  {
    id: "FAQ013",
    category: "Myths & Misconceptions",
    type: "myth",
    myth: "Accepting money from a politician does not influence your vote — you can collect and still vote your conscience.",
    fact: "While your ballot is secret, vote-buying is a criminal offence under Section 124 of the Electoral Act 2022, punishable by a fine and up to 12 months imprisonment — for both the giver and the receiver. Beyond legality, widespread vote-buying distorts electoral outcomes and undermines democratic accountability. Report vote-buying incidents to INEC or security agencies."
  },
  {
    id: "FAQ014",
    category: "Myths & Misconceptions",
    type: "myth",
    myth: "Pregnant women and the elderly are not allowed at polling units.",
    fact: "This is entirely false. Every registered Nigerian citizen has the right to vote regardless of age, physical condition, or pregnancy. INEC guidelines require polling unit staff to give priority accreditation to pregnant women, nursing mothers, persons with disabilities, and elderly voters. They should be attended to first, ahead of the general queue."
  },
  {
    id: "FAQ015",
    category: "Myths & Misconceptions",
    type: "myth",
    myth: "Once INEC announces a winner, no one can challenge the result.",
    fact: "This is false. Any candidate or political party can file an election petition at the appropriate tribunal within 21 days of the declaration of results. The Election Petition Tribunal (for governorship and National Assembly elections) and the Presidential Election Petition Court (for presidential elections) are constitutionally empowered to nullify results and order fresh elections if electoral malpractice is proven."
  }
];


// ─────────────────────────────────────────────
//  EXPORTS  (uncomment the style that fits your setup)
// ─────────────────────────────────────────────

// ES Module export:
// export { pollingStations, parties, candidates, elections, faqs };

// CommonJS export:
// module.exports = { pollingStations, parties, candidates, elections, faqs };

// Or simply access them as globals if using <script src="data.js">

// Seed data into localStorage
function seedData() {
  if (!localStorage.getItem("stations")) {
    localStorage.setItem("stations", JSON.stringify(pollingStations));
  }
  if (!localStorage.getItem("candidates")) {
    localStorage.setItem("candidates", JSON.stringify(candidates));
  }
  if (!localStorage.getItem("elections")) {
    localStorage.setItem("elections", JSON.stringify(elections));
  }
  if (!localStorage.getItem("faqs")) {
    localStorage.setItem("faqs", JSON.stringify(faqs));
  }
}

seedData();
