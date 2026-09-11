import { Link } from 'react-router-dom'

const TIMELINE = [
  {
    year: '2024',
    label: 'Origin',
    chapter: 'Inside a family office',
    body: 'The team that became Nexus North was assembled inside a multi-asset family office to manage books across the group and its portfolio companies. The remit was to run reporting end to end at a standard the group could take to its lenders and its auditors.'
  },
  {
    year: 'Jan 2025',
    label: 'Independence',
    chapter: 'Spun out as Nexus North',
    body: 'Once reporting inside the family office was running properly, the team was given the freedom to take the work to outside clients. Nexus North launched as a standalone advisory in January 2025 and kept the same operating standard.'
  },
  {
    year: 'Today',
    label: 'Where we are',
    chapter: 'Seven industries, one operating standard',
    body: 'Manufacturing, technology, aviation, investment management, telecom, healthcare, and founder-led growth companies. Ten people, and every client we have taken on is still with us.'
  },
]

const PRINCIPLES = [
  {
    n: '01',
    name: 'Precision is the floor',
    desc: 'Every figure traces to a source document, on every engagement, at no extra cost. This is the standard we built inside a family office and it is where all of our work starts.'
  },
  {
    n: '02',
    name: 'Close the books, then read them',
    desc: 'Closing the books is the first half of the job. The second half is telling you what they mean for the decisions coming up: the next quarter, the next round, the next conversation with your lender. Every reporting cycle ends with that view.'
  },
  {
    n: '03',
    name: 'Tech-forward, by default',
    desc: 'We automate the parts of close and reporting that should be automated, and we build inside the systems your team already uses. How the process runs is part of what we hand over, documented as we build it.'
  },
  {
    n: '04',
    name: 'Structured Readiness Framework',
    desc: 'We score every engagement against the same framework: reporting, controls, close discipline, and how ready the numbers are for a decision. You get the score, the gaps behind it, and what the next quarter needs.'
  },
]

const LEADERSHIP = [
  {
    name: 'Siddharth Dave',
    initials: 'SD',
    role: 'Founder & Operating CEO',
    bio: 'Founded Nexus North after building the finance function inside a multi-asset family office. Leads firm strategy and stays hands-on across financial reconstruction, transaction advisory, and CFO work.',
    creds: ['Financial Reconstruction', 'Transaction Advisory', 'CFO Advisory'],
  },
  {
    name: 'Steven Strauss',
    initials: 'SS',
    role: 'Executive Director',
    bio: 'Owns client delivery and business development. Makes sure every engagement holds to the same standard on every cycle.',
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
    bio: 'Owns monthly close, reconciliations, and financial statement preparation across several client engagements.',
    creds: ['Monthly Close', 'Reconciliations', 'Financial Statements'],
  },
  {
    name: 'Harsh Dungrani',
    initials: 'HD',
    role: 'Finance & Audit Associate',
    bio: 'Supports client delivery across bookkeeping and audit workstreams, building expertise in financial controls and reporting accuracy.',
    creds: ['Bookkeeping', 'Audit Support', 'Financial Controls'],
  },
  {
    name: 'Akshita Shingala',
    initials: 'AS',
    role: 'Business Operations Associate',
    bio: 'Runs workflow management, client coordination, and internal process execution across the firm.',
    creds: ['Operations', 'Client Coordination', 'Process Execution'],
  },
  {
    name: 'Ryan Bugia',
    initials: 'RB',
    role: 'Data & Reporting Specialist',
    bio: 'Builds reporting automation, dashboards, and the data pipelines behind client reporting.',
    creds: ['SQL & Python', 'Reporting Automation', 'Dashboards'],
  },
]

export default function About() {
  return (
    <main>
      {/* HERO */}
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
              <h1 className="page-hero__title">
                Ten people,<br />
                <em>one operating standard</em>
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

      {/* CTA */}
      <section className="cta">
        <div className="cta__bg" /><div className="cta__glow" />
        <div className="container">
          <div className="cta__inner">
            <div>
              <span className="eyebrow eyebrow--light">Work with us</span>
              <h2 className="cta__title" style={{ marginTop: 22 }}>
                Your financial infrastructure<br />
                <em>built around your business</em>
              </h2>
              <p className="cta__sub">Every engagement starts with a 30-minute call, free. The same partner who scopes it leads it.</p>
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
