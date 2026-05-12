# PRODUCT.md — Ruchika Tekkeveetil

## Register
**brand** — marketing site. Design IS the product. The site has to make a BC business owner feel they have found a credible, independent advisor for the most consequential transaction of their working life.

## Product Purpose
A personal-practice website for Ruchika Tekkeveetil, an independent business broker and licensed realtor in British Columbia. The site exists to:
1. Convert sellers and buyers of BC small/mid-market businesses into a free first consultation.
2. Establish credibility against larger brokerages (Pinson, Sunbelt, Wave) and against the realtor-doing-business-brokerage-as-a-sideline pattern.
3. Handle four service lines under one engagement: sell a business, buy a business, formal business valuation, commercial real estate tied to the transaction.

## Users
**Primary — Sellers.** BC owner-operators, typically 50–70 years old, who built a business over 10–30 years and are starting to think about exit. Revenue range roughly $500K–$25M. Industries: healthcare/professional services, manufacturing, logistics, trades, hospitality. They sell a business once in their life and the stakes are existential. They've usually been referred by an accountant, a lawyer, or another business owner. They are *not* design-literate; they are skepticism-literate. They can smell a volume brokerage from the parking lot.

**Secondary — Buyers.** First-time acquirers (often immigrants, mid-career switchers, family-office adjacents) and experienced operators looking for their next platform. They're searching listings, NDAs, and brokers; the site needs to look like a real brokerage they can transact through.

**Tertiary — Referrers.** CPAs, business lawyers, lenders, and past clients who send referrals. The site needs to be something they can forward without a wince.

## Brand & Tone
- **Independent, not boutique.** "Boutique" reads as luxury affectation. The pitch is: one person, small caseload, direct involvement on every file, no associate hand-offs.
- **Credibility through restraint.** The reference set the user sent (Jason Roberson, B&B Contracting, G5 Industries, Hotel Renovation BC, Firetech Mfg, Swissdent, PAFA) is uniformly sans-serif, plain trust signals, navy/gray/white, photo-forward, zero ornament.
- **Tone: plain, factual, professional.** "Helping BC business owners sell, buy, and value what they've built." Not "Where Business Meets Its Next Chapter."
- **Anti-tone:** wedding-planner luxury, italic flourishes, monogram lockups, poetic headlines, cream-and-gold, custom-cursor "look at how much craft I put in" energy.

## Anti-references
Things this site must NOT look like:
- **Luxury wedding/jewelry editorial** — Cormorant Garamond, gold accents, cream backgrounds, italic emphasis. The previous version of this site fell into this trap; the user explicitly rejected it.
- **AI-glossy SaaS landing** — gradient backgrounds, glassmorphism cards, hero-metric template (big number / small label / supporting stats), identical-card grids, animated count-ups on every stat.
- **Volume brokerage corporate** — stock photo of handshakes, sterile blue gradients, no name on the homepage, "Our Team" of 40 photos.
- **Realtor-personal-brand** — house photo backgrounds, "Your trusted realtor" tagline, bright real-estate-yellow accents, big agent face overlaid on a sold sign.

## Strategic principles
- **Photo of Ruchika is the hero element**, not the typography. (Currently a placeholder slot — Ruchika to provide.)
- **Plain English headlines.** No metaphors. No "next chapter." No "where X meets Y."
- **Real trust signals beat decorative ones.** Brokerage affiliation, RECBC/BCFSA licence numbers, BCREA membership, named client testimonials with industry + region — these belong above the fold of credibility. NOT "Boutique Advisory · Measurable Results."
- **One person, one engagement.** Every page should feel like a single advisor's practice, not an agency.
- **BC-specific.** Mention Lower Mainland, Okanagan, Vancouver Island by name. Local credibility is the moat against national volume brokerages.

## Constraints & known gaps
- Static HTML/CSS/JS site (no CMS, no build pipeline).
- Five pages: `index.html`, `selling.html`, `buying.html`, `intake.html`, `brand-guide.html`.
- Homepage was just refactored toward the Jason Roberson direction; inner pages still use the old luxury-editorial inline styles and need a follow-up turn to match.
- Awaiting from Ruchika before launch: real headshot, real testimonials (3+), brokerage affiliation, licence numbers, verified stats, hero CTA destination (Calendly vs intake.html vs tel:).
- Deployed via GitHub Pages from the `main` branch of the `ruchika-proposal` repo. Domain: TBD (currently `ruchika.github.io/ruchika-proposal` or similar).
