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
    const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 320)
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
                <div className="em-done__title">You are on the list</div>
                <div className="em-done__sub">The next one goes out at the end of the month.</div>
              </div>
            </div>
          ) : (
            <>
              <span className="eyebrow eyebrow--light em-eyebrow">Nexus North</span>
              <h2 className="em-title">Notes from<br /><em>the desk</em></h2>
              <p className="em-lede">
                Every few weeks we write up something we ran into on a live file. Cash controls, close discipline, what diligence actually asks for. Two emails a month at most.
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
                  {state === 'sending' ? 'Sending' : 'Send them to me'}
                  {state !== 'sending' && <span className="arrow">→</span>}
                </button>
              </form>

              {state === 'error' && (
                <div className="em-error">That did not go through. Try again, or write to support@nexusnorth.ca.</div>
              )}

              <div className="em-fine">
                We keep your address to ourselves. Unsubscribe from any email.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
