import { useState } from 'react'

const FORMSPREE_ID = 'mrejdbwr'

export default function SubscribeCTA() {
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done | error

  async function submit(e) {
    e.preventDefault()
    if (!email.trim() || state === 'sending') return
    setState('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: email.trim(), source: 'Articles subscribe band' })
      })
      if (!res.ok) throw new Error('bad response')
      setState('done')
    } catch (err) {
      setState('error')
    }
  }

  return (
    <section className="cta">
      <div className="cta__bg" />
      <div className="cta__glow" />
      <div className="container">
        <div className="cta__inner">
          <div>
            <span className="eyebrow eyebrow--light">Subscribe</span>
            <h2 className="cta__title" style={{ marginTop: 22 }}>
              Join the<br />
              <em>Nexus North network</em>
            </h2>
            <p className="cta__sub">
              A private list of operators, lenders, receivers and counsel. Frameworks we are building, what we are seeing across live engagements, and early access to new work.
            </p>
          </div>
          <div className="cta__actions">
            {state === 'done' ? (
              <div className="sub-success">
                <span className="sub-success__mark">✓</span>
                <div>
                  <div className="sub-success__title">You are in</div>
                  <div className="sub-success__sub">We will be in touch when the next piece of work is ready.</div>
                </div>
              </div>
            ) : (
              <form className="sub-form" onSubmit={submit}>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle') }}
                  placeholder="you@company.com"
                  className="sub-form__input"
                  aria-label="Email address"
                />
                <button type="submit" className="btn btn--primary sub-form__btn" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending' : 'Subscribe'} <span className="arrow">→</span>
                </button>
              </form>
            )}
            {state === 'error' && (
              <div className="cta__direct">That did not send. Write to <a href="mailto:support@nexusnorth.ca">support@nexusnorth.ca</a> instead.</div>
            )}
            {state !== 'error' && (
              <div className="cta__direct">or write directly to <a href="mailto:support@nexusnorth.ca">support@nexusnorth.ca</a></div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
