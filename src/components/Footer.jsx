import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src="/logo-white.svg" alt="Nexus North" />
            <p className="footer__desc">
              Financial operations and CFO advisory for growth companies, family offices, and court-appointed engagements across North America.
            </p>
            <a href="https://www.linkedin.com/company/nexusnorthsolutions/" target="_blank" rel="noreferrer" className="footer__social">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
              LinkedIn
            </a>
          </div>
          <div>
            <div className="footer__col-title">Firm</div>
            <div className="footer__links">
              <Link to="/about">About</Link>
              <Link to="/about">Team</Link>
              <Link to="/case-studies">Case studies</Link>
              <Link to="/articles">Articles</Link>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Services</div>
            <div className="footer__links">
              <Link to="/services">Fractional CFO</Link>
              <Link to="/services">Bookkeeping &amp; operations</Link>
              <Link to="/services">Advisory &amp; special projects</Link>
              <Link to="/services">Financial Clarity Report</Link>
            </div>
          </div>
          <div>
            <div className="footer__col-title">Connect</div>
            <div className="footer__links">
              <Link to="/contact">Book a discovery call</Link>
              <a href="mailto:support@nexusnorth.ca">support@nexusnorth.ca</a>
              <a href="tel:+16479271801">+1 (647) 927-1801</a>
              <span>Toronto, ON · Canada</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div>© 2026 Nexus North Solutions Ltd. All rights reserved.</div>
          <div className="footer__legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
