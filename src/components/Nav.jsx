import { Link, useLocation } from 'react-router-dom'

const LINKS = [
  { to: '/services',     label: 'Services' },
  { to: '/about',        label: 'About' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/contact',      label: 'Contact' },
]

export default function Nav() {
  const { pathname } = useLocation()
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__inner">
          <Link to="/" className="nav__logo" aria-label="Nexus North Solutions">
            <img src="/logo-white.svg" alt="Nexus North" />
          </Link>
          <div className="nav__links">
            {LINKS.map(l => (
              <Link key={l.to} to={l.to}
                className={`nav__link${pathname === l.to ? ' nav__link--active' : ''}`}>
                {l.label}
              </Link>
            ))}
          </div>
          <Link to="/contact" className="nav__cta">Book a Call</Link>
        </div>
      </div>
    </nav>
  )
}
