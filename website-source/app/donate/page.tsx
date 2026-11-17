import { Footer } from "../page";

export default function Donate() {
  return (
    <main>
      <header className="site-header inner-header">
        <a className="brand" href="/"><img src="/mission-meals-logo.png" alt="Mission Meals" /><span className="brand-tag">Serving Those Who Served</span></a>
        <nav><a href="/">Home</a><a href="/about">About</a><a href="/media">Media &amp; News</a><a href="/about#contact">Contact</a><a className="nav-donate" href="/donate">Donate</a></nav>
      </header>
      <section className="donate-hero">
        <div className="donate-message"><p className="eyebrow light">Give with purpose</p><h1>Your support helps put the mission back in motion.</h1><div className="mini-divider"><span></span><b>★</b><span></span></div><p>Mission Meals has proven what it can do. Your gift helps secure the kitchen, equipment, ingredients, packaging, and practical resources needed to serve again.</p></div>
        <div className="donation-box">
          <span className="donation-status">Secure giving through Zeffy</span>
          <h2>Make a gift to Mission Meals</h2>
          <p>Choose a one-time or monthly gift through our secure Zeffy donation form.</p>
          <a className="button button-gold" href="https://www.zeffy.com/en-US/donation-form/support-mission-meals" target="_blank" rel="noopener noreferrer">Donate securely through Zeffy →</a>
          <small>Mission Meals receives 100% of your donation. Zeffy may suggest an optional contribution to support its platform; enter $0 if you prefer.</small>
        </div>
      </section>
      <section className="section">
        <div className="center-heading"><p className="eyebrow">What your gift supports</p><h2>Every contribution moves a real piece of the mission forward.</h2></div>
        <div className="support-grid">
          <article><span>01</span><h3>A kitchen home</h3><p>Facility costs, licensing needs, utilities, and the practical work required to resume operations.</p></article>
          <article><span>02</span><h3>Quality meals</h3><p>Ingredients, safe packaging, labels, and supplies for chef-created meals.</p></article>
          <article><span>03</span><h3>Equipment</h3><p>Commercial cooking, refrigeration, storage, and transportation equipment.</p></article>
          <article><span>04</span><h3>Responsible growth</h3><p>Systems and partnerships that allow Mission Meals to serve consistently and sustainably.</p></article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
