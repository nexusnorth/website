import { useState, useEffect, useRef } from 'react'

const FORMSPREE_ID = 'mrejdbwr'
const STORAGE_KEY = 'nn_email_modal_v1'
const DELAY_MS = 3200

export default function EmailModal() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [state, setState] = useState('idle') // idle | sending | done | error
  const inputRef = useRef(null)

  useEffect(() => {
    let stored = null
    try { stored = localStorage.getItem(STORAGE_KEY) } catch (e) {}
    if (stored) return
    const t = setTimeout(() => setOpen(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') dismiss() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    const t = setTimeout(() => inputRef.current && inputRef.current.focus({ preventScroll: true }), 320)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      clearTimeout(t)
    }
  }, [open])

  function remember() {
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())) } catch (e) {}
  }

  function dismiss() {
    remember()
    setOpen(false)
  }

  async function submit(e) {
    e.preventDefault()
    if (!email.trim() || state === 'sending') return
    setState('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'Website popup',
          page: window.location.pathname
        })
      })
      if (!res.ok) throw new Error('bad response')
      remember()
      setState('done')
      setTimeout(() => setOpen(false), 2600)
    } catch (err) {
      setState('error')
    }
  }

  if (!open) return null

  return (
    <div className="em-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) dismiss() }}>
      <div className="em-panel" role="dialog" aria-modal="true" aria-label="Subscribe to Nexus North updates">
        <div className="em-panel__bg" />
        <div className="em-panel__glow" />
        <button className="em-close" onClick={dismiss} aria-label="Close">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
        </button>

        <div className="em-body">
          {state === 'done' ? (
            <div className="em-done">
              <span className="em-done__mark">✓</span>
              <div>
                <div className="em-done__title">You are in</div>
                <div className="em-done__sub">We will be in touch when the next piece of work is ready.</div>
              </div>
            </div>
          ) : (
            <>
              <span className="eyebrow eyebrow--light em-eyebrow">The Nexus North Network</span>
              <h2 className="em-title">What we are<br /><em>building next</em></h2>
              <p className="em-lede">
                We keep a private list of operators, lenders, receivers and counsel. It carries the frameworks we are building, what we are seeing across live engagements, and early access to new work before it goes anywhere else.
              </p>

              <form className="em-form" onSubmit={submit}>
                <input
                  ref={inputRef}
                  className="em-input"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); if (state === 'error') setState('idle') }}
                />
                <button className="btn btn--primary em-submit" type="submit" disabled={state === 'sending'}>
                  {state === 'sending' ? 'Sending' : 'Join the network'}
                  {state !== 'sending' && <span className="arrow">→</span>}
                </button>
              </form>

              {state === 'error' && (
                <div className="em-error">That did not go through. Try again, or write to support@nexusnorth.ca.</div>
              )}

              <div className="em-fine">
                Your address stays with us. Nothing is shared, sold, or passed on.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
