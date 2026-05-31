/*
  Project story content
  Keyed by slug. Merges with live Supabase data in ProjectDetail.
*/

const content = {

  'siriusxm-podcasts': {
    overview: "When SiriusXM acquired Pandora in 2019, two of the largest podcast catalogs in the world suddenly lived under the same roof — with no shared language, no shared infrastructure, and 100MM+ listeners caught in the middle. I led the product and design work to unify them.",
    problem: "Both platforms had evolved independently for years. SiriusXM's podcast catalog was editorial and curated; Pandora's was algorithmic and on-demand. Their taxonomies, metadata schemas, and listening experiences were fundamentally incompatible. Any path forward risked alienating one audience to serve the other.",
    solution: "I designed a shared content taxonomy and cross-platform design system that let both brands maintain their distinct identity while drawing from the same underlying architecture. The approach allowed SiriusXM to surface its premium shows within Pandora's recommendation engine and gave Pandora listeners access to SiriusXM exclusives — without either product losing what made it work.",
    impact: "Launched across 22 shows in the first rollout, the unified platform reached a combined 100MM+ listeners and laid the foundation for SiriusXM's ongoing podcasting strategy.",
  },

  'pandora': {
    overview: "Pandora defined what personalized music streaming could be — long before Spotify, long before playlists became the product. Working inside one of the most data-rich music products in the world, I contributed to the design and systems work that kept the experience alive for tens of millions of listeners.",
    problem: "A decade of product growth had accumulated design debt across every surface. The core listening experience — the station, the thumb, the discovery loop — was still beloved, but the surrounding UI had grown inconsistent, slow, and hard to maintain across platforms.",
    solution: "Contributed to the design system effort that brought consistency back to Pandora's interface, working across mobile and desktop to document patterns, resolve conflicts, and ship a more coherent experience. The work supported faster design and front-end iteration without touching what listeners already loved.",
    impact: "Part of a larger platform modernization that positioned Pandora to compete in an increasingly crowded streaming landscape while maintaining what made it irreplaceable for its most loyal users.",
  },

  'siriusxm-publish': {
    overview: "SiriusXM runs 130+ shows. Each one has producers, schedules, clips, metadata, promotional assets, and a publishing deadline. Before Publish existed, managing all of that meant wrestling with four separate legacy tools and a lot of spreadsheets.",
    problem: "Show producers were spending more time fighting their tools than making content. Episode scheduling, clip tagging, asset management, and distribution were siloed across disconnected systems with no single source of truth. Every publish was a manual coordination exercise across multiple tools and teams.",
    solution: "I led design and co-built a CMS purpose-built for audio production workflows. Rather than adapting a generic content tool, we designed around the actual shape of a show producer's day — intake, schedule, clip, publish. One dashboard for everything, with workflow states that matched how shows actually got made.",
    impact: "45 producers across 130 shows moved onto the platform, managing 5k+ episodes through a single workflow. Time-to-publish dropped measurably in the first quarter after launch.",
  },

  'alamo-china': {
    overview: "Alamo Rent-A-Car's global platform wasn't built for China — not technically, not culturally, not legally. I led the design and development of a ground-up localization that turned a foreign car rental brand into a trusted local presence across 16 Chinese cities.",
    problem: "Launching a car rental product in China isn't just a translation job. Payment infrastructure, address formats, regulatory requirements, ID verification, and UX conventions all differ fundamentally from Western defaults. A surface-level port of the global site would have failed on contact.",
    solution: "We built a fully localized site from the ground up: UnionPay payment integration, Chinese address and license validation, Mandarin copywriting by native speakers, and a UX framework based on local mobile patterns rather than Western conventions. The tech stack was also optimized for the Chinese internet — faster loads, fewer blocked resources.",
    impact: "Launched covering 16 cities and 34 vehicle categories. The site drew 150k+ visitors per month in year one.",
  },

  'nyc-secure': {
    overview: "In 2018, New York City launched its first municipal cybersecurity initiative — a free app to help 6MM+ citizens protect themselves online. I designed and co-built the platform that put it in their hands, on a timeline of one day from design to live.",
    problem: "NYC Cyber Command needed to communicate complex, consequential security guidance to a general public that didn't think of itself as a tech audience. The risk of being too technical was that nobody would listen. The risk of being too simple was that nobody would trust it. And the City needed it done fast.",
    solution: "We built a clean, plain-language app that translated security best practices — VPN usage, public wifi safety, software updates — into specific, actionable steps anyone could follow. The design was built to be trusted: no jargon, no alarm, just direct guidance from the City of New York. It launched citywide in a single day.",
    impact: "Featured in The New York Times upon launch. Served 8 NYC government stakeholders and made cybersecurity guidance accessible to 6MM+ citizens.",
  },

  'siriusxm-clips': {
    overview: "The best moments in radio disappear the moment they happen. SiriusXM Clips was built to change that — giving producers the tools to capture moments and listeners the ability to share them.",
    problem: "Live radio produces extraordinary content around the clock, but its ephemerality was a product liability. Producers couldn't easily surface highlights, listeners couldn't share what moved them, and SiriusXM had no social distribution layer for any of it. Great content was evaporating.",
    solution: "I led the design of a two-sided product: a clip creation and management dashboard for producers, and a shareable discovery UI for listeners. Producers could tag, trim, and publish moments directly from the broadcast timeline. Listeners got embeddable, social-ready clips they could share anywhere. The infrastructure connected live and on-demand content in a single experience.",
    impact: "5k+ moments were created in the first quarter. The platform covered 2k+ clips and 14k episodes, reaching 3MM+ listeners through social distribution.",
  },

  'spoke': {
    overview: "Spoke was built on a conviction: that great audio storytelling deserved a home built for it, not an algorithm built for something else. I co-designed and built the product for one of the earliest spoken-word streaming platforms, before the podcast boom made the idea obvious.",
    problem: "The podcast discovery problem wasn't a technology problem — it was a curation problem. Algorithmic platforms surfaced popular content but buried the kind of slow-burn, high-craft storytelling that defined audio at its best. Independent creators had no platform designed around their format.",
    solution: "We built a curator-led streaming product with 15 original editorial voices commissioning and programming shows across 29 countries. The discovery model was human-first — curators who trusted their audience, not engagement metrics. Original programming, transparent editorial, and a listener experience designed for focused listening.",
    impact: "Grew to 500k streams before the platform's pivot. Established a model for editorial streaming that influenced the direction of podcast discovery products that followed.",
  },

  'bml': {
    overview: "Big Mirror Labs was SiriusXM's internal product incubator — a 26-person team embedded inside one of the country's largest media companies, operating like a startup with enterprise resources. I ran product operations for the studio.",
    problem: "Fast-growing product teams scale headcount before they scale process. BML was shipping across 4 simultaneous product tracks with 18 engineers, 6 designers, and 2 data scientists — and the coordination cost was growing faster than the output. Decisions were getting lost, priorities were drifting, and quality was uneven.",
    solution: "I designed and implemented a lightweight product ops model — sprint rituals, design review cadences, cross-functional intake processes, and a shared definition of done. The system was built to be low-overhead: it gave the team enough structure to work in parallel without turning into a bureaucracy. I also led UX and front-end work on several of the studio's consumer products.",
    impact: "The studio shipped consistently across all 4 tracks. 18 engineers and 6 designers working in aligned sprint cycles without loss of velocity.",
  },

  'ralph-lauren': {
    overview: "Luxury brands are often reluctant to optimize — the fear is that good UX will feel too commercial. In three weeks, I redesigned Ralph Lauren's checkout flow and disproved that assumption.",
    problem: "Ralph Lauren's checkout was fragmented across too many steps, with an inconsistent mobile experience that was trailing desktop conversion by a wide margin. The gap was costing the brand measurable revenue every month, but a full redesign felt risky to a team cautious about moving too fast on a $10MM+/month revenue path.",
    solution: "I designed a streamlined checkout in 3 weeks: fewer steps, a single-page mobile experience, cleaner form states, and better error recovery — all within Ralph Lauren's design language. The key was proving that optimization and luxury weren't in tension. Faster checkout didn't mean cheaper brand; it meant a better brand promise kept.",
    impact: "Launched to full traffic within the engagement timeline. The redesign contributed measurable conversion improvement on a path processing $10MM+/month in revenue.",
  },

  'rwb': {
    overview: "Bimini is a 9-square-mile island in the Bahamas with 24+ world-class adventures and, until we built it, a website that couldn't show any of them. I designed and built the platform that turned Resorts World Bimini into a $2MM+ digital revenue channel.",
    problem: "Bimini had extraordinary experiences but a web presence that couldn't convey them. The island's limited connectivity meant that a visually rich site would time out before it could impress anyone. A performant site, on the other hand, risked looking cheap. The brief was both: beautiful and fast.",
    solution: "We built a heavily optimized editorial experience with lazy loading, aggressive image compression, and CDN-first delivery that made the site feel immediate even on island-grade connections. 24+ adventures were presented through immersive full-screen photography, structured into a clear navigation system. On the back end, a custom booking integration turned browsers into buyers.",
    impact: "$2MM+ in attributable revenue. 10MM+ visitors over the platform's life.",
  },

  'alamo-europe': {
    overview: "Alamo's European expansion required a localized digital presence that could serve 35 countries with the same quality customers expected at home. I built the platform that made it work.",
    problem: "A single car rental experience doesn't map onto 35 different countries cleanly. Pricing models, vehicle categories, pickup locations, regulatory language, and currency handling all vary by market — and the global platform's one-size approach was creating friction at every step.",
    solution: "Built a modular regional platform with market-level configuration for pricing, content, and regulatory requirements, all drawing from a shared component layer. The architecture let Alamo expand into new markets quickly while maintaining consistent UX across the continent.",
    impact: "35 countries served. 40+ vehicle categories. 200k+ monthly visitors in peak season.",
  },

  'enterprise-europe': {
    overview: "Enterprise Rent-A-Car's European expansion meant 20+ markets, 1MM+ monthly visitors, and a product that had to feel local everywhere. I led UX, UI, and front-end development for the platform launch.",
    problem: "Enterprise's European markets were each operating with fragmented digital experiences — some locally managed, some globally templated, none of them cohesive. Customers moving between markets encountered completely different sites, different flows, and different quality bars.",
    solution: "Designed and built a unified platform architecture that let each market maintain local content configuration while sharing a common design language, booking engine, and component library. The UX was research-led — we ran market-specific user testing in the UK, Germany, and France to ensure the experience felt native, not transplanted.",
    impact: "$5MM+ in attributable European revenue. 1MM+ monthly visitors across 20+ countries.",
  },

  'ncl-escape': {
    overview: "The Norwegian Escape was NCL's newest, largest ship — and nobody knew it existed yet. I designed and built the microsite that launched it, turning pre-voyage buzz into $400k+ in measurable bookings.",
    problem: "A new cruise ship needs an audience before it has one. Travel agents needed enough information to sell confidently. Consumers needed to feel the experience before they'd commit to booking. And NCL needed both groups converted before the inaugural voyage.",
    solution: "Built an immersive editorial microsite structured around the ship's 7 destinations and its on-board signature experiences — dining, entertainment, adventure. A separate travel agent portal provided booking resources and commission tools. The design was built to evoke the ship's scale: full-bleed photography, editorial layouts, a booking CTA at every scroll depth.",
    impact: "Gold Magellan Award winner (both consumer site and travel agent portal). $400k+ in attributable revenue. 5MM+ visitors pre-voyage.",
  },

  'toronto-escapes': {
    overview: "Toronto Escapes was the digital hub for Toronto's tourism and attractions ecosystem — 4 brands, 130+ attractions, and one platform to bring visitors to all of them. I led the strategy, development, and architecture.",
    problem: "Toronto's tourism brands were each operating independently with no shared digital presence. Visitors planning a trip had to navigate 4 different websites to understand what the city had to offer. Conversion was scattered across every touchpoint and impossible to measure holistically.",
    solution: "Built a unified platform that surfaced 130+ attractions across all 4 brands under a single discovery and booking experience. A shared itinerary builder let visitors plan their trip in one session. Attribution and analytics were centralized for the first time, giving the tourism board real data on what was driving visits.",
    impact: "120k+ monthly visitors. 4 brands, 130+ attractions in a unified experience.",
  },

  'miami-institute': {
    overview: "The MIAMI Institute needed a digital presence worthy of a 40,000 sqft medical facility staffed by 8 of the country's leading specialists. I designed and built it from scratch.",
    problem: "Medical providers often underestimate what their digital presence communicates to prospective patients. The MIAMI Institute had world-class outcomes and a premium facility — but a website that looked like neither. Patients doing their research were forming judgments before they ever made an appointment.",
    solution: "Designed a clean, credibility-first digital experience that centered physician expertise, patient outcomes, and facility quality. Clear procedure information, physician profiles, and a streamlined consultation request flow. Photography and typography choices that signaled precision and trust without sterility.",
    impact: "5k+ procedures supported through the platform. 40k+ sqft of facility represented through a cohesive digital experience.",
  },

  'aeromexico': {
    overview: "500,000 subscribers. One email. Six promotional slots. My job was to make every pixel earn its place in Aeroméxico's most-watched marketing channel.",
    problem: "Promotional emails in the airline industry tend toward the generic — packed with offers, short on story, and quickly ignored. Aeroméxico needed to stand out in inboxes flooded with competitors, while balancing 6 active promotional campaigns in a single send.",
    solution: "Designed and coded a modular email template system that let the Aeroméxico team configure 6 promotional blocks without sacrificing visual coherence. Each module was self-contained, A/B testable, and optimized for mobile rendering across every major client. The design language drew from Aeroméxico's brand colors and flight photography.",
    impact: "500k+ subscribers reached per send. Six promotional campaigns in a single cohesive send.",
  },

  'go-see-south-africa': {
    overview: "Go See South Africa was a destination marketing campaign for South African Airways — an editorial travel platform designed to make the country feel unmissable.",
    problem: "South Africa is an extraordinary destination with a marketing challenge: it competes with dozens of aspirational options for a traveler's attention. SAA needed a digital experience that moved beyond destination information into destination desire — something that made visitors feel they had to go.",
    solution: "Built an editorial travel platform organized around experiences rather than logistics — 40+ activities told through immersive photography and personal storytelling. The UX prioritized discovery and inspiration before conversion, matching how travelers actually make decisions about destinations they're unfamiliar with.",
    impact: "3MM+ visitors. 40+ activities showcased across a single editorial experience.",
  },

  'wmx': {
    overview: "WMX is building the next chapter of media commerce — a platform where content and transactions aren't separate flows but the same experience. I lead product and design, building from the ground up.",
    problem: "The gap between content consumption and purchase has always required a context switch — leave the story, find the product, complete the transaction, return to the story (if you return at all). Existing platforms treat this as unavoidable. WMX was started on the premise that it isn't.",
    solution: "Designing a platform where editorial content and transactional experiences coexist natively — not embedded links, but genuine product integration that enhances the content rather than interrupting it. The design system, product architecture, and go-to-market framework are all being built in parallel, from a clean slate.",
    impact: "Platform in active development. Product vision and design systems established.",
  },

  'dot-co': {
    overview: ".CO is the domain registry behind some of the world's most recognized short URLs — t.co, AngelList, and thousands of startups that chose .CO because it said something. I led product and design for the next chapter of the brand.",
    problem: ".CO had remarkable brand recognition it wasn't fully capitalizing on. Startups, creators, and companies chose .CO for its connotations — ambitious, modern, company — but the registry's own digital presence didn't reflect that positioning. The brand was underselling itself.",
    solution: "Redesigned the .CO brand experience and digital platform to position it as the definitive domain for people building something. Clear messaging, a streamlined registration experience, and a brand language borrowed from the startup culture that had made .CO credible in the first place.",
    impact: "Platform serving the domain behind hundreds of global brands. New brand and digital experience launched.",
  },

  '1sale': {
    overview: "1Sale was a flash-sale retailer that moved 100k+ deals through a single platform. I led product development for their mobile channel — the one that ended up generating most of the revenue.",
    problem: "Flash sales are won or lost on mobile. 1Sale's deals were time-sensitive by nature, and their audience increasingly discovered them on phones — but the mobile experience wasn't designed for conversion. Browse-to-buy drop-off was high, push notifications were untargeted, and the checkout flow had too many steps for an impulse purchase.",
    solution: "Designed and shipped a native iOS experience purpose-built for flash commerce: one-tap wishlist, deal alerts with countdown timers, a streamlined checkout with saved payment methods, and a browse experience optimized for quick scanning. The product was designed around the psychology of the deal — urgency, clarity, and frictionless conversion.",
    impact: "$160MM+ in annual revenue. 120MM+ visitors to the platform. Mobile became the primary conversion channel.",
  },

  'stableterm': {
    overview: "Stablecoins are growing fast. A unified API and terminal to work with them didn't exist — so we built one.",
    problem: "Stablecoin volume has grown by orders of magnitude, yet no single tool existed to query, monitor, and act on stablecoin data across chains without stitching together half a dozen APIs, custom scripts, and dashboards. The market was maturing faster than the tooling. Developers were left with raw RPC calls or no access at all.",
    solution: "I lead product and design for a platform that brings stablecoin data together in one place — a clean API layer over the fragmented on-chain reality, paired with a terminal interface built for the way operators actually work. The centerpiece is Peggy, an AI chatbot that lets users query the stablecoin API through natural language. Ask Peggy what USDC volume looked like last week on Base, or flag an anomaly in a wallet's USDT flow — no query syntax required. Peggy is powered by Quicknode.",
    impact: "Product in active development. API, terminal, and Peggy in build.",
  },

  'quicknode': {
    overview: "Quicknode is the infrastructure layer for the decentralized web — the platform builders rely on across 80+ chains and 130+ networks without managing nodes themselves. I led product ops and design for the platform's growth phase.",
    problem: "Web3 developer tooling in 2019 was technically capable but productively hostile. Documentation was sparse, dashboards were opaque, onboarding required expertise the platform was supposed to eliminate, and reliability was inconsistent. Quicknode was technically superior to competitors but wasn't winning on experience.",
    solution: "Led the redesign of the developer experience end to end — from the first sign-up flow through the daily dashboard to the API reference. Established a design system for consistent UI across all product surfaces, and a product ops framework that let the team prioritize the developer feedback loop over internal assumptions about what builders needed.",
    impact: "99.9% uptime across 80+ chains and 130+ networks. Quicknode became the default infrastructure choice for serious Web3 teams.",
  },

  'back-to-you': {
    overview: "Back to You Rehab & Therapy is a chiropractic and physical therapy group with five locations across Florida and Michigan. They came to me in 2024 with a website that wasn't keeping pace with their growth — and a clear vision for what it needed to become.",
    problem: "Five locations, two states, and a business actively opening new clinics — but a website built as if they were still a single-location practice. Content couldn't be managed independently per location, new openings required developer intervention, and the site wasn't reflecting the quality of care the team was delivering.",
    solution: "Before writing a line of code, I ran an in-person discovery workshop with the Florida team — mapping their growth plans, patient journey, and operational needs. What came out of it was a WordPress rebuild designed around location-first architecture: each clinic gets its own manageable presence, new locations can be added without a rebuild, and the content system puts the team in control of their own story.",
    impact: "A platform their growing team can own. Not just a site that looks better — one built to scale as they continue opening new locations.",
  },

  'apple': {
    overview: "Apple operates at a scale where product decisions aren't measured in users but in billions of moments. I contributed to program leadership and product operations across initiatives that touch the products people carry with them every day.",
    problem: "At Apple's scale, even small coordination inefficiencies compound across enormous teams. Product tracks working across hardware, software, and services need shared tooling, clear handoffs, and design standards that can hold across hundreds of contributors without requiring constant oversight.",
    solution: "Provided cross-functional program leadership and product operations support across design systems, developer tooling, and consumer-facing product tracks. The work was mostly invisible by design — the goal was to remove friction from teams doing extraordinary work, not to add process for its own sake.",
    impact: "1B+ users across 190+ countries. 100+ products across the ecosystem supported.",
  },

}

export default content
