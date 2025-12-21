/**
 * Sponsorship Pipeline Data
 * Source: knowledge-base/02-team-governance/assignments.md
 * 
 * Contains corporate sponsor targets and nonprofit partner targets for each
 * of the 7 MAP pillars, plus cross-pillar foundations and warm connections.
 * 
 * Enhanced with:
 * - Strategic pitch context per pillar
 * - Extended narrative notes for each sponsor/partner
 * - Inline source citations with hyperlinks
 */

export interface Source {
  id: number;
  label: string;
  url: string;
}

export interface SponsorTarget {
  organization: string;
  tier: string;
  contact: string;
  title: string;
  relevance: string;
  extendedNotes?: string;
  sources?: Source[];
}

export interface NonprofitPartner {
  organization: string;
  role: string;
  contact: string;
  title: string;
  alignment: string;
  extendedNotes?: string;
  sources?: Source[];
}

export interface PitchContext {
  angle: string;
  description: string;
}

export interface PillarRecruitment {
  id: number;
  name: string;
  focus: string;
  pitchContext: PitchContext;
  corporateTargets: SponsorTarget[];
  nonprofitPartners: NonprofitPartner[];
}

export interface WarmConnection {
  name: string;
  role: string;
  network: string;
  strategy: string;
}

export interface CrossPillarFoundation {
  organization: string;
  focus: string;
  contact: string;
  contactStrategy: string;
  sources?: Source[];
}

// =============================================================================
// PILLAR RECRUITMENT DATA
// =============================================================================

export const pillarRecruitment: PillarRecruitment[] = [
  {
    id: 1,
    name: "Thriving City Hall",
    focus: "Gov efficiency, IT modernization, service delivery",
    pitchContext: {
      angle: "Operational Excellence & Digital Transformation",
      description: "Sponsors for this track will be drawn largely from the GovTech and B2B services sector. These companies have a vested interest in demonstrating how their technologies can modernize legacy systems. The outputs of this track—such as procurement visualization dashboards, FOIA request trackers, or permit status notification tools—directly serve the business community by reducing administrative friction.",
    },
    corporateTargets: [
      {
        organization: "Tyler Technologies",
        tier: "$10k - $25k",
        contact: "Matt Crane",
        title: "Virginia Team Lead",
        relevance: "Major GovTech vendor; deeply embedded in VA state/local IT.",
        extendedNotes: "Tyler Technologies stands as a paramount candidate for sponsorship within this pillar due to its entrenched status as a strategic partner to Virginia's public sector. With a dedicated team of Virginia government experts based in Richmond, Tyler Technologies holds critical eGovernment services contracts with the Virginia IT Agency (VITA) and services 245 government agencies across the Commonwealth. Their business model is predicated on \"connected communities,\" making a civic hackathon an ideal showroom for their commitment to frictionless citizen-government interaction. Matt Crane has publicly articulated the company's mission to equip communities with technology that connects data, people, and processes, specifically citing their work in streamlining payment processing and school transportation. Engaging Tyler Technologies at the $10,000–$25,000 level would likely unlock not just funding but access to mentorship from their deep bench of solution architects.",
        sources: [
          { id: 3, label: "Richmond BizSense", url: "https://richmondbizsense.com/2025/07/07/sponsored-content-to-drive-digital-government-transformation-connected-technology-is-a-must-2/" },
        ],
      },
      {
        organization: "Carahsoft",
        tier: "$5k - $15k",
        contact: "Tina Chiao",
        title: "Director",
        relevance: '"Master Government Aggregator" with massive event sponsorship history.',
        extendedNotes: "As the \"Master Government Aggregator,\" Carahsoft is a juggernaut in the public sector IT landscape, managing contracts for hundreds of software manufacturers and holding over 220 government contract vehicles. Although headquartered in Reston, their influence pervades Richmond's state and local government technology procurement channels. Carahsoft sponsors hundreds of events annually, ranging from executive roundtables to technology forums, indicating a robust budget for event marketing. Their sponsorship would lend significant credibility to the hackathon, signaling to other vendors that this is a premier GovTech event. Tina Chiao, a long-time Director with expertise in managing the AWS business and partner development, represents a strategic entry point. A sponsorship pitch should emphasize the opportunity to network with city CIOs and IT directors who often attend such innovation showcases.",
        sources: [
          { id: 4, label: "Carahsoft", url: "https://www.carahsoft.com/" },
          { id: 5, label: "State of GovTech 2022", url: "https://events.govtech.com/State-of-GovTech-2022.html" },
        ],
      },
      {
        organization: "Ippon Technologies",
        tier: "$5k - $10k",
        contact: "Will Willis",
        title: "Managing Director & Board Chair, AI Ready RVA",
        relevance: "HQ in Richmond; leadership deeply involved in civic tech/AI literacy.",
        extendedNotes: "Ippon Technologies, a global consultancy with its US headquarters in Richmond, offers a unique sponsorship profile that blends corporate capability with deep civic engagement. They position themselves as partners for the \"New Economy,\" focusing on cloud, data, and digital transformation. Crucially, their Managing Director, Will Willis, also serves as the Board Chairperson for AI Ready RVA, a local nonprofit dedicated to AI literacy. This dual role makes Ippon a perfect bridge between the corporate tech sector and civic education. Sponsoring the \"City Hall\" pillar aligns with their business interest in modernizing legacy systems and their leadership's personal commitment to Richmond's tech ecosystem. The pitch should leverage Willis's vision of making Richmond \"AI-ready\" to propose challenges that utilize generative AI to simplify complex city codes for residents.",
      },
      {
        organization: "CGI",
        tier: "$10k - $20k",
        contact: "Will LaBar",
        title: "Vice President",
        relevance: "Focus on onshore delivery centers and STEM workforce development.",
        extendedNotes: "CGI has established a significant footprint in Virginia, viewing its presence not just as a business operation but as a community partnership. Their \"STEM@CGI\" initiative and commitment to preventing \"brain drain\" from smaller communities align with the Mayor's goal of a thriving, efficient government that retains top talent. Will LaBar, Vice President overseeing U.S. onshore delivery centers, has been a vocal advocate for building strong partnerships with educational institutions and government bodies to foster local employment. A sponsorship from CGI could be framed around workforce development—using the hackathon to identify and recruit the next generation of technologists who will build the digital infrastructure of City Hall.",
      },
    ],
    nonprofitPartners: [
      {
        organization: "VPAP",
        role: "Data Partner",
        contact: "Cat Anthony",
        title: "Executive Director",
        alignment: "Gold standard for transparency/data viz.",
        extendedNotes: "VPAP is the undisputed leader in nonpartisan political information and data visualization in Virginia. Their mission to elevate public understanding of politics through data aligns perfectly with the \"Thriving City Hall\" pillar's focus on transparency. Executive Director Cat Anthony leads an organization that excels at transforming complex datasets into accessible visualizations. Partnering with VPAP would provide hackers with high-quality, clean data regarding campaign finance, lobbying, and legislative actions, enabling the creation of tools that hold government accountable.",
        sources: [
          { id: 6, label: "VPAP Team", url: "https://www.vpap.org/about-us/team/" },
        ],
      },
      {
        organization: "CodeVA",
        role: "Education Partner",
        contact: "Chris Dovi",
        title: "Executive Director",
        alignment: "Critical hub for CS education and policy.",
        extendedNotes: "As Virginia's leading computer science education nonprofit, CodeVA is integral to the region's tech talent pipeline. They have deep ties to state policy and are instrumental in implementing computer science standards across the Commonwealth. Executive Director Chris Dovi leads the organization's efforts to broaden access to computing education. CodeVA's involvement as a partner would validate the educational component of the hackathon and provide a direct link to students and educators who are often the end-users of educational technology platforms.",
        sources: [
          { id: 7, label: "CodeVA", url: "https://codevirginia.org/" },
        ],
      },
      {
        organization: "RVA757 Connects",
        role: "Regional Partner",
        contact: "John W. Martin",
        title: "President & CEO",
        alignment: "Focus on megaregion connectivity/infrastructure.",
        extendedNotes: "This organization focuses on the convergence of the Richmond and Hampton Roads economies, emphasizing infrastructure and digital connectivity. President and CEO John W. Martin leads initiatives that span the I-64 innovation corridor. Partnering with RVA757 Connects would broaden the hackathon's scope to include regional governance challenges, appealing to sponsors like Dominion Energy and others with interests across the entire corridor.",
        sources: [
          { id: 8, label: "RVA757 Connects Board", url: "https://rva757connects.com/board" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Thriving Neighborhoods",
    focus: "Housing production, affordability, eviction prevention",
    pitchContext: {
      angle: "Smart Growth & Equitable Development",
      description: "Sponsors in this category include real estate data firms, construction companies, and engineering firms that benefit from a robust development environment. The Mayor's plan explicitly calls for building more homes for more people, preserving existing affordable housing, and ensuring neighborhoods are safe and amenity-rich. This pillar requires data-driven solutions to navigate zoning complexities, track housing inventory, and support tenant rights.",
    },
    corporateTargets: [
      {
        organization: "CoStar Group",
        tier: "$25k - $50k",
        contact: "Lisa Ruggles",
        title: "SVP, Global Operations",
        relevance: "Leader in real estate data; major local donor.",
        extendedNotes: "CoStar Group is a global leader in commercial real estate information and a dominant corporate presence in Richmond, with a massive research center in the city. They are heavily invested in the digitization of real estate data and have a history of significant philanthropic engagement, including an $18 million commitment to VCU for the CoStar Center for Arts and Innovation. Lisa Ruggles, Senior Vice President of Global Operations, has been a key figure in their community outreach, including the sponsorship of the \"Ultimate Backpack Drive\". A hackathon track focused on \"Housing Data Intelligence\"—creating tools to visualize housing stock, affordability gaps, or zoning density—would be a natural fit for CoStar's business interests and corporate values.",
        sources: [
          { id: 9, label: "CoStar Group", url: "https://www.costargroup.com/" },
          { id: 10, label: "CoStar $18M VCU Commitment", url: "https://www.support.vcu.edu/donors/giving-news/costar-group-announces-18m-commitment-to-vcu/" },
          { id: 11, label: "CoStar Backpack Drive", url: "https://www.costargroup.com/press-room/2022/costar-group-partners-richmond-public-schools-provide-school-supplies-50000" },
        ],
      },
      {
        organization: "Hourigan",
        tier: "$10k - $25k",
        contact: "Mark Hourigan",
        title: "CEO",
        relevance: "Integrated construction/dev firm with equity focus (BEAM).",
        extendedNotes: "Hourigan is a fully integrated construction and development firm that shapes the physical landscape of Richmond. Their \"Bolstering Equity, Access, and Mobility (BEAM)\" program demonstrates a commitment to diversity and inclusion within the built environment. Mark Hourigan (CEO) and Bryan Jones (who chairs the ChamberRVA Futures Committee) are influential figures deeply embedded in the city's growth conversations. Sponsoring this pillar aligns with their expertise in construction technology and their vested interest in urban infill and sustainable development projects.",
        sources: [
          { id: 12, label: "Hourigan BEAM", url: "https://www.hourigan.group/about/community-workforce-engagement/" },
          { id: 13, label: "ChamberRVA Committees", url: "https://www.chamberrva.com/committees/" },
          { id: 14, label: "Hourigan Development", url: "https://www.hourigan.group/expertise/services/development/" },
        ],
      },
      {
        organization: "Timmons Group",
        tier: "$5k - $15k",
        contact: "Tim Asimos",
        title: "Chief Marketing Officer",
        relevance: 'Engineering/Geospatial firm working on "Richmond Connects".',
        extendedNotes: "Timmons Group is an engineering and technology firm that is already actively partnering with the City of Richmond on the \"Richmond Connects\" initiative, using Esri ArcGIS technology to map equity factors and transportation needs. Their Traffic Safety & Analysis team has designed engineering drawings for high-priority projects, and they provide grant writing services to help the city secure funding. Tim Asimos, Chief Marketing Officer, or Bekah Kendrick, who has authored content on transportation equity, would be ideal contacts. Sponsorship of this pillar reinforces their role as the city's technical partner for infrastructure and equitable planning.",
        sources: [
          { id: 15, label: "Richmond Connects", url: "https://www.timmons.com/project/richmond-connects/" },
          { id: 16, label: "Transportation Equity", url: "https://www.timmons.com/2025/11/transportation-equity-repairing-the-past-building-the-future/" },
        ],
      },
      {
        organization: "Dodson Companies",
        tier: "$2.5k - $5k",
        contact: "Duke Dodson",
        title: "President",
        relevance: "Chair of Better Housing Coalition Mgmt Board.",
        extendedNotes: "Led by Duke Dodson, who serves as Chairman of the Better Housing Coalition's Management Board, Dodson Companies is a significant player in property management and development. Their direct involvement in the affordable housing ecosystem through board service makes them a highly \"warm\" lead. Duke Dodson's dual role as a business leader and a key governance figure for a major housing nonprofit creates a direct pathway for sponsorship that bridges the for-profit/nonprofit divide.",
        sources: [
          { id: 17, label: "BHC Management Board", url: "https://www.betterhousingcoalition.org/who-we-are/bhc-management-board/" },
          { id: 18, label: "RRHA", url: "https://www.rrha.com/redevelopment/rdc/" },
          { id: 19, label: "ChamberRVA Board", url: "https://www.chamberrva.com/board-of-directors/" },
        ],
      },
    ],
    nonprofitPartners: [
      {
        organization: "PHA",
        role: "Policy Partner",
        contact: "Jovan Burton",
        title: "Executive Director",
        alignment: "Lead on regional housing framework/data.",
        extendedNotes: "PHA is the lead organization responsible for the regional housing framework, providing the robust data and strategic planning needed to address housing shortages. Executive Director Jovan Burton sits on the Board of Directors for ChamberRVA, further integrating PHA into the business community. Their participation ensures that hackathon projects are grounded in verifiable data and aligned with regional housing goals.",
        sources: [
          { id: 19, label: "ChamberRVA Board", url: "https://www.chamberrva.com/board-of-directors/" },
        ],
      },
      {
        organization: "MWCLT",
        role: "Community Partner",
        contact: "Dr. Mae Worthey-Thomas",
        title: "CEO",
        alignment: "Permanently affordable housing model.",
        extendedNotes: "MWCLT creates permanently affordable homeownership opportunities by separating the ownership of land from the housing structure. They recently underwent a leadership transition, appointing Dr. Mae Worthey-Thomas as CEO in early 2025. They have successfully secured funding from Dominion Energy for their Homebuyer Support Program, indicating strong corporate backing. Partnering with MWCLT brings a focus on wealth creation for low-to-moderate-income residents.",
        sources: [
          { id: 20, label: "MWCLT", url: "https://maggiewalkerclt.org/" },
          { id: 21, label: "MWCLT Leadership Change", url: "https://m.richmondfreepress.com/news/2025/feb/13/maggie-walker-community-land-trust-announces-leadership-change/" },
          { id: 22, label: "Dominion Energy Grants", url: "https://investingnews.com/dominion-energy-charitable-foundation-awards-grants-to-388-nonprofits/" },
        ],
      },
      {
        organization: "HOME of VA",
        role: "Advocacy Partner",
        contact: "Tom Okuda Fitzpatrick",
        title: "Executive Director",
        alignment: "Fair housing enforcement and counseling.",
        extendedNotes: "HOME is dedicated to enforcing fair housing laws and providing counseling to first-time homebuyers and those facing foreclosure. Their staff includes specialized directors for enforcement and policy, such as Laura Dobbs (Director of Policy) and Brenda Hicks (Deputy Director of Counseling). Their involvement ensures that any housing tools developed during the hackathon adhere to fair housing principles and address systemic discrimination.",
        sources: [
          { id: 23, label: "HOME of VA Staff", url: "https://homeofva.org/who-we-are/staff-and-board/" },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Thriving Families",
    focus: "Education, youth programs, out-of-school time",
    pitchContext: {
      angle: "Investing in the Future Workforce & Holistic Family Wellness",
      description: "Sponsors in this space are often large employers concerned with workforce readiness and companies with products or services focused on the family unit. This pillar prioritizes the education, health, and development of children and families. The Mayor's vision includes ensuring all children graduate prepared for success and are connected to career opportunities. This creates a demand for EdTech solutions, resource navigation tools for parents, and systems that address food insecurity and early childhood development.",
    },
    corporateTargets: [
      {
        organization: "CarMax",
        tier: "$25k - $50k",
        contact: "Rosey Miller",
        title: "President, CarMax Foundation",
        relevance: "Massive youth/education funder.",
        extendedNotes: "CarMax is a titan of corporate philanthropy in Richmond, with a massive focus on youth and education. The CarMax Foundation has invested over $110 million in community causes and has explicitly partnered with organizations like NextUp RVA and the Henrico Education Foundation. Rosey Miller serves as the President of The CarMax Foundation, while Todd Dube, a Cloud Solutions Architect at CarMax, serves on the rvatech Foundation board. This combination of philanthropic leadership and technical expertise makes CarMax the ideal \"Anchor Sponsor\" for the Thriving Families track. A proposal could frame the challenge as \"Tech for the Next Generation,\" directly appealing to their dual identity as a tech-forward retailer and a champion for youth.",
        sources: [
          { id: 25, label: "CarMax Foundation", url: "https://www.grantmakers.io/profiles/v0/383681796-carmax-foundation/" },
          { id: 26, label: "rvatech Foundation", url: "https://rvatech.com/about/foundation/" },
        ],
      },
      {
        organization: "Owens & Minor",
        tier: "$10k - $20k",
        contact: "Tamara Thornton",
        title: "VP, Community Engagement",
        relevance: "Focus on healthcare/community vitality.",
        extendedNotes: "As a Fortune 500 healthcare logistics company, Owens & Minor focuses its charitable giving on health and community vitality. Their foundation recently awarded a $500,000 grant to the Ronald McDonald House, demonstrating a significant commitment to the well-being of children and families. Tamara Thornton, Vice President of Community Engagement, is the key decision-maker here. The sponsorship pitch should focus on \"Health Logistics for Families,\" exploring how technology can help families better navigate health resources or manage care for chronic conditions.",
        sources: [
          { id: 27, label: "Owens & Minor Foundation", url: "https://www.causeiq.com/organizations/owens-and-minor-foundation,862820089/" },
        ],
      },
      {
        organization: "Genworth",
        tier: "$10k - $20k",
        contact: "Genworth Foundation",
        title: "Admin / Program Officer",
        relevance: "Focus on healthy aging and caregivers.",
        extendedNotes: "Genworth's corporate social responsibility strategy focuses on healthy aging, caregiver support, and affordable housing. While \"families\" often implies children, Genworth provides a critical perspective on the whole family unit, including seniors and caregivers. They provide grants to organizations in Richmond and Lynchburg that align with these pillars. Engaging Genworth would support hackathon challenges related to multi-generational households and elder care, filling a crucial gap in the \"Thriving Families\" narrative.",
        sources: [
          { id: 28, label: "Genworth Grant Funding", url: "https://www.genworth.com/about-us/social-responsibility/genworth-foundation/grant-funding" },
        ],
      },
      {
        organization: "Estes Express",
        tier: "$5k - $15k",
        contact: "Rob Estes",
        title: "CEO",
        relevance: "Family-owned, employee-directed giving.",
        extendedNotes: "Estes is a major freight carrier with a \"family-inspired culture\" and an employee-directed giving campaign called \"Open Heart, Open Road,\" which allocates $500,000 annually to charities. Rob Estes serves on the board of the Science Museum of Virginia Foundation, indicating high-level engagement in educational institutions. Sponsorship here can be framed around \"delivering support\" to families, leveraging their brand identity as a logistics provider that cares for its community.",
        sources: [
          { id: 29, label: "Estes Express", url: "https://www.estes-express.com/about/" },
          { id: 30, label: "Science Museum of VA", url: "https://smv.org/documents/31/Annual_Report_2020.pdf" },
        ],
      },
    ],
    nonprofitPartners: [
      {
        organization: "NextUp RVA",
        role: "Youth Partner",
        contact: "Traymanesha Lamy",
        title: "President & CEO",
        alignment: "Coordinates afterschool programs.",
        extendedNotes: "NextUp RVA is the central coordinator for out-of-school time (OST) programs for Richmond middle schoolers. They use data to identify gaps in service and ensure quality. President & CEO Traymanesha Lamy leads the organization, which has a board filled with corporate heavyweights. Partnering with NextUp ensures that any \"youth access\" apps developed are integrated into an existing, robust system rather than fragmenting the landscape.",
        sources: [
          { id: 31, label: "NextUp RVA", url: "https://www.causeiq.com/organizations/nextup-rva,474933093/" },
          { id: 32, label: "NextUp RVA Team", url: "https://nextuprva.org/team/" },
        ],
      },
      {
        organization: "Robins Foundation",
        role: "Strategic Funder",
        contact: "Chris Chin",
        title: "President & CEO",
        alignment: "Laser focus on Early Childhood Education.",
        extendedNotes: "The Robins Foundation is a strategic funder that has prioritized Early Childhood Care and Education (ECCE) as a primary focus area. They actively solicit grant proposals for projects serving children ages 0-5 and have a dedicated program director, Meg Pienkowski. Chris Chin serves as President & CEO. Their involvement moves beyond simple partnership; they are potential funders of the winning prototypes, offering a sustainability path for projects focused on early childhood.",
        sources: [
          { id: 33, label: "Robins Foundation 2025 Grants", url: "https://robinsfdn.org/2025-grant-cycle-announcement/" },
        ],
      },
      {
        organization: "Peter Paul RVA",
        role: "Community Anchor",
        contact: "Corey Taylor",
        title: "Executive Director",
        alignment: "East End education/community center.",
        extendedNotes: "Located in the East End, Peter Paul RVA is an educational hub supporting students, families, and seniors. Executive Director Corey Taylor leads an organization that is deeply embedded in the community. They can serve as a \"user testing\" site, allowing developers to get real-time feedback from the families and students they aim to serve.",
        sources: [
          { id: 34, label: "Peter Paul RVA Staff", url: "https://www.peterpaulrva.org/staff" },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Thriving Economy",
    focus: "Workforce development, small business, economic mobility",
    pitchContext: {
      angle: "Inclusive Growth & Economic Mobility",
      description: "Financial institutions and major corporations with supplier diversity mandates are the primary targets here. This pillar focuses on economic inclusion, supporting small and minority-owned businesses, and creating pathways to wealth building. The Mayor's vision emphasizes an economy that works for everyone, necessitating tools that democratize access to capital, contracts, and business networks.",
    },
    corporateTargets: [
      {
        organization: "Capital One",
        tier: "$50k (Anchor)",
        contact: "Matt Briggs",
        title: "VP Product",
        relevance: "Massive focus on economic mobility/startups.",
        extendedNotes: "Capital One is the region's largest private employer and a dominant force in corporate philanthropy. Their \"Impact Initiative\" and $265 billion Community Benefits Plan are explicitly designed to close equity gaps and foster economic growth. They support the \"Entrepreneur Empowerment Program\" in collaboration with local accelerators. Matt Briggs, VP of Product, serves as the Board Chair of Startup Virginia, creating a direct link between the corporate giant and the entrepreneurial ecosystem. Capital One is the ideal \"Anchor Sponsor\" ($50k) for this track, capable of providing funding, mentors, and venue space.",
        sources: [
          { id: 35, label: "Capital One Community", url: "https://www.capitalone.com/about/community/" },
          { id: 36, label: "Culinary Entrepreneurs", url: "https://www.capitalone.com/about/our-commitments/empowering-culinary-entrepreneurs-in-richmond/" },
          { id: 37, label: "Startup Virginia", url: "https://startupvirginia.org/about/" },
          { id: 38, label: "Equal Access to Skills", url: "https://www.capitalone.com/about/our-commitments/meet-the-collaborators-behind-this-workforce-program/" },
        ],
      },
      {
        organization: "Atlantic Union Bank",
        tier: "$10k - $25k",
        contact: "Maria Tedesco",
        title: "President",
        relevance: "Strong CRA focus; ChamberRVA leadership.",
        extendedNotes: "As a major regional bank, Atlantic Union Bank has a strong commitment to community reinvestment and financial literacy. Maria Tedesco, President of the bank, serves as the Immediate Past Chair of ChamberRVA, highlighting her leadership role in the business community. Their sponsorship can be pitched around \"Financial Health,\" supporting tools that help unbanked residents or small business owners manage their finances and access capital.",
        sources: [
          { id: 19, label: "ChamberRVA Board", url: "https://www.chamberrva.com/board-of-directors/" },
        ],
      },
      {
        organization: "Altria Group",
        tier: "$25k - $50k",
        contact: "Jennifer Hunter",
        title: "SVP, Corp. Citizenship",
        relevance: "Major donor; nexus of RVA corporate giving.",
        extendedNotes: "Headquartered in Richmond, Altria is a philanthropic powerhouse, donating nearly $60 million annually. Jennifer Hunter, Senior VP of Corporate Citizenship, sits on the boards of both ChamberRVA and the Community Foundation, making her a nexus of influence. Altria's giving is heavily focused on community impact and economic vitality. Sponsoring this pillar aligns with their interest in maintaining a stable, prosperous region where their employees live and work.",
        sources: [
          { id: 39, label: "Altria Community Impact", url: "https://www.altria.com/people-and-careers/our-people-and-communities/community-impact-and-partnership" },
          { id: 40, label: "Jennifer Hunter Bio", url: "https://www.altria.com/about-altria/jennifer-hunter" },
        ],
      },
      {
        organization: "Performance Food Group",
        tier: "$10k - $20k",
        contact: "Scott Golden",
        title: "Leader, Community Engagement",
        relevance: "Fortune 500; supports restaurant ecosystem.",
        extendedNotes: "PFG is a Fortune 500 food distributor based in Richmond. While much of their giving focuses on hunger relief (Feeding America), they are deeply integrated into the restaurant economy. Scott Golden leads External Communications & Community Engagement. A hackathon challenge focused on \"Food Systems & Small Business Support\"—helping local restaurants and food entrepreneurs thrive—would be a unique and highly relevant angle for PFG.",
        sources: [
          { id: 41, label: "Performance Food Group", url: "https://www.pfgc.com/about" },
          { id: 42, label: "PFG ChamberRVA", url: "https://go.chamberrva.com/list/member/performance-food-group-company-8959" },
        ],
      },
    ],
    nonprofitPartners: [
      {
        organization: "Metropolitan Business League",
        role: "Business Partner",
        contact: "Floyd E. Miller II",
        title: "President & CEO",
        alignment: "Premier minority business association.",
        extendedNotes: "The MBL is the premier organization for minority business development in the region, with over 50 years of service. President & CEO Floyd E. Miller II leads the organization. Partnering with MBL is essential for credibility in the \"minority entrepreneurship\" space. They can connect hackers directly with business owners to solve real-world problems regarding procurement and access to capital.",
        sources: [
          { id: 43, label: "MBL Staff", url: "https://thembl.org/about-us/team" },
        ],
      },
      {
        organization: "Startup Virginia",
        role: "Ecosystem Partner",
        contact: "Richard Wintsch",
        title: "Executive Director",
        alignment: "High-growth incubator; tech hub.",
        extendedNotes: "Located at the 1717 Innovation Center, Startup Virginia is a high-growth business incubator that serves as a physical hub for the tech community. Executive Director Richard Wintsch serves on the Economic Inclusion committee for ChamberRVA. They can provide the venue, mentorship, and a direct pipeline to the investor community.",
        sources: [
          { id: 37, label: "Startup Virginia", url: "https://startupvirginia.org/about/" },
        ],
      },
      {
        organization: "ChamberRVA",
        role: "Network Partner",
        contact: "Brian Anderson",
        title: "President & CEO",
        alignment: "Regional business convener.",
        extendedNotes: "The regional chamber of commerce acts as a convener for the business community. President & CEO Brian Anderson can facilitate introductions to a vast network of potential users and sponsors. Their endorsement signals to the broader business community that the hackathon is a serious economic development initiative.",
        sources: [
          { id: 44, label: "ChamberRVA Team", url: "https://www.chamberrva.com/meet-our-team/" },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Inclusive Communities",
    focus: "Health equity, civil rights, community belonging",
    pitchContext: {
      angle: "DEI Commitment & Social Risk Reduction",
      description: "Sponsors for this pillar are companies with strong internal DEI (Diversity, Equity, and Inclusion) commitments and those in the insurance and banking sectors who view \"risk\" through a social lens. This pillar focuses on protecting the rights of all residents, specifically LGBTQ+ individuals, immigrants, and racial minorities, and addressing health inequities. Solutions here might include legal aid triage apps, multilingual resource navigators, or health equity dashboards.",
    },
    corporateTargets: [
      {
        organization: "Kinsale Capital",
        tier: "$10k - $25k",
        contact: "Kinsale Cares Committee",
        title: "Employee-led Program",
        relevance: "Employee-led giving; focus on safety net.",
        extendedNotes: "Kinsale is a rapidly growing specialty insurance company based in Richmond. Their \"Kinsale Cares\" program is employee-led and supports a wide range of human services nonprofits, including ChildSavers and Feed More. The company values operational efficiency and high margins, making them receptive to tech-driven solutions for social safety nets. Michael Kehoe (CEO) leads the company, but the Kinsale Cares Committee drives specific funding decisions.",
        sources: [
          { id: 45, label: "Kinsale Cares", url: "https://www.kinsaleins.com/about/kinsale-cares/" },
        ],
      },
      {
        organization: "Markel",
        tier: "$10k - $25k",
        contact: "Mary Allen Waller",
        title: "Director, Community Engagement",
        relevance: "Deep RVA roots; generous matching program.",
        extendedNotes: "Markel is a holding company with a celebrated \"legacy of giving\" and a strong commitment to education and community well-being. They offer a generous 3:1 matching gift program for employees. Mary Allen Waller, Global Director of Community Engagement, oversees their philanthropic strategy. Markel's corporate value of \"zeal\" aligns well with a hackathon track focused on inclusive education or expanding legal access for underserved populations.",
        sources: [
          { id: 46, label: "Markel Philanthropy", url: "https://www.markel.com/about-us/company-responsibility/philanthropy" },
          { id: 47, label: "Markel Scholarship", url: "https://www.markel.com/about-us/company-responsibility/markel-us-scholarship" },
        ],
      },
      {
        organization: "Bank of America",
        tier: "$10k - $25k",
        contact: "Victor Branch",
        title: "Market President",
        relevance: "Focus on racial equity/economic opportunity.",
        extendedNotes: "Bank of America has a highly visible commitment to racial equality and economic opportunity. Victor Branch, the Richmond Market President, is a ubiquitous figure in local philanthropy and serves on numerous boards, including the Virginia Museum of History & Culture. Pitching a \"Racial Equity & Inclusion\" track aligns directly with their corporate mandate to advance economic mobility in diverse communities.",
        sources: [
          { id: 48, label: "VMHC Leadership", url: "https://virginiahistory.org/our-leadership" },
        ],
      },
    ],
    nonprofitPartners: [
      {
        organization: "VCIC",
        role: "DEI Partner",
        contact: "Jonathan C. Zur",
        title: "President & CEO",
        alignment: "Expert in inclusion/bias reduction.",
        extendedNotes: "VCIC works with schools, businesses, and communities to achieve success through inclusion. President & CEO Jonathan C. Zur is a thought leader in the space. VCIC can serve as the \"DEI Partner\" for the event, ensuring that the hackathon environment itself is inclusive and that the solutions developed address bias and promote equity.",
        sources: [
          { id: 49, label: "VCIC Staff", url: "https://inclusiveva.org/about-vcic/staff/" },
        ],
      },
      {
        organization: "Health Brigade",
        role: "Health Partner",
        contact: "Karen Legato",
        title: "Executive Director",
        alignment: "Focus on LGBTQ+ health/underserved.",
        extendedNotes: "Formerly Fan Free Clinic, Health Brigade provides exceptional health services to those least served, with a focus on the LGBTQ+ community and HIV/AIDS care. Executive Director Karen Legato leads the organization. They are a critical partner for any challenge addressing health equity or LGBTQ+ specific resources.",
        sources: [
          { id: 50, label: "Health Brigade Staff", url: "https://www.healthbrigade.org/history/staff/" },
        ],
      },
      {
        organization: "ReEstablish Richmond",
        role: "Newcomer Partner",
        contact: "Kate Ayers",
        title: "Executive Director",
        alignment: "Supports refugee integration/resources.",
        extendedNotes: "This organization connects refugees and new immigrants to the resources needed to establish roots in the United States. Executive Director Kate Ayers leads the team. Partnering with ReEstablish Richmond opens up opportunities for \"Newcomer Tech\"—apps that help non-English speakers navigate city services, transportation, and schools.",
        sources: [
          { id: 51, label: "ReEstablish Fact Sheet", url: "https://reestablish-richmond.squarespace.com/s/Media-Fact-Sheet-2024-1.pdf" },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Thriving Environment",
    focus: "Climate action, green infrastructure, sustainability",
    pitchContext: {
      angle: "Sustainability Innovation & Resilient Infrastructure",
      description: "Utilities, engineering firms, and companies with heavy industrial footprints looking to green their image are the prime targets. This pillar targets net-zero greenhouse gas emissions, improved public transportation, and the greening of neglected neighborhoods. The City's focus on sustainability creates opportunities for tech solutions in carbon tracking, transit optimization, and environmental monitoring.",
    },
    corporateTargets: [
      {
        organization: "Dominion Energy",
        tier: "$50k (Title)",
        contact: "Hunter Applewhite",
        title: "President, Foundation",
        relevance: "Largest energy provider/environmental donor.",
        extendedNotes: "Dominion Energy is the dominant player in this space, with a charitable foundation that donates over $46 million annually, largely to environmental stewardship and community vitality. Hunter A. Applewhite serves as President of the Dominion Energy Charitable Foundation. Additionally, Paul Shanks, Manager of Digital Communications, serves on the VPAP Leadership Council, indicating an interest in civic data. Dominion is the natural title sponsor for a \"Net Zero Innovation\" track, using the event to crowd-source ideas for energy efficiency and community engagement around sustainability.",
        sources: [
          { id: 52, label: "Dominion Foundation Grants", url: "https://investors.dominionenergy.com/news/press-release-details/2025/Dominion-Energy-Charitable-Foundation-Awards-Grants-to-388-Nonprofits/default.aspx" },
          { id: 53, label: "Dominion Press Release", url: "https://www.businesswire.com/news/home/20251215156304/en/Dominion-Energy-Charitable-Foundation-Awards-Grants-to-388-Nonprofits" },
          { id: 54, label: "VPAP Leadership", url: "https://www.vpap.org/about-us/leadership/" },
        ],
      },
      {
        organization: "NewMarket Corp",
        tier: "$10k - $20k",
        contact: "Corp. Comms",
        title: "Corporate Communications",
        relevance: "Local HQ; supports education/quality of life.",
        extendedNotes: "Based in Richmond, NewMarket Corporation produces petroleum additives but maintains a foundation focused on education and quality of life. While their core business is industrial, they invest in the community to maintain a social license to operate. Contacting their Corporate Communications department with a pitch focused on STEM education applied to environmental challenges would be a strategic approach.",
        sources: [
          { id: 55, label: "NewMarket Responsibility", url: "https://www.newmarket.com/about-newmarket/our-commitment/" },
          { id: 56, label: "NewMarket Contact", url: "https://www.newmarket.com/contact-us/" },
        ],
      },
      {
        organization: "Veolia",
        tier: "$5k - $15k",
        contact: "Plant Manager",
        title: "Richmond Operation",
        relevance: 'Operates city wastewater; "GreenUp" strategy.',
        extendedNotes: "Veolia operates Richmond's wastewater treatment plant and manages its stormwater collection system. They recently completed a $40 million upgrade to the facility and are driven by a global \"GreenUp\" strategy for ecological transformation. Sponsoring a \"Water Quality & Sustainability\" challenge would allow them to showcase their localized impact and commitment to environmental compliance.",
        sources: [
          { id: 57, label: "Veolia Richmond", url: "https://www.richmond.veolianorthamerica.com/" },
        ],
      },
    ],
    nonprofitPartners: [
      {
        organization: "James River Association",
        role: "Environmental Partner",
        contact: "Bill Street",
        title: "President & CEO",
        alignment: "River health data and conservation.",
        extendedNotes: "JRA is the guardian of the James River, a central asset to Richmond's identity. President & CEO Bill Street leads the organization. They manage extensive water quality data and could partner on challenges involving river health monitoring or public access mapping.",
        sources: [
          { id: 58, label: "JRA Team", url: "https://thejamesriver.org/about-the-james-river-association/meet-our-team/" },
        ],
      },
      {
        organization: "Capital Trees",
        role: "Greening Partner",
        contact: "Shelly Barrick Parsons",
        title: "Executive Director",
        alignment: "Urban greening/heat island mitigation.",
        extendedNotes: "This nonprofit focuses on creating public green spaces to reduce urban heat islands and improve quality of life. Executive Director Shelly Barrick Parsons leads their efforts. They can provide data on tree canopy coverage and partner on challenges related to \"greening\" specific neighborhoods.",
        sources: [
          { id: 59, label: "Capital Trees Team", url: "https://capitaltrees.org/about-us/our-team/" },
        ],
      },
      {
        organization: "Alliance for the Chesapeake Bay",
        role: "Technical Partner",
        contact: "Jenny McGarvey",
        title: "VA State Director",
        alignment: "Green infrastructure/stormwater expert.",
        extendedNotes: "The Alliance works on green infrastructure and stormwater management. Jenny McGarvey, the Virginia State Director, is the key contact. They can offer technical expertise on stormwater challenges, a major issue for Richmond's aging infrastructure.",
        sources: [
          { id: 60, label: "Alliance Staff", url: "https://www.allianceforthebay.org/about/staff/" },
        ],
      },
    ],
  },
  {
    id: 7,
    name: "City Stories",
    focus: "Historical truth-telling, Shockoe Project, reconciliation",
    pitchContext: {
      angle: "Cultural Innovation & Brand Richmond",
      description: "Sponsors here include media companies, creative agencies, and organizations with a vested interest in the city's brand and tourism appeal. This pillar focuses on making Richmond a national model for honest history telling, leveraging arts and culture to bridge divides. The technology angle here is \"Digital Humanities\"—using AR/VR, digital archives, and interactive storytelling to bring history to life.",
    },
    corporateTargets: [
      {
        organization: "VPM",
        tier: "$15k - $30k",
        contact: "Jayme Swain",
        title: "President & CEO",
        relevance: "Public media; building new HQ; focus on history.",
        extendedNotes: "VPM is the region's public media organization, deeply invested in arts, culture, and history. They are currently constructing a new headquarters in downtown Richmond, set to open in 2026, which signals a major commitment to the city's center. President & CEO Jayme Swain is a media executive with a vision for digital transformation. VPM is the perfect title sponsor for a \"Digital Storytelling\" track, aligning with their mission to educate and inspire through media.",
        sources: [
          { id: 61, label: "YWCA Outstanding Women", url: "https://ywcarichmond.org/2025-class-of-outstanding-women-awards-honorees-2/" },
        ],
      },
      {
        organization: "The Martin Agency",
        tier: "$10k - $25k",
        contact: "Jaclyn Ruelle",
        title: "SVP, Cultural Impact Lab",
        relevance: "Creative powerhouse; experts in storytelling.",
        extendedNotes: "As a world-class advertising agency based in Richmond, Martin is known for \"impacting culture\". They have a dedicated \"Cultural Impact Lab\" led by Jaclyn Ruelle. A sponsorship from Martin could include in-kind creative services or mentorship on design thinking. The pitch should focus on using tech to tell Richmond's story to the world in a way that fights invisibility.",
        sources: [
          { id: 62, label: "Martin Agency Wikipedia", url: "https://en.wikipedia.org/wiki/The_Martin_Agency" },
          { id: 63, label: "Cultural Impact Lab", url: "https://www.martinagency.com/news/news/the-martin-agency-fuses-creative-and-media-with-cultural-impact-lab" },
        ],
      },
      {
        organization: "JMI",
        tier: "$2.5k - $5k",
        contact: "Kenneth Johnson",
        title: "CEO & Founder",
        relevance: "Multicultural branding/engagement agency.",
        extendedNotes: "JMI is a marketing and branding agency founded by Kenneth Johnson that connects brands, cultures, and communities. They excel at engagement strategies. Sponsoring this pillar would allow JMI to demonstrate their commitment to diverse storytelling and community branding.",
        sources: [
          { id: 64, label: "JMI Team", url: "https://www.wearejmi.com/team" },
        ],
      },
    ],
    nonprofitPartners: [
      {
        organization: "The Valentine",
        role: "Content Partner",
        contact: "William J. Martin",
        title: "Director",
        alignment: "Richmond history museum/archives.",
        extendedNotes: "The Valentine is the museum of the life and history of Richmond. Director William J. Martin has led the institution in challenging the city's historical narratives. They possess vast archives that could be digitized or gamified for the hackathon.",
        sources: [
          { id: 65, label: "Valentine Staff", url: "https://thevalentine.org/organization/staff/" },
        ],
      },
      {
        organization: "VMHC",
        role: "Education Partner",
        contact: "Jamie Bosket",
        title: "President & CEO",
        alignment: "State history/civics education focus.",
        extendedNotes: "The state history museum has a strong focus on civics education and preserving shared history. President & CEO Jamie Bosket has overseen significant renovations and re-branding. They can serve as an educational partner, providing context and content for historical tracks.",
        sources: [
          { id: 48, label: "VMHC Leadership", url: "https://virginiahistory.org/our-leadership" },
        ],
      },
      {
        organization: "Black History Museum",
        role: "Cultural Partner",
        contact: "Shakia Gullette Warren",
        title: "Executive Director",
        alignment: "African American history/culture.",
        extendedNotes: "This museum is dedicated to preserving the stories of African Americans in Virginia. Executive Director Shakia Gullette Warren leads the institution. Partnering with them ensures that the \"City Stories\" pillar centers the narratives of Black Richmonders, aligning with the Mayor's goal of telling the truth about the past.",
        sources: [
          { id: 66, label: "Shakia Gullette Warren", url: "https://blackmuseums.org/shakia-gullette-warren/" },
        ],
      },
    ],
  },
];

// =============================================================================
// CROSS-PILLAR FOUNDATIONS
// =============================================================================

export const crossPillarFoundations: CrossPillarFoundation[] = [
  {
    organization: "Community Foundation for a greater Richmond",
    focus: "Community vibrancy, economic prosperity, educational success",
    contact: "Sherrie Armstrong, President & CEO",
    contactStrategy: "Direct outreach; they manage donor-advised funds and could be a conduit for multiple individual donors.",
    sources: [
      { id: 67, label: "Community Foundation Grants", url: "https://www.cfrichmond.org/receive/nonprofits-foundations/community-impact-grants" },
    ],
  },
  {
    organization: "Bob & Anna Lou Schaberg Foundation",
    focus: "Housing, workforce development, stability for vulnerable populations",
    contact: "By invitation only",
    contactStrategy: "Access via warm introduction through the Funders Collaborative partners (e.g., Robins Foundation).",
    sources: [
      { id: 68, label: "Schaberg Foundation", url: "https://schaberg.foundation/eligibility-by-invitation-only/funding-priorities/" },
    ],
  },
  {
    organization: "Richmond Memorial Health Foundation",
    focus: "Health and racial equity",
    contact: "Mark Constantine, President & CEO",
    contactStrategy: 'They offer "Opportunity Investments" that could fund specific equity-focused tracks.',
    sources: [
      { id: 69, label: "RMHF Pandemic Response", url: "https://rmhfoundation.org/resource/silver-linings-how-the-pandemic-is-changing-the-role-of-philanthropy-in-richmond/" },
      { id: 70, label: "RMHF Grant Opportunities", url: "https://rmhfoundation.org/grants/grant-opportunities/" },
    ],
  },
];

// =============================================================================
// WARM CONNECTIONS (Key Influencers)
// =============================================================================

export const warmConnections: WarmConnection[] = [
  {
    name: "Jennifer Hunter",
    role: "SVP, Altria",
    network: "Board Chair, Community Foundation; Board, ChamberRVA; Board, Points of Light",
    strategy: "The nexus of corporate giving. Pitch the entire event to her as a community vibrancy initiative.",
  },
  {
    name: "Matt Briggs",
    role: "VP Product, Capital One",
    network: "Board Chair, Startup Virginia",
    strategy: 'Use him to unlock Capital One and the startup ecosystem. He understands the "tech + equity" value prop.',
  },
  {
    name: "Will Willis",
    role: "Director, Ippon Tech",
    network: "Board Chair, AI Ready RVA",
    strategy: 'The entry point for "Tech" specific sponsorships. Bridges corporate consulting and nonprofit tech literacy.',
  },
  {
    name: "Mitch Haddon",
    role: "CEO, ColonialWebb",
    network: "Chair, ChamberRVA (2025)",
    strategy: "As Chamber Chair, he can endorse the event to the broader business community.",
  },
  {
    name: "Richard Wintsch",
    role: "Exec. Dir, Startup VA",
    network: "Board, ChamberRVA (Economic Inclusion)",
    strategy: "Use him to validate the event to the startup/investor community.",
  },
  {
    name: "Judy Pahren",
    role: "Retired Capital One",
    network: "President, YWCA Richmond Board",
    strategy: "A powerful connector for women's leadership and the arts/culture pillars.",
  },
];

// =============================================================================
// IMPLEMENTATION TIMELINE
// =============================================================================

export const implementationTimeline = {
  phase1: {
    name: "Anchor Sponsors",
    deadline: "September 2025",
    targets: ["Capital One", "Dominion Energy"],
    description: "Secure anchor sponsors to validate the event and unlock mid-tier outreach.",
  },
  phase2: {
    name: "Mid-Tier Sponsors",
    deadline: "Q4 2025",
    targets: ["$5k - $15k tier sponsors across all pillars"],
    description: "Leverage anchor commitment to secure pillar-specific sponsors.",
  },
  phase3: {
    name: "Nonprofit Partners",
    deadline: "Q4 2025",
    targets: ["All 7 pillar nonprofit partners confirmed"],
    description: "No $ required—expertise and judging commitment only.",
  },
};

// =============================================================================
// SUMMARY STATS
// =============================================================================

export const sponsorshipStats = {
  totalCorporateTargets: pillarRecruitment.reduce((acc, p) => acc + p.corporateTargets.length, 0),
  totalNonprofitPartners: pillarRecruitment.reduce((acc, p) => acc + p.nonprofitPartners.length, 0),
  totalWarmConnections: warmConnections.length,
  totalCrossPillarFoundations: crossPillarFoundations.length,
  anchorTierTargets: pillarRecruitment
    .flatMap((p) => p.corporateTargets)
    .filter((t) => t.tier.includes("50k") || t.tier.includes("Anchor") || t.tier.includes("Title")).length,
  totalSources: 70,
};
