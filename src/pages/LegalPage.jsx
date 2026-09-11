import { Link } from 'react-router-dom'

const LEGAL = {
  privacy: {
    title: 'Privacy',
    titleEm: 'policy',
    sub: 'What we collect, why we hold it, and how to get it removed.',
    updated: 'Last updated 10 September 2026',
    intro: 'Nexus North Solutions Ltd. is a financial advisory firm based in Toronto. This page covers the information we collect through this website. It does not cover client engagement files, which are governed by the engagement letter you sign with us.',
    sections: [
    {
      h: 'What we collect on this site',
      p: [
      'There are two places on this site where you can hand us information, and both are voluntary.',
      'The first is the subscribe box that appears shortly after you arrive. It asks for an email address. When you submit it, we also record which page you were on and the fact that it came from the popup, so we know where our readers are coming from.',
      'The second is the contact form. That one takes your name, email, company, and whatever you write in the message field.',
      'We do not run advertising trackers, and we do not sell or rent any of it.']

    },
    {
      h: 'Where it goes',
      p: [
      'Both forms are processed by Formspree, which passes the submission to our inbox at support@nexusnorth.ca. Formspree holds a copy on its own servers, in the United States, under its privacy terms.',
      'From there the information sits in our email and our CRM. Only people at Nexus North see it.']

    },
    {
      h: 'How long we keep it',
      p: [
      'Subscriber emails stay on the list until you unsubscribe. Contact form submissions stay in our records for two years from the last time we spoke, after which we delete them unless you have become a client. Client records follow the retention rules our profession requires, which is generally seven years.']

    },
    {
      h: 'Consent and unsubscribing',
      p: [
      'Submitting either form is your consent to hear from us. Canada\'s anti-spam legislation requires that consent be express, so we do not add anyone to the list who has not typed their own address into the box.',
      'Every email we send has an unsubscribe link at the bottom. Use it and you come off the list on the spot. You can also write to support@nexusnorth.ca and ask, and we will do it manually.']

    },
    {
      h: 'Your rights',
      p: [
      'Under PIPEDA you can ask us what we hold about you, ask us to correct it, or ask us to delete it. Write to support@nexusnorth.ca and we will answer within thirty days. There is no charge for this.']

    },
    {
      h: 'Cookies',
      p: [
      'This site sets one item in your browser to remember that you have already seen the subscribe popup, so it does not appear again on every visit. That is stored on your device and never sent to us. Clearing your browser data removes it.']

    },
    {
      h: 'Changes to this page',
      p: [
      'If we change how any of this works, we will update this page and move the date at the top. Material changes to how we handle subscriber data will also go out by email.']

    },
    {
      h: 'Contact',
      p: [
      'Questions about privacy go to support@nexusnorth.ca, or call +1 (647) 927-1801. Nexus North Solutions Ltd., Toronto, Ontario, Canada.']

    }]

  },

  terms: {
    title: 'Terms of',
    titleEm: 'use',
    sub: 'The terms that apply to this website.',
    updated: 'Last updated 10 September 2026',
    intro: 'These terms apply to nexusnorth.ca. They cover the website only. The work we do for clients is governed by a separate engagement letter, and where the two differ, the engagement letter wins.',
    sections: [
    {
      h: 'What this site is',
      p: [
      'This website describes our firm and the work we do. Everything on it is general information about financial operations and advisory practice.',
      'It is general information, which means you should not act on it as advice for your own situation. Accounting treatment, tax exposure, and financing decisions turn on facts we do not know from here. Before you act, talk to us or to your own advisor.',
      'Reading this site or writing to us does not make you a client. That relationship starts when both sides sign an engagement letter.']

    },
    {
      h: 'Accuracy',
      p: [
      'We keep the content current and correct as far as we reasonably can. Rules change, and pages go stale between updates. We give no warranty that everything here is complete or up to date at the moment you read it.']

    },
    {
      h: 'Our content',
      p: [
      'The text, articles, graphics, logos, and layout on this site belong to Nexus North Solutions Ltd. You are welcome to read it, quote it with attribution, and share the link. Republishing substantial parts of it, or using our name or logo commercially, needs our written permission first.']

    },
    {
      h: 'What you send us',
      p: [
      'Do not send confidential or sensitive financial information through the contact form. It is not an encrypted channel. Send an email and we will set up a secure way to move documents.',
      'When you do submit something, you confirm it is accurate and that you have the right to share it.']

    },
    {
      h: 'Links to other sites',
      p: [
      'Where we link out, we do so because the destination was useful when we linked it. We do not control those sites and we are not responsible for what they publish or how they handle your data.']

    },
    {
      h: 'Liability',
      p: [
      'We provide this site as it is. To the extent the law allows, Nexus North Solutions Ltd. is not liable for loss arising from your use of it, or from anything you do or do not do on the basis of what you read here.']

    },
    {
      h: 'Governing law',
      p: [
      'These terms are governed by the laws of Ontario and the laws of Canada that apply there. The courts of Ontario have jurisdiction over any dispute arising from them.']

    },
    {
      h: 'Changes',
      p: [
      'We can revise these terms. The current version is always the one on this page, with the date at the top. Continuing to use the site after a change means you accept the revised version.']

    },
    {
      h: 'Contact',
      p: [
      'Questions about these terms go to support@nexusnorth.ca, or call +1 (647) 927-1801.']

    }]

  }
};

function linkify(text) {
  const parts = text.split(/(support@nexusnorth\.ca)/g)
  return parts.map((p, i) =>
    p === 'support@nexusnorth.ca'
      ? <a key={i} href="mailto:support@nexusnorth.ca">{p}</a>
      : <span key={i}>{p}</span>
  )
}

export default function LegalPage({ doc = 'privacy' }) {
  const d = LEGAL[doc]
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="page-hero__bg" />
        <div className="page-hero__glow" />
        <div className="container">
          <div className="page-hero__crumb">
            <Link to="/">Home</Link>
            <span className="page-hero__crumb-sep" />
            <span>{d.title} {d.titleEm}</span>
          </div>
          <h1 className="page-hero__title legal-hero__title">
            {d.title}<br /><em>{d.titleEm}</em>
          </h1>
          <div className="legal-hero__date">{d.updated}</div>
        </div>
      </section>

      <section className="legal-body">
        <div className="container">
          <div className="legal-wrap">
            <p className="legal-intro">{d.intro}</p>
            {d.sections.map((s, i) => (
              <div className="legal-sec" key={i}>
                <h2 className="legal-h2">
                  <span className="legal-h2__n">{String(i + 1).padStart(2, '0')}</span>{s.h}
                </h2>
                {s.p.map((p, j) => <p className="legal-p" key={j}>{linkify(p)}</p>)}
              </div>
            ))}
            <div className="legal-foot">
              <Link className="legal-foot__link" to={doc === 'privacy' ? '/terms' : '/privacy'}>
                {doc === 'privacy' ? 'Terms of use' : 'Privacy policy'} <span className="arrow">→</span>
              </Link>
              <Link className="legal-foot__link" to="/contact">Contact us <span className="arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
