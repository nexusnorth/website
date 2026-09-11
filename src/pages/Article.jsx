import { Link, useParams, Navigate } from 'react-router-dom'
import { getArticleBySlug } from '../data/articles.js'
import SubscribeCTA from '../components/SubscribeCTA.jsx'

function Block({ b }) {
  switch (b.type) {
    case 'lede':  return <p className="art-prose__lede">{b.text}</p>
    case 'p':     return <p>{b.text}</p>
    case 'h2':    return <h2 className="art-prose__h2">{b.text}</h2>
    case 'h3':    return <h3 className="art-prose__h3">{b.text}</h3>
    case 'pull':  return <aside className="art-pull">{b.text}</aside>
    case 'rule':  return <div className="art-prose__rule"></div>
    case 'close': return <p className="art-prose__close">{b.text}</p>
    case 'list':  return (
      <ul className="art-prose__list">
        {b.items.map((it, i) => <li key={i}>{it}</li>)}
      </ul>
    )
    case 'cta':   return (
      <Link to={b.href} className="btn btn--ghost art-prose__cta">
        {b.label} <span className="arrow">→</span>
      </Link>
    )
    default: return null
  }
}

export default function Article() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)
  if (!article) return <Navigate to="/articles" replace />

  return (
    <>
      <section className="page-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Nexus North</Link>
            <span className="page-hero__crumb-sep" />
            <Link to="/articles">Articles</Link>
            <span className="page-hero__crumb-sep" />
            <span>{article.category}</span>
          </div>
          <div className="page-hero__inner" style={{ gridTemplateColumns: '1fr' }}>
            <div>
              <span className="eyebrow eyebrow--light">{article.category}</span>
              <h1 className="page-hero__title" style={{ maxWidth: '22ch' }}>
                {article.title}<br />
                <em>{article.titleItalic}</em>
              </h1>
              {article.kicker && <p className="art-kicker">{article.kicker}</p>}
              <div className="art-byline">
                <div className="art-byline__avatar">{article.initials}</div>
                <div className="art-byline__meta">
                  <div className="art-byline__name">{article.author}</div>
                  <div className="art-byline__role">{article.role}</div>
                </div>
                <div className="art-byline__sep"></div>
                <div className="art-byline__date">
                  <div className="art-byline__date-label">Published</div>
                  <div className="art-byline__date-value">{article.date} · {article.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="art-body">
        <div className="container">
          <article className="art-prose" style={{ padding: 0 }}>
            {article.series && <div className="art-prose__series">{article.series}</div>}
            {article.blocks.map((b, i) => <Block key={i} b={b} />)}
          </article>
        </div>
      </section>

      <SubscribeCTA />
    </>
  )
}
