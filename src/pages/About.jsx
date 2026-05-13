import { Link } from 'react-router-dom'

const TIMELINE = [
  {
    year: '2024',
    label: 'Origin',
    chapter: 'Inside a family office',
    body: 'The team that became Nexus North was assembled inside a multi-asset family office to manage books across the group and its portfolio companies. The remit was simple: institutional-grade reporting, end to end, with no room for slippage.'
  },
  {
    year: 'Jan 2025',
    label: 'Independence',
    chapter: 'Spun out as Nexus North',
    body: 'After delivering the discipline the family office had been missing, the team was given the freedom to commercialize the work. Nexus North launched as a standalone advisory in January 2025, keeping the same operating standard and applying it for outside clients.'
  },
  {
    year: 'Today',
    label: 'Where we are',
    chapter: 'Seven industries. One operating standard.',
    body: 'Manufacturing, technology, aviation, investment management, telecom, healthcare, and high-growth founders. A team of ten, tech-forward, with full client retention. The standard has not moved.'
  },
]

const PRINCIPLES = [
  {
    n: '01',
    name: 'Precision is the floor',
    desc: 'Every figure traces to a source document. Audit-ready by default — not as an upgrade. The institutional discipline we built inside a family office is the operating floor of every engagement.'
  },
  {
    n: '02',
    name: 'Strategic, not transactional',
    desc: 'We close the books, then we read them. Which means we interpret what the numbers mean for the next decision, the next quarter, the next round, not the last one. Every reporting cycle ends with a forward-looking view your leadership can act on.'
  },
  {
    n: '03',
    name: 'Tech-forward, by default',
    desc: 'Early adopters of AI-integrated workflows and process automation. Reporting infrastructure is built around your data and your stack, not retrofitted onto a generic template. Process design is part of the deliverable, not an afterthought.'
  },
  {
    n: '04',
    name: 'Structured Readiness Framework',
    desc: 'We measure financial infrastructure health through a structured readiness framework, scoring across reporting, controls, close discipline, and decision-readiness. Every engagement produces a clear, quantified view of where things stand and what the next quarter requires.'
  },
]

const LEADERSHIP = [
  {
    name: 'Siddharth Dave',
    initials: 'SD',
    role: 'Founder & Operating CEO',
    bio: 'Founded Nexus North after building the institutional finance function inside a multi-asset family office. Leads firm strategy and every client engagement. Hands-on across financial reconstruction, transaction advisory, and CFO-level infrastructure.',
    creds: ['Financial Reconstruction', 'Transaction Advisory', 'CFO Advisory'],
  },
  {
    name: 'Steven Strauss',
    initials: 'SS',
    role: 'Executive Director',
    bio: 'Owns client delivery and business development. Translates senior judgement into a repeatable operating cadence and ensures every engagement holds to the same standard on every cycle.',
    creds: ['Client Delivery', 'Operating Discipline', 'Business Development'],
  },
  {
    name: 'Anuj Mehta',
    initials: 'AM',
    role: 'VP Corporate Finance',
    bio: 'Leads corporate finance workstreams: investor-grade modelling, board and management packages, and the analytical layer behind every transaction and special project.',
    creds: ['Corporate Finance', 'Modelling & Valuations', 'Board Reporting'],
  },
]

const DELIVERY = [
  {
    name: 'Rajat Shah',
    initials: 'RS',
    role: 'Senior Accountant & Team Lead',
    bio: 'Leads the India-based delivery team. Owns close discipline, bookkeeping quality, and M&A transaction support workstreams across the client portfolio.',
    creds: ['Close Discipline', 'M&A Support', 'Team Leadership'],
  },
  {
    name: 'Virti Shah',
    initials: 'VS',
    role: 'Finance & Accounting Associate',
    bio: 'Owns monthly close, reconciliations, and financial statement preparation across multiple client engagements. The discipline behind diligence-grade books.',
    creds: ['Monthly Close', 'Reconciliations', 'Financial Statements'],
  },
  {
    name: 'Harsh Dungrani',
    initials: 'HD',
    role: 'Finance & Audit Associate',
    bio: 'Supports client delivery across bookkeeping and audit workstreams, developing deep expertise in financial controls and reporting accuracy.',
    creds: ['Bookkeeping', 'Audit Support', 'Financial Controls'],
  },
  {
    name: 'Akshita Shingala',
    initials: 'AS',
    role: 'Business Operations Associate',
    bio: 'Supports workflow management, client coordination, and internal process execution across the firm with a strong operational growth mindset.',
    creds: ['Operations', 'Client Coordination', 'Process Execution'],
  },
  {
    name: 'Ryan Bugia',
    initials: 'RB',
    role: 'Data & Reporting Specialist',
    bio: 'Builds reporting automation, dashboards, and analytical infrastructure for client-facing products. Bridges the gap between raw data and decision-ready output.',
    creds: ['SQL & Python', 'Reporting Automation', 'Dashboards'],
  },
]

export default function About() {
  return (
    <main>
      {/* HERO — Inter 92px, full-width single column, matches Case Studies */}
      <section className="page-hero">
        <div className="page-hero__bg" /><div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Nexus North</Link>
            <span className="page-hero__crumb-sep" />
            <span>About</span>
          </div>
          <div className="page-hero__inner" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <span className="eyebrow eyebrow--light">Who We Are</span>
              <h1 className="page-hero__title" style={{
                fontFamily: 'var(--sans)',
                fontSize: 'clamp(36px, 4.2vw, 64px)',
                letterSpacing: '-0.025em',
                lineHeight: 1.05,
              }}>
                Built for Institutions,<br />
                <em style={{ fontFamily: 'var(--sans)', fontStyle: 'italic' }}>Ready for Scale</em>
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* ORIGIN STORY */}
      <section className="ab-story section--tight">
        <div className="container">
          <div className="ab-timeline">
            {TIMELINE.map(t => (
              <div key={t.year} className="ab-timeline__step">
                <div className="ab-timeline__year">{t.year}</div>
                <div className="ab-timeline__label">{t.label}</div>
                <div className="ab-timeline__chapter">{t.chapter}</div>
                <p className="ab-timeline__body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="ab-principles">
        <div className="container">
          <div className="ab-principles__head">
            <div>
              <span className="eyebrow">How we operate</span>
              <h2 className="h-section">Four principles<br /><em>that run every engagement</em></h2>
            </div>
          </div>
          <div className="ab-principles__list">
            {PRINCIPLES.map(p => (
              <div key={p.n} className="ab-principle">
                <div className="ab-principle__num">{p.n}</div>
                <div className="ab-principle__name">{p.name}</div>
                <p className="ab-principle__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="ab-team">
        <div className="ab-team__bg" />
        <div className="container">
          <div className="ab-team__head">
            <div>
              <span className="eyebrow eyebrow--light">The team</span>
              <h2 className="h-section h-section--light">Seasoned professionals<br /><em>your permanent operational layer</em></h2>
            </div>
            <p className="ab-team__intro">A cross-functional team of accountants, analysts, and operators. Senior-led on every engagement, with delivery across Toronto and India.</p>
          </div>

          <div className="ab-team__group-label">Leadership</div>
          <div className="ab-team__grid">
            {LEADERSHIP.map(m => (
              <div key={m.name} className="ab-team__card">
                <div className="ab-team__avatar">{m.initials}</div>
                <div className="ab-team__name">{m.name}</div>
                <div className="ab-team__role">{m.role}</div>
                <p className="ab-team__bio">{m.bio}</p>
                <div className="ab-team__creds">
                  {m.creds.map(c => <span key={c} className="ab-team__cred">{c}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="ab-team__group-label">Delivery Team</div>
          <div className="ab-team__grid">
            {DELIVERY.map(m => (
              <div key={m.name} className="ab-team__card">
                <div className="ab-team__avatar">{m.initials}</div>
                <div className="ab-team__name">{m.name}</div>
                <div className="ab-team__role">{m.role}</div>
                <p className="ab-team__bio">{m.bio}</p>
                <div className="ab-team__creds">
                  {m.creds.map(c => <span key={c} className="ab-team__cred">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — matches Case Studies exactly */}
      <section className="cta">
        <div className="cta__bg" /><div className="cta__glow" />
        <div className="container">
          <div className="cta__inner">
            <div>
              <span className="eyebrow eyebrow--light">Work with us</span>
              <h2 className="cta__title" style={{ marginTop: 22, fontSize: 'clamp(28px, 3.2vw, 46px)' }}>
                Your financial infrastructure<br />
                <em>built around your business</em>
              </h2>
              <p className="cta__sub">Every engagement starts with a free 30-minute discovery call. No obligation.</p>
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
