import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import EmailModal from './components/EmailModal.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Articles from './pages/Articles.jsx'
import Article from './pages/Article.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'

/* React Router keeps the scroll position when the route changes, which is why
   clicking Services from the footer opened Services at the footer. This resets
   it on every navigation. Anchor links (/page#section) are left alone. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<Article />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <EmailModal />
    </BrowserRouter>
  )
}
