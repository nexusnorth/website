import { Link } from 'react-router-dom'

const CASES_LONG = [
  {
    n: '01', industry: 'Manufacturing',
    tag: 'Receivership · Financial Reconstruction',
    client: 'U.S. beverage manufacturer',
    role: 'Court-appointed receiver', horizon: '6-week stabilization',
    outcomeStat: '99%', outcomeShort: 'Books rebuilt, source-traced, audit-ready',
    challenge: 'No cost accounting. No reliable margins. Bookkeeping that could not support a single operating decision the receiver needed to make.',
    solution: 'QuickBooks rebuilt from zero. GAAP-aligned chart of accounts. A full COGS framework tying production, packaging, freight and overhead to unit economics. SKU rationalization, reorder points and pricing decisions to free working capital.',
    results: ['99% of books reconciled and source-document traced', 'Unit-economics visibility, by SKU and by customer with differentiating freights', 'Inventory strategy and invoice factoring management that freed working capital', 'Defensible reporting for the receiver'],
  },
  {
    n: '02', industry: 'Technology, Media & Telecom',
    tag: 'Public-Market Readiness · Finance Clean-Up',
    client: 'TMT services & staffing platform',
    role: 'Finance readiness lead', horizon: 'Pre-transaction',
    outcomeStat: '5,500+', outcomeShort: 'Transactions reconstructed for diligence',
    challenge: 'A growing TMT platform heading to public markets. Close discipline was loose. Statements were not diligence-grade. Supporting schedules would not have survived a buyer.',
    solution: 'Historical reporting normalized. Balance sheet reconciled, account by account. A repeatable monthly close with named owners. Investor-grade workpapers and transaction analyses aligned with external reporting.',
    results: ['5,500+ transactions reconstructed', 'Monthly close on schedule, with named owners', 'Investor-grade workpapers, diligence-tested', 'Reduced execution risk on the transaction'],
  },
  {
    n: '03', industry: 'Investment Management',
    tag: 'Family Office · Multi-Entity Reporting',
    client: 'Multi-asset family office',
    role: 'Retained finance partner', horizon: 'Multi-year mandate',
    outcomeStat: 'Multi-entity', outcomeShort: 'Entities on a single reporting cadence',
    challenge: 'Multiple investment vehicles across private and public holdings. Reporting was fragmented. Tax and accounting were uncoordinated. Portfolio oversight was reactive.',
    solution: 'Entity-level reporting consolidated and standardized. Tax inputs coordinated across providers. Capital activity, intercompany flows and investor allocations tracked end-to-end.',
    results: ['A single reporting cadence across all entities', 'Coordinated tax workflow across providers', 'Institutional operating discipline', 'Proactive portfolio oversight'],
  },
  {
    n: '04', industry: 'Technology',
    tag: 'Insolvency · Acquisition Advisory',
    client: 'Tech business acquired out of insolvency',
    role: 'Advisor to the acquiring creditor', horizon: 'Diligence to day-one playbook',
    outcomeStat: 'Day 1', outcomeShort: 'Day-one operating discipline, from close',
    challenge: 'A creditor acquiring a tech business out of insolvency. Rapid diligence required. Operating controls had to be in place from the close date.',
    solution: 'Transaction analysis and a day-one relaunch roadmap: operating model, core processes, near-term financial controls. Cash and reporting controls live from close.',
    results: ['Day-one controls live from close', 'Structured transition with clear accountability', 'Growth framework the operator could run from', 'Positioned for successful market reentry'],
  },
]

export default function CaseStudies() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero__bg" /><div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Nexus North</Link>
            <span className="page-hero__crumb-sep" />
            <span>Case Studies</span>
          </div>
          <div className="page-hero__inner" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <span className="eyebrow eyebrow--light">Proven results</span>
              <h1 className="page-hero__title">
                Real Complexity,<br />
                <em>Real Outcomes</em>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* INDEX TABLE */}
      <section className="cs-page">
        <div className="container">
          <div className="cs-index">
            <div className="cs-index__head">
              <div>#</div>
              <div>Industry</div>
              <div>Client &amp; mandate</div>
              <div>Outcome</div>
              <div></div>
            </div>
            {CASES_LONG.map(c => (
              <a key={c.n} href={`#case-${c.n}`} className="cs-index__row">
                <div className="cs-index__num">{c.n}</div>
                <div className="cs-index__industry">{c.industry}</div>
                <div className="cs-index__client">
                  {c.client}<br />
                  <span className="cs-index__client-tag">{c.tag}</span>
                </div>
                <div className="cs-index__outcome">
                  <strong>{c.outcomeStat}</strong>
                  {c.outcomeShort}
                </div>
                <div className="cs-index__chev">→</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CASE DETAILS */}
      <section className="cs-page">
        <div className="container">
          {CASES_LONG.map(c => (
            <div key={c.n} id={`case-${c.n}`} className="csd">
              <div className="csd__head">
                <div className="csd__num">{c.n}</div>
                <div>
                  <span className="csd__tag">{c.industry}</span>
                  <h2 className="csd__title">{c.client}</h2>
                </div>
                <div className="csd__topline">
                  <div className="csd__topline-label">Engagement details</div>
                  <div className="csd__topline-value">{c.role}</div>
                  <div className="csd__topline-value csd__topline-value--sub">{c.horizon}</div>
                </div>
              </div>
              <div className="csd__body">
                <div className="csd__col">
                  <span className="csd__col-label">Challenge</span>
                  <p>{c.challenge}</p>
                </div>
                <div className="csd__col">
                  <span className="csd__col-label">What we did</span>
                  <p>{c.solution}</p>
                </div>
                <div className="csd__col">
                  <span className="csd__col-label">Results</span>
                  <ul className="csd__results">
                    {c.results.map(r => <li key={r}>{r}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="cta__bg" /><div className="cta__glow" />
        <div className="container">
          <div className="cta__inner">
            <div>
              <span className="eyebrow eyebrow--light">Your situation</span>
              <h2 className="cta__title" style={{ marginTop: 22 }}>
                Bring us the file<br />
                <em>that has to hold up</em>
              </h2>
              <p className="cta__sub">Every engagement starts with a 30-minute call, free. Tell us what is happening and we will tell you what it would take.</p>
            </div>
            <div className="cta__actions">
              <Link to="/contact" className="btn btn--primary">Schedule a Discovery Call <span className="arrow">→</span></Link>
              <div className="cta__direct">or write to <a href="mailto:support@nexusnorth.ca">support@nexusnorth.ca</a></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
