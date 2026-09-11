import { Link } from 'react-router-dom'
import { ARTICLES } from '../data/articles.js'
import SubscribeCTA from '../components/SubscribeCTA.jsx'

function ArticleCard({ a }) {
  return (
    <Link to={`/articles/${a.id}`} className="art-card">
      <span className="art-card__tag">{a.category}</span>
      <h3 className="art-card__title">{a.title} {a.titleItalic}</h3>
      <p className="art-card__excerpt">{a.excerpt}</p>
      <div className="art-card__meta">
        <div className="art-card__author">{a.author}</div>
        <div className="art-card__date">{a.date}</div>
      </div>
      <span className="art-card__link">Read article <span className="arrow">→</span></span>
    </Link>
  )
}

export default function Articles() {
  const cols = 3
  const remainder = ARTICLES.length % cols
  const emptyCount = remainder === 0 ? 0 : cols - remainder

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Nexus North</Link>
            <span className="page-hero__crumb-sep" />
            <span>Articles</span>
          </div>
          <div className="page-hero__inner" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <span className="eyebrow eyebrow--light">Insights</span>
              <h1 className="page-hero__title">
                Finance intelligence,<br />
                <em>straight from the field</em>
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="art-page">
        <div className="container">
          <div className="art-grid art-grid--cols-3 art-grid--accent-top art-grid--color-teal art-grid--pad-regular">
            {ARTICLES.map((a) => <ArticleCard key={a.id} a={a} />)}
            {Array.from({ length: emptyCount }).map((_, i) => (
              <div key={`e${i}`} className="art-card art-card--empty" aria-hidden="true"></div>
            ))}
          </div>
        </div>
      </section>

      <SubscribeCTA />
    </>
  )
}
