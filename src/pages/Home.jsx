import { useState } from 'react'
import { Link } from 'react-router-dom'

const STATS = [
  { n: '3', suffix: '+', label: 'Countries served' },
  { n: '7', suffix: '',  label: 'Industries served' },
  { n: '100', suffix: '%', label: 'Client retention' },
  { n: '35', suffix: '+', label: 'Yrs. aggregate experience' },
]

const PILLARS = [
  { n: '01', t: 'Precision', d: 'Defensible, audit-ready records that stakeholders trust. Every figure traces to a source.' },
  { n: '02', t: 'Strategic', d: 'We translate numbers into decisions, not just reports. Forward-looking by default.' },
  { n: '03', t: 'Scalable',  d: 'Finance systems designed to grow with your complexity, from seed to public markets.' },
]

const DIFFERENTIATORS = [
  { n: '01', name: 'Evidence-Backed Reporting', desc: "Every figure in our clients' financials traces to a source document. Nothing is unsubstantiated, nothing is implied — only what can be defended in a board room or a deal room." },
  { n: '02', name: 'Chartered Discipline, CFO Perspective', desc: 'Every engagement is filtered through a forward-looking analytical lens. The deliverable is financial insight your leadership can act on — not a backwards-facing compliance file.' },
  { n: '03', name: 'Adaptable and Tech-Forward', desc: 'Early adopters of AI-integrated workflows and process automation. Every engagement is built around your contextual data and the systems your team already runs on.' },
  { n: '04', name: 'Structured Readiness Framework', desc: 'We measure financial infrastructure health through a structured readiness framework — a clear, quantified view of where things stand and what the next quarter requires.' },
]

const SERVICES = [
  {
    title: 'Fractional CFO & Strategic Finance',
    desc: 'Senior finance leadership without the full-time hire. Board reporting, scenario models, and support through a raise.',
    bullets: ['Board & investor reporting', 'Cash flow & scenario modeling', 'Capital raise support', 'KPI & operating dashboards'],
    icon: <svg viewBox="0 0 44 44" fill="none"><path d="M8 38V14l14-8 14 8v24" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M16 38V26h12v12" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="1.6"/><path d="M29.5 32l2 2 3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    title: 'Bookkeeping & Financial Operations',
    desc: 'Books closed on schedule, reconciled, and documented well enough to hand straight to an auditor.',
    bullets: ['Month-end close & reconciliations', 'Chart of accounts design', 'Audit-ready workpapers', 'AP / AR workflows'],
    icon: <svg viewBox="0 0 44 44" fill="none"><rect x="6" y="6" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="24" y="6" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="6" y="24" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6"/><rect x="24" y="24" width="14" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.6"/></svg>,
  },
  {
    title: 'Advisory & Special Projects',
    desc: 'Work that sits outside the monthly cycle. Transactions, distressed files, and deadlines that cannot move.',
    bullets: ['Receivership & restructuring', 'M&A diligence support', 'Historical reconstruction', 'Public-market preparation'],
    icon: <svg viewBox="0 0 44 44" fill="none"><path d="M6 34L16 22l8 8 6-8 8-12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><circle cx="36" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6"/><path d="M4 40h36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>,
  },
]

const PROCESS = [
  { n: '01', title: 'Discovery',   desc: 'We go through the business, the financial history, and what you need the numbers to do. We also ask who else sees the reporting, because that usually changes how we build it.', deliverables: ['Stakeholder interviews', 'Business context memo', 'Engagement priorities'], icon: <><circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.8"/><path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
  { n: '02', title: 'Diagnostic',  desc: 'A structured review of the books, the controls, and the records, with a readiness score at the end. You get the written report either way.', deliverables: ['Financial Clarity Report', 'Readiness score (0–100)', 'Prioritized action plan'], icon: <><rect x="4" y="4" width="16" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8"/><path d="M8 9h8M8 13h6M8 17h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
  { n: '03', title: 'Scoping',     desc: 'We agree the scope, set up the systems, fix the chart of accounts, and put a reporting calendar in place. It is easier to configure this correctly now than to change it later.', deliverables: ['Engagement charter', 'COA & systems alignment', 'Reporting calendar'], icon: <><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></> },
  { n: '04', title: 'Execution',   desc: 'Monthly close, reconciliations, and statements, on the date we agreed, with the workpapers sitting behind them.', deliverables: ['Monthly close package', 'Source-traced workpapers', 'Variance commentary'], icon: <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/> },
  { n: '05', title: 'Intelligence', desc: 'Management reporting and forecasts built for the decisions you actually have to make. This is where the books start paying for themselves.', deliverables: ['Board / investor pack', 'Operating dashboards', 'Forecast & scenarios'], icon: <path d="M4 17L9 12l5 5 3-4 3-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/> },
]

const CASES = [
  { tag: 'Manufacturing', stat: '99%', suffix: '', statLabel: 'Books reconciled and source-traced', client: 'Distressed beverage manufacturer', text: 'Rebuilt the financials for a court-appointed receivership. Clean books, a COGS framework, and an inventory position the receiver could work from, inside six weeks.' },
  { tag: 'Technology, Media & Telecom', stat: '5,500', suffix: '+', statLabel: 'Transactions reconstructed for diligence', client: 'TMT platform, public-market readiness', text: 'Led finance readiness for a TMT platform going to public markets. We normalised the reporting, reconciled the balance sheet, and built workpapers that came through diligence without a restatement.' },
  { tag: 'Aviation', stat: 'On time', suffix: '', statLabel: 'DOT regulatory deadline met', client: 'Post Chapter 11 commercial airline', text: 'Built the accounting infrastructure for a post-Chapter 11 airline against a hard DOT deadline. We worked alongside their aviation counsel and certified on schedule.' },
]

export default function Home() {
  const [active, setActive] = useState(0)
  const step = PROCESS[active]

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__glow" />
        <div className="container">
          <div className="hero__inner">
            <div>
              <span className="eyebrow eyebrow--light fade-up fade-up-1">Global · CFO Advisory · Built to institutional grade</span>
              <h1 className="hero__title fade-up fade-up-2">
                Your Financial<br /><em>Command Centre</em>
              </h1>
              <p className="hero__sub fade-up fade-up-3">
                Nexus North delivers CFO-level strategy, rigorous financial operations, and hands-on advisory for high-growth companies that can&apos;t afford to get the numbers wrong.
              </p>
              <div className="hero__actions fade-up fade-up-4">
                <Link to="/contact" className="btn btn--primary">Book a Free Discovery Call <span className="arrow">→</span></Link>
                <Link to="/case-studies" className="btn btn--ghost-light">See our work</Link>
              </div>
            </div>
            <div className="hero__meta fade-up fade-up-5">
              <div className="hero__meta-item">
                <div className="hero__meta-label">Headquartered</div>
                <div className="hero__meta-value">Toronto<em> · serving clients globally</em></div>
              </div>
              <div className="hero__meta-item">
                <div className="hero__meta-label">How we partner</div>
                <div className="hero__meta-value"><em>Scoped to your situation</em></div>
              </div>
              <div className="hero__meta-item">
                <div className="hero__meta-label">Trusted by</div>
                <div className="hero__meta-value">Receivers, family offices, PE &amp; VC-backed companies</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero__stats">
          <div className="container">
            <div className="hero__stats-grid">
              {STATS.map(s => (
                <div key={s.label} className="hero__stat">
                  <div className="hero__stat-n">{s.n}<sup>{s.suffix}</sup></div>
                  <div className="hero__stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="section pos">
        <div className="container">
          <div className="pos__grid">
            <div>
              <span className="eyebrow">What we do differently</span>
              <h2 className="h-section pos__title">CFO-level thinking<br /><em>Operator-level execution</em></h2>
              <p className="lede pos__lede">
                Most accounting firms give you compliance. We give you clarity — accurate books, decision-ready reporting, and a finance partner who understands what is actually at stake when the numbers go in front of a board, a lender, or a court.
              </p>
              <div className="pillars">
                {PILLARS.map(p => (
                  <div key={p.n} className="pillar">
                    <div className="pillar__num">{p.n}<sup>/ 03</sup></div>
                    <div>
                      <div className="pillar__title">{p.t}</div>
                      <p className="pillar__desc">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn btn--ghost" style={{ marginTop: 44 }}>About Nexus North <span className="arrow">→</span></Link>
            </div>
            <aside className="fcr">
              <span className="fcr__eyebrow">Financial Clarity Report</span>
              <h3 className="fcr__title">Not sure where your books stand</h3>
              <p className="fcr__lede">A fixed-fee, two-week engagement that gives you a complete picture of your financial health — gaps, risks, and a prioritized action plan, scored against our readiness framework.</p>
              <ul className="fcr__list">
                {['Bank & reconciliation review','Balance sheet integrity check','P&L accuracy assessment','Readiness score & priority action plan'].map(item => (
                  <li key={item}><span className="check">✓</span>{item}</li>
                ))}
              </ul>
              <div className="fcr__price">
                <span className="fcr__price-n">2 weeks</span>
                <span className="fcr__price-l">/ fixed fee · scoped on first call</span>
              </div>
              <Link to="/contact" className="btn btn--primary btn--block">Enquire about the report <span className="arrow">→</span></Link>
            </aside>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="section diff">
        <div className="container">
          <div className="diff__head">
            <div>
              <span className="eyebrow">Why Nexus North</span>
              <h2 className="h-section diff__title">How we&apos;re different</h2>
            </div>
            <p className="diff__intro">Four operating principles run through every Nexus North engagement — from a two-week diagnostic to a multi-year fractional-CFO partnership. They are what makes our work hold up in a board room, in due diligence, and in transactions.</p>
          </div>
          <div className="diff__list">
            {DIFFERENTIATORS.map(d => (
              <div key={d.n} className="diff__row">
                <div className="diff__num">{d.n}</div>
                <div className="diff__name">{d.name}</div>
                <p className="diff__desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section svc">
        <div className="container">
          <div className="svc__head">
            <div>
              <span className="eyebrow">Our services</span>
              <h2 className="h-section">The full financial stack<br /><em>without the full-time hire</em></h2>
            </div>
            <p className="svc__intro">A Financial Command Centre, run with an operator&apos;s mentality. Diligent books, decision-ready reporting, and senior judgement on the calls that matter — assembled around your business and only the work you actually need.</p>
          </div>
          <div className="svc__grid">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="svc__card">
                <div className="svc__index">{String(i+1).padStart(2,'0')} · Service</div>
                <div className="svc__icon">{s.icon}</div>
                <h3 className="svc__name">{s.title}</h3>
                <p className="svc__desc">{s.desc}</p>
                <ul className="svc__bullets">{s.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                <Link to="/services" className="svc__link">See details <span className="arrow">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section proc">
        <div className="proc__bg" /><div className="proc__glow" />
        <div className="container">
          <div className="proc__head">
            <div>
              <span className="eyebrow">How we work</span>
              <h2 className="h-section h-section--light">From first call<br /><em>to your monthly financial engine</em></h2>
            </div>
            <p className="proc__intro">Five steps. Each one has a deliverable, a hand-off, and a named owner on our side. Click any step for the detail.</p>
          </div>
          <div className="proc__steps">
            <div className="proc__track" />
            {PROCESS.map((p, i) => (
              <button key={p.n} className={`proc__step${active === i ? ' proc__step--active' : ''}`} onClick={() => setActive(i)}>
                <div className="proc__circle"><svg viewBox="0 0 24 24" fill="none">{p.icon}</svg></div>
                <div className="proc__num">{p.n} / 05</div>
                <div className="proc__name">{p.title}</div>
              </button>
            ))}
          </div>
          <div className="proc__detail">
            <div className="proc__detail-num">{step.n}</div>
            <div className="proc__detail-body">
              <h3 className="proc__detail-title">{step.title}</h3>
              <p className="proc__detail-desc">{step.desc}</p>
              <div className="proc__deliverables">
                <div className="proc__deliverables-label">Deliverables</div>
                {step.deliverables.map(d => <div key={d} className="proc__deliverable">{d}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section cases">
        <div className="container">
          <div className="cases__head">
            <div>
              <span className="eyebrow">Proven results</span>
              <h2 className="h-section">We&apos;ve done this before</h2>
            </div>
            <p className="cases__intro">Receivership stabilisations, public-market readiness, and filings against regulatory deadlines. The receivers, lenders, and counsel we work with tend to call us again, which is the part we pay attention to.</p>
          </div>
          <div className="cases__grid">
            {CASES.map(c => (
              <article key={c.tag} className="case">
                <span className="case__tag">{c.tag}</span>
                <div className="case__stat">{c.stat}{c.suffix && <sup style={{fontSize:'0.5em',verticalAlign:'super'}}>{c.suffix}</sup>}</div>
                <span className="case__stat-l">{c.statLabel}</span>
                <div className="case__client">{c.client}</div>
                <p className="case__desc">{c.text}</p>
                <Link to="/case-studies" className="case__link">Read full case <span className="arrow">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__bg" /><div className="cta__glow" />
        <div className="container">
          <div className="cta__inner">
            <div>
              <span className="eyebrow eyebrow--light">Let&apos;s talk</span>
              <h2 className="cta__title" style={{marginTop:22, fontSize:'clamp(28px, 3.2vw, 46px)'}}>Get the numbers right<br /><em>Smart decisions will follow</em></h2>
              <p className="cta__sub">Every engagement starts with a free 30-minute discovery call. No obligation — just a structured conversation about where your finance function is, and where it needs to be.</p>
            </div>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Book a Discovery Call <span className="arrow">→</span></Link>
              <div className="cta__direct">or write to <a href="mailto:support@nexusnorth.ca">support@nexusnorth.ca</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
