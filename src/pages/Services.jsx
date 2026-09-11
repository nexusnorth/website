import { Link } from 'react-router-dom'

const SERVICES_LONG = [
  { n: '01', tag: 'Strategic Finance', title: 'Fractional CFO & Strategic Finance', intro: 'Senior finance leadership at a fraction of the cost of a full-time CFO. We work on the strategy, the board reporting, and the calls that are coming up. Every engagement is scoped to your stage and to who else is reading the numbers.', items: ['Financial strategy & planning','Board-ready reporting & investor packages','Fundraising & investor relations','Cash flow forecasting & management','Strategic scenario modelling','M&A and transaction advisory'] },
  { n: '02', tag: 'Financial Operations', title: 'Bookkeeping & Financial Operations', intro: 'The books close on schedule and every figure traces back to a source. This is the foundation everything else on this page depends on.', items: ['Day-to-day bookkeeping','Accounts payable & receivable','Monthly close & reconciliation','Financial statement preparation','Multi-entity accounting','Inter-company complex accounting'] },
  { n: '03', tag: 'Special Projects', title: 'Advisory & Special Projects', intro: 'Support for the situations that fall outside the monthly cycle: receivership, due diligence, historical reconstruction, and deadlines that cannot move.', items: ['Due diligence support','Historical reconstruction','System implementation & migration','Financial process improvement','Audit preparation','Break-even and Variance analyses'] },
]

const FCR_DELIVERABLES = [
  { n: '01', name: 'Bank & reconciliation review', desc: 'We walk every account, flag the variances, and explain any balance that will not reconcile.' },
  { n: '02', name: 'Balance sheet integrity check', desc: 'Asset, liability, and equity positions tested for accuracy and source-traceability.' },
  { n: '03', name: 'P&L accuracy assessment', desc: 'Revenue recognition, expense classification, and margin analysis benchmarked against your business.' },
  { n: '04', name: 'Controls & policy review', desc: 'How the books are kept, who has access, where the risk sits, and what tightening it up would involve.' },
  { n: '05', name: 'Readiness score (0–100)', desc: 'A quantified view of where your finance function sits, scored against our readiness framework.' },
  { n: '06', name: 'Priority action plan', desc: 'The next 90 days in order: what to fix first, what can wait, and what the finished state looks like.' },
]

const ENGAGEMENT_STEPS = [
  { n: '01', t: 'Discovery',  d: 'A focused conversation about your business, your financial history, and what you need your numbers to do.' },
  { n: '02', t: 'Assessment', d: 'We review your current financial setup, identify the gaps, and quantify them against our readiness framework.' },
  { n: '03', t: 'Proposal',   d: 'Deliverables, timelines, and price in writing. Fixed fee or retainer, whichever fits the work.' },
  { n: '04', t: 'Execution',  d: 'We get to work. You get regular updates and a clear hand-off on every deliverable.' },
]

export default function Services() {
  return (
    <main>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero__bg" /><div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Nexus North</Link>
            <span className="page-hero__crumb-sep" />
            <span>Services</span>
          </div>
          <div className="page-hero__inner">
            <div>
              <span className="eyebrow eyebrow--light">Our Services</span>
              <h1 className="page-hero__title" style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(36px, 4.2vw, 64px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}>
                Full financial stack,<br />
                <em style={{ fontFamily: 'var(--sans)', fontStyle: 'italic' }}>around your business</em>
              </h1>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICE ROWS */}
      <section className="svc-page">
        <div className="container">
          {SERVICES_LONG.map(s => (
            <article key={s.n} className="svc-row">
              <div className="svc-row__num">{s.n}<sup>/ 03</sup></div>
              <div className="svc-row__body">
                <span className="svc-row__tag">{s.tag}</span>
                <h2 className="svc-row__name">{s.title}</h2>
                <p className="svc-row__intro">{s.intro}</p>
                <Link to="/contact" className="svc-row__link">Discuss this engagement <span className="arrow">→</span></Link>
              </div>
              <div className="svc-row__capabilities">
                <ul className="svc-row__list">
                  <li className="svc-row__list-label">What&apos;s included</li>
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FINANCIAL CLARITY REPORT */}
      <section className="fcr-feature">
        <div className="fcr-feature__bg" /><div className="fcr-feature__glow" />
        <div className="container">
          <div className="fcr-feature__head">
            <div>
              <span className="eyebrow eyebrow--light">Financial Clarity Report</span>
              <h2 className="fcr-feature__title">Where most engagements start<br /><em>a two-week diagnostic</em></h2>
            </div>
            <p className="fcr-feature__intro">Two weeks, fixed fee. You get a written report on where the finance function actually stands: the gaps, the risks, the controls, and what to fix first, scored against our readiness framework.</p>
          </div>
          <div className="fcr-feature__body">
            <div className="fcr-feature__price">
              <span className="fcr-feature__price-n">2<em style={{fontSize:'0.65em'}}> weeks</em></span>
              <span className="fcr-feature__price-l">Industry based, fixed fee, scoped on the first call.</span>
              <div className="fcr-feature__meta">
                <div className="fcr-feature__meta-item"><div className="fcr-feature__meta-label">Format</div><div className="fcr-feature__meta-value">2-week agile review</div></div>
                <div className="fcr-feature__meta-item"><div className="fcr-feature__meta-label">Delivered to</div><div className="fcr-feature__meta-value">CEO, CFO, board, or receiver</div></div>
                <div className="fcr-feature__meta-item"><div className="fcr-feature__meta-label">Output</div><div className="fcr-feature__meta-value">Written report with strategic recommendations</div></div>
              </div>
            </div>
            <ul className="fcr-feature__deliverables">
              <li className="fcr-feature__deliverables-label">What you receive</li>
              {FCR_DELIVERABLES.map(d => (
                <li key={d.n} className="fcr-feature__deliverable">
                  <span className="fcr-feature__deliverable-n">{d.n}</span>
                  <div className="fcr-feature__deliverable-body">
                    <div className="fcr-feature__deliverable-name">{d.name}</div>
                    <div className="fcr-feature__deliverable-desc">{d.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="fcr-feature__cta-row">
            <p className="fcr-feature__cta-note"><strong>Not sure if you need the full diagnostic?</strong> A 30-minute discovery call is enough for us to tell you, honestly, whether the Financial Clarity Report is the right starting point.</p>
            <Link to="/contact" className="btn btn--primary">Enquire about the report <span className="arrow">→</span></Link>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT STEPS */}
      <section className="section eng">
        <div className="container">
          <div className="eng__head">
            <div>
              <span className="eyebrow">Our process</span>
              <h2 className="h-section">How an engagement<br /><em>actually starts</em></h2>
            </div>
            <p className="eng__intro">Four steps from the first email to the first deliverable. You see the scope, the timeline, and the price before any work starts.</p>
          </div>
          <div className="eng__steps">
            {ENGAGEMENT_STEPS.map(s => (
              <div key={s.n} className="eng__step">
                <div className="eng__step-num">{s.n}</div>
                <div className="eng__step-name">{s.t}</div>
                <p className="eng__step-desc">{s.d}</p>
              </div>
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
              <h2 className="cta__title" style={{marginTop:22, fontSize:'clamp(28px, 3.2vw, 46px)'}}>Not sure which engagement fits?<br /><em>Start with a discovery call</em></h2>
              <p className="cta__sub">Book a free 30-minute discovery call. We will tell you, honestly, which service maps to your situation.</p>
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
