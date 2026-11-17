import { Footer } from "../page";

export default function Donate() {
  return (
    <main>
      <header className="site-header inner-header">
        <a className="brand" href="/"><img src="/mission-meals-logo.png" alt="Mission Meals" /><span className="brand-tag">Serving Those Who Served</span></a>
        <nav><a href="/">Home</a><a href="/about">About</a><a href="/media">Media</a><a href="/about#contact">Contact</a><a className="facebook-follow" href="https://www.facebook.com/missionmealsinc" target="_blank" rel="noopener noreferrer" aria-label="Follow Mission Meals on Facebook"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false"><path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg><span>Follow Us</span></a><a className="nav-donate" href="/donate">Donate</a></nav>
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
