/* Meridian Ledger: this page is a trusted operational instrument—ink, parchment, rust, and recurring inspection records. */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BellRing,
  Boxes,
  Check,
  ChevronDown,
  ClipboardCheck,
  Factory,
  Gauge,
  Globe2,
  Menu,
  MessageCircle,
  PackageCheck,
  QrCode,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { toast } from "sonner";

const HERO_IMAGE = "/manus-storage/counterfeitshield-hero_fe7543f8.png";
const LOGO_IMAGE = "/manus-storage/counterfeitshield-logo_d47bb5b0.png";

const products = {
  medicines: {
    eyebrow: "01 / Pharmaceuticals",
    title: "Protect the dose. Protect the name.",
    copy: "Serialize each unit, track authorized movement, and turn a suspicious pharmacy scan into a response your quality team can own.",
    icon: ShieldCheck,
    stat: "1 in 10",
    statCopy: "medicines in low- and middle-income countries are estimated to be substandard or falsified.",
    action: "See the medicine workflow",
  },
  parts: {
    eyebrow: "02 / Spare parts",
    title: "Keep safety-critical parts in the right hands.",
    copy: "Give distributors, garages, and installers a fast way to verify origin, reduce warranty leakage, and surface unauthorized channels.",
    icon: PackageCheck,
    stat: "1 scan",
    statCopy: "can connect a part to its manufacturer, authorized channel, warranty, and field history.",
    action: "Explore parts protection",
  },
  liquor: {
    eyebrow: "03 / Liquor",
    title: "Make every seal tell the truth.",
    copy: "Pair tamper-evident packaging with outlet-level verification to expose refills, diverted stock, and imitation product before it reaches the glass.",
    icon: BadgeCheck,
    stat: "3 signals",
    statCopy: "— identity, route, and scan behavior — turn a bottle into an accountable product.",
    action: "Explore bottle verification",
  },
} as const;

type ProductKey = keyof typeof products;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<ProductKey>("medicines");
  const [formSent, setFormSent] = useState(false);
  const [email, setEmail] = useState("");

  const product = products[activeProduct];
  const ProductIcon = product.icon;

  function handlePilotSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setFormSent(true);
    toast.success("Brief received", {
      description: "We’ll follow up with a practical pilot conversation.",
    });
  }

  return (
    <div className="site-shell">
      <div className="utility-bar">
        <div className="container utility-inner">
          <span className="utility-dot" />
          <span>Product identity for the real distribution chain</span>
          <span className="utility-separator">/</span>
          <span>Built for Africa’s manufacturers &amp; distributors</span>
          <a href="#pilot" className="utility-link">Start a pilot <ArrowRight size={13} /></a>
        </div>
      </div>

      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <div className="container header-inner">
          <a href="#top" className="brand-lockup" aria-label="CounterfeitShield Africa home">
            <span className="brand-mark"><img src={LOGO_IMAGE} alt="" /></span>
            <span className="brand-name">CounterfeitShield <b>Africa</b></span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#platform">Platform</a>
            <a href="#sectors">Sectors</a>
            <a href="#method">How it works</a>
            <a href="#pilot">For manufacturers</a>
          </nav>

          <div className="header-actions">
            <button className="text-button" onClick={() => scrollToId("pilot")}>Talk to us <ArrowUpRightIcon /></button>
            <button className="mobile-menu-button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
            <a href="#sectors" onClick={() => setMenuOpen(false)}>Sectors</a>
            <a href="#method" onClick={() => setMenuOpen(false)}>How it works</a>
            <a href="#pilot" onClick={() => setMenuOpen(false)}>For manufacturers</a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow light-eyebrow"><span className="eyebrow-rule" /> CounterfeitShield / intelligence layer 01</div>
              <h1>Make every<br /><em>unit</em> accountable.</h1>
              <p className="hero-lede">The product-authentication layer for African manufacturers and distributors who cannot afford to lose trust in the channel.</p>
              <div className="hero-actions">
                <button className="button button-rust" onClick={() => scrollToId("pilot")}>Build your pilot <ArrowRight size={17} /></button>
                <button className="button button-ghost" onClick={() => scrollToId("platform")}>See the platform <ArrowDownRight size={17} /></button>
              </div>
              <div className="hero-note"><span className="tiny-seal">CS / 01</span><span>Secure identity · route visibility · response</span></div>
            </div>

            <div className="hero-visual-wrap">
              <div className="hero-serial">FIELD RECORD <span>AF / 0047</span></div>
              <div className="hero-visual">
                <img src={HERO_IMAGE} alt="Inspection desk with a sealed medicine carton, spare part, and spirits bottle" />
                <div className="hero-visual-stamp"><span className="stamp-ring">CS</span><span>VERIFIED<br />OR FLAGGED</span></div>
                <div className="hero-visual-caption"><span>Live product signal</span><strong>01 — 04</strong></div>
              </div>
              <div className="hero-side-note"><span className="vertical-label">ORIGIN → DESTINATION</span><span className="route-line" /></div>
            </div>
          </div>
          <div className="hero-bottom container">
            <div className="hero-proof"><span className="proof-index">/ 00</span><span>What changes when the label becomes evidence?</span></div>
            <div className="hero-proof-answer">You see the signal <span>before</span> it becomes a recall.</div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span className="trust-label">A practical layer between</span>
            <div className="trust-items"><span><Factory size={16} /> Manufacturer</span><ArrowRight size={15} /><span><Truck size={16} /> Distributor</span><ArrowRight size={15} /><span><Boxes size={16} /> Retailer</span><ArrowRight size={15} /><span><ShieldCheck size={16} /> Consumer</span></div>
          </div>
        </section>

        <section id="platform" className="platform-section section-pad">
          <div className="container">
            <div className="record-marker"><span className="seal-mini">CS / 01</span><span>Evidence dossier / 02</span><span className="record-fill" /><span>Manufacturer → channel</span></div>
            <div className="section-intro split-intro">
              <div>
                <div className="eyebrow"><span className="eyebrow-rule" /> The platform</div>
                <h2>Not another<br /><em>scan app.</em></h2>
              </div>
              <div className="intro-aside">
                <p>CounterfeitShield connects the physical package to the distribution reality around it—so manufacturers can prove origin, distributors can prove custody, and consumers can make a safer choice.</p>
                <a href="#method" className="inline-link">Follow the chain <ArrowDownRight size={15} /></a>
              </div>
            </div>

            <div className="platform-grid">
              <div className="platform-rail">
                <span className="rail-label">System / 04 layers</span>
                <div className="rail-line" />
                <span className="rail-label rail-bottom">Evidence<br />over noise</span>
              </div>
              <div className="layer-stack">
                <article className="layer-card layer-card-dark">
                  <div className="layer-index">01</div><div className="layer-icon"><QrCode size={22} /></div>
                  <div><h3>Secure identity</h3><p>Give every unit, case, or bottle a unique identity that is hard to copy and easy to verify.</p></div>
                  <span className="layer-arrow"><ArrowUpRightIcon /></span>
                </article>
                <article className="layer-card">
                  <div className="layer-index">02</div><div className="layer-icon"><Truck size={22} /></div>
                  <div><h3>Trace movement</h3><p>Record authorized handoffs from the production line through the channel—without expensive hardware.</p></div>
                  <span className="layer-arrow"><ArrowUpRightIcon /></span>
                </article>
                <article className="layer-card layer-card-offset">
                  <div className="layer-index">03</div><div className="layer-icon"><ScanLine size={22} /></div>
                  <div><h3>Catch anomalies</h3><p>Flag copied codes, impossible travel, unusual scan volumes, and stock in the wrong place.</p></div>
                  <span className="layer-arrow"><ArrowUpRightIcon /></span>
                </article>
                <article className="layer-card layer-card-rust">
                  <div className="layer-index">04</div><div className="layer-icon"><BellRing size={22} /></div>
                  <div><h3>Act fast</h3><p>Turn a suspicious scan into a case your quality, compliance, and field teams can work.</p></div>
                  <span className="layer-arrow"><ArrowUpRightIcon /></span>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section id="sectors" className="sector-section section-pad">
          <div className="container">
            <div className="sector-topline"><div className="eyebrow"><span className="eyebrow-rule" /> Designed for high-risk categories</div><span className="sector-count">03 / sectors</span></div>
            <div className="sector-heading-row"><h2>One platform.<br /><em>Three realities.</em></h2><p>Different products carry different risks. The trust layer stays consistent; the workflow adapts to the category.</p></div>
            <div className="sector-tabs" role="tablist" aria-label="Product sectors">
              {(Object.keys(products) as ProductKey[]).map((key, index) => <button key={key} role="tab" aria-selected={activeProduct === key} className={`sector-tab ${activeProduct === key ? "active" : ""}`} onClick={() => setActiveProduct(key)}><span>0{index + 1}</span>{key === "medicines" ? "Medicines" : key === "parts" ? "Spare parts" : "Liquor"}<ArrowRight size={16} /></button>)}
            </div>
            <div className="sector-feature">
              <div className="sector-feature-copy">
                <div className="eyebrow rust-eyebrow"><span className="eyebrow-rule" /> {product.eyebrow}</div>
                <ProductIcon size={32} strokeWidth={1.3} className="sector-icon" />
                <h3>{product.title}</h3><p>{product.copy}</p>
                <button className="text-button rust-text" onClick={() => toast.info("Sector workflow", { description: "A tailored deployment playbook is prepared during your pilot assessment." })}>{product.action} <ArrowRight size={16} /></button>
              </div>
              <div className="sector-feature-art">
                {activeProduct === "medicines" ? <InspectionArtifact /> : activeProduct === "parts" ? <RouteArtifact compact /> : <BottleArtifact />}
                <div className="sector-stat"><strong>{product.stat}</strong><span>{product.statCopy}</span></div>
                <div className="sector-code">CS-{activeProduct === "medicines" ? "RX" : activeProduct === "parts" ? "SP" : "LK"}-0047</div>
              </div>
            </div>
          </div>
        </section>

        <section id="method" className="method-section section-pad">
          <div className="container method-grid">
            <div className="method-visual">
              <div className="method-kicker">The chain of evidence</div>
              <RouteArtifact />
              <div className="method-visual-footer"><span>Origin is a record.</span><span>Movement is a signal.</span><span>Action is the moat.</span></div>
            </div>
            <div className="method-copy">
              <div className="eyebrow light-eyebrow"><span className="eyebrow-rule" /> How it works</div>
              <h2>Trust is not a claim.<br /><em>It is a chain.</em></h2>
              <p>From a serialized pack at the production line to a verification request at the point of sale, every touchpoint becomes useful context.</p>
              <div className="steps">
                <div className="step"><span>01</span><div><strong>Issue</strong><p>Create the authorized identity at the source.</p></div></div>
                <div className="step"><span>02</span><div><strong>Move</strong><p>Scan handoffs as inventory travels.</p></div></div>
                <div className="step"><span>03</span><div><strong>Verify</strong><p>Check on web, WhatsApp, USSD, or SMS.</p></div></div>
                <div className="step"><span>04</span><div><strong>Respond</strong><p>Quarantine, investigate, and close the loop.</p></div></div>
              </div>
              <button className="button button-rust" onClick={() => scrollToId("pilot")}>Map your chain <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="reality-section section-pad">
          <div className="container">
            <div className="reality-header"><div><div className="eyebrow"><span className="eyebrow-rule" /> Evidence dossier / 03</div><span className="stamp-caption"><span className="seal-mini">CS / 01</span> The operating standard</span></div><h2>Practical by<br /><em>default.</em></h2></div>
            <div className="reality-grid">
              <article className="reality-card"><span className="reality-number">01</span><MessageCircle size={26} /><h3>Works on basic phones</h3><p>Verification through USSD, SMS, WhatsApp, or a lightweight mobile page. No new app habit required.</p><a href="#pilot">See the access layer <ArrowRight size={15} /></a></article>
              <article className="reality-card reality-card-dark"><span className="reality-number">02</span><Gauge size={26} /><h3>Made for operators</h3><p>Fast receiving scans, clear statuses, and workflows that fit the warehouse, pharmacy, garage, or outlet.</p><a href="#pilot">See the operator view <ArrowRight size={15} /></a></article>
              <article className="reality-card"><span className="reality-number">03</span><ClipboardCheck size={26} /><h3>Evidence, not noise</h3><p>Alerts arrive with context: product, place, time, channel, and the next action your team should take.</p><a href="#pilot">See the response layer <ArrowRight size={15} /></a></article>
            </div>
          </div>
        </section>

        <section className="pilot-section section-pad" id="pilot">
          <div className="container pilot-grid">
            <div className="pilot-copy"><div className="eyebrow light-eyebrow"><span className="eyebrow-rule" /> Start with one product</div><h2>Find the signal<br /><em>in 90 days.</em></h2><p>Bring one product, one authorized distributor, and one real channel problem. We’ll help you turn it into a measurable pilot.</p><div className="pilot-meta"><span><Check size={14} /> 1 country</span><span><Check size={14} /> 1 product</span><span><Check size={14} /> 1 accountable team</span></div></div>
            <div className="pilot-form-wrap"><div className="form-record"><span>FIELD BRIEF / 01</span><span>CONFIDENTIAL</span></div>{formSent ? <div className="form-success"><div className="success-seal"><Check size={28} /></div><h3>Your brief is in.</h3><p>We’ll follow up with a practical conversation about product, channel, and pilot scope.</p><button className="button button-paper" onClick={() => { setFormSent(false); setEmail(""); }}>Send another brief <ArrowRight size={16} /></button></div> : <form onSubmit={handlePilotSubmit}><label htmlFor="work-email">Work email</label><div className="input-row"><input id="work-email" type="email" required placeholder="you@company.com" value={email} onChange={(event) => setEmail(event.target.value)} /><button className="button button-rust" type="submit">Request a pilot <ArrowRight size={16} /></button></div><small>No decks. No generic demo. Just a first conversation about the risk you already see.</small></form>}</div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-top"><a href="#top" className="brand-lockup footer-brand"><span className="brand-mark"><img src={LOGO_IMAGE} alt="" /></span><span className="brand-name">CounterfeitShield <b>Africa</b></span></a><div className="footer-statement">Make every unit<br /><em>accountable.</em></div><div className="footer-nav"><a href="#platform">Platform</a><a href="#sectors">Sectors</a><a href="#method">How it works</a><a href="#pilot">Start a pilot</a></div></div><div className="container footer-bottom"><span>© 2026 CounterfeitShield Africa</span><span>Product identity · route visibility · response</span><a href="https://www.who.int/news-room/fact-sheets/detail/substandard-and-falsified-medical-products" target="_blank" rel="noreferrer">Read the WHO context <ArrowUpRightIcon /></a></div></footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowUpRight size={15} />;
}

function InspectionArtifact() {
  return (
    <div className="inspection-artifact" aria-label="Inspection artifact showing a serialized pack record">
      <div className="artifact-grid" />
      <div className="inspection-pack"><div className="pack-fold" /><span className="pack-label">AUTHENTICITY<br /><b>RECORD</b></span><span className="pack-serial">CS-RX-0047</span><span className="pack-barcode" /></div>
      <div className="inspection-loupe"><span /></div>
      <div className="artifact-stamp"><span>CS</span><small>CHECKED<br />AT SOURCE</small></div>
      <div className="artifact-metadata"><span>Lot / 19A</span><span>Origin / verified</span><span>State / sealed</span></div>
    </div>
  );
}

function RouteArtifact({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`route-artifact ${compact ? "route-artifact-compact" : ""}`} aria-label="Supply chain route record">
      <div className="route-backdrop" />
      <div className="route-header"><span>ROUTE RECORD</span><b>AF / 0047</b></div>
      <div className="route-track"><span className="route-path route-path-one" /><span className="route-path route-path-two" /><span className="route-node node-factory"><Factory size={18} /></span><span className="route-node node-warehouse"><Boxes size={18} /></span><span className="route-node node-retail"><PackageCheck size={18} /></span><span className="route-node node-consumer"><ShieldCheck size={18} /></span><span className="route-alert">!</span></div>
      <div className="route-labels"><span><b>01</b> issued</span><span><b>02</b> received</span><span><b>03</b> verified</span><span><b>04</b> resolved</span></div>
    </div>
  );
}

function BottleArtifact() {
  return (
    <div className="bottle-artifact" aria-label="Bottle seal verification record">
      <div className="bottle-desk-line" />
      <div className="bottle-shape"><span className="bottle-neck" /><span className="bottle-cap">CS</span><span className="bottle-label"><small>AUTHENTIC</small><b>SEAL</b><em>LK / 0047</em></span></div>
      <div className="bottle-status"><span className="status-dot" /> Closure intact <b>verified</b></div>
      <div className="bottle-serial">SERIAL / CS-LK-0047</div>
    </div>
  );
}
