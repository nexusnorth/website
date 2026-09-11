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
              Notes from the desk,<br />
              <em>in your inbox</em>
            </h2>
            <p className="cta__sub">
              Field notes from inside live engagements. Receivership, public-market readiness, family-office reporting. Two emails a month at most, and you can unsubscribe from any of them.
            </p>
          </div>
          <div className="cta__actions">
            {state === 'done' ? (
              <div className="sub-success">
                <span className="sub-success__mark">✓</span>
                <div>
                  <div className="sub-success__title">You are on the list</div>
                  <div className="sub-success__sub">The next one goes out at the end of the month.</div>
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
