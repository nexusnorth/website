import { useForm, ValidationError } from '@formspree/react'
import { Link } from 'react-router-dom'

const STEPS = [
  { n: '01', name: 'Response within 24 hours', desc: 'Every enquiry is read personally by a senior partner. You will hear back the next business day, at the latest.' },
  { n: '02', name: 'A 30-minute discovery call, free', desc: 'We listen to the situation and tell you whether Nexus North is the right firm for it. If we are not, we will say so on the call.' },
  { n: '03', name: 'A scoped, transparent proposal', desc: 'If there is a fit, you receive a proposal with the scope, the timeline, and fixed pricing in writing.' },
]

const SERVICES = [
  'Executive Financial Advisory (Fractional CFO)',
  'Bookkeeping & Close',
  'Historical Reconstruction',
  'Modeling & Due Diligence',
  'SOP & Process Design',
  'Financial Clarity Report (diagnostic)',
  'Other / Not sure yet',
]

function ContactForm() {
  const [state, handleSubmit] = useForm('mrejdbwr')

  if (state.succeeded) {
    return (
      <div className="ct-success">
        <span className="ct-success__eyebrow">Message received</span>
        <h3 className="ct-success__title">Thanks. You will hear back<br /><em>within one business day</em></h3>
        <p className="ct-success__desc">A senior partner will reply directly with next steps. If your situation is urgent, write to support@nexusnorth.ca or call +1 (647) 927-1801 and we will move on it today.</p>
      </div>
    )
  }

  return (
    <div>
      <span className="ct-form-eyebrow">Send a message</span>
      <h2 className="ct-form-title">Where is your finance<br /><em>function today</em></h2>
      <form className="ct-form" onSubmit={handleSubmit}>
        <input type="hidden" name="source" value="Contact page form" />
        <div className="ct-form__row">
          <div className="ct-form__field">
            <label className="ct-form__label" htmlFor="name">Full Name <span className="req">*</span></label>
            <input id="name" name="name" type="text" required className="ct-form__input" placeholder="Jane Smith" />
            <ValidationError field="name" errors={state.errors} />
          </div>
          <div className="ct-form__field">
            <label className="ct-form__label" htmlFor="email">Email <span className="req">*</span></label>
            <input id="email" name="email" type="email" required className="ct-form__input" placeholder="jane@company.com" />
            <ValidationError field="email" errors={state.errors} />
          </div>
        </div>
        <div className="ct-form__row">
          <div className="ct-form__field">
            <label className="ct-form__label" htmlFor="company">Company</label>
            <input id="company" name="company" type="text" className="ct-form__input" placeholder="Your company" />
          </div>
          <div className="ct-form__field">
            <label className="ct-form__label" htmlFor="service">Engagement of interest</label>
            <select id="service" name="service" defaultValue="" className="ct-form__select">
              <option value="" disabled>Select an engagement</option>
              {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
        <div className="ct-form__row ct-form__row--single">
          <div className="ct-form__field">
            <label className="ct-form__label" htmlFor="message">How can we help <span className="req">*</span></label>
            <textarea id="message" name="message" required className="ct-form__textarea" placeholder="Tell us about the situation: what is happening with your finances, what has been tried, and what good would look like in 90 days." />
            <ValidationError field="message" errors={state.errors} />
          </div>
        </div>
        <div className="ct-form__foot">
          <p className="ct-form__note"><strong>Confidential.</strong> Nothing you share here leaves Nexus North. We respond within one business day.</p>
          <button type="submit" className="ct-form__submit" disabled={state.submitting}>
            {state.submitting ? 'Sending…' : 'Send Message'} <span className="arrow">→</span>
          </button>
        </div>
      </form>
    </div>
  )
}

export default function Contact() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero__bg" /><div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Nexus North</Link>
            <span className="page-hero__crumb-sep" />
            <span>Contact</span>
          </div>
          <div className="page-hero__inner" style={{gridTemplateColumns:'1fr'}}>
            <div>
              <span className="eyebrow eyebrow--light">Get in touch</span>
              <h1 className="page-hero__title">
                Tell us the situation,<br />
                <em>we will bring the rigour</em>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ct-page">
        <div className="container">
          <div className="ct-grid">
            <div className="ct-info">
              <h2 className="ct-info__head">What happens<br /><em>after you send it</em></h2>
              <div className="ct-steps">
                {STEPS.map(s => (
                  <div key={s.n} className="ct-step">
                    <div className="ct-step__num">{s.n}</div>
                    <div>
                      <div className="ct-step__name">{s.name}</div>
                      <p className="ct-step__desc">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="ct-details">
                <div className="ct-details-label">Direct lines</div>
                <a href="mailto:support@nexusnorth.ca" className="ct-detail">
                  <div className="ct-detail__dot" />
                  <div><div className="ct-detail__label">Email</div><div className="ct-detail__value">support@nexusnorth.ca</div></div>
                </a>
                <a href="tel:+16479271801" className="ct-detail">
                  <div className="ct-detail__dot" />
                  <div><div className="ct-detail__label">Phone</div><div className="ct-detail__value">+1 (647) 927-1801</div></div>
                </a>
                <a href="https://www.linkedin.com/company/nexusnorthsolutions/" target="_blank" rel="noreferrer" className="ct-detail">
                  <div className="ct-detail__dot" />
                  <div><div className="ct-detail__label">LinkedIn</div><div className="ct-detail__value">Nexus North Solutions</div></div>
                </a>
                <div className="ct-detail">
                  <div className="ct-detail__dot" />
                  <div><div className="ct-detail__label">Headquartered</div><div className="ct-detail__value">Toronto, ON · serving clients globally</div></div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
