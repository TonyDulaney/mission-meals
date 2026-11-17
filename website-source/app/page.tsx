const Arrow = () => <span aria-hidden="true">→</span>;

export default function Home() {
  return (
    <main>
      <section className="hero">
        <img className="hero-background" src="/tony-hero-clean-v2.png" alt="" />
        <header className="site-header hero-header">
          <a className="brand" href="/" aria-label="Mission Meals home">
            <img src="/mission-meals-logo.png" alt="Mission Meals" />
            <span className="brand-tag">Serving Those Who Served</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/media">Media</a><a href="/about#contact">Contact</a>
            <a className="nav-donate" href="/donate">Donate</a>
          </nav>
        </header>
        <div className="hero-copy">
          <h1 className="mission-title"><span>MISSION</span><em>MEALS<sup>TM</sup></em></h1>
          <div className="hero-divider"><span></span><b aria-hidden="true">★</b><span></span></div>
          <p className="hero-tagline"><strong>It’s more than a meal.</strong><em>It’s a mission.</em></p>
          <div className="button-row">
            <a className="button button-primary" href="/donate">Support the Mission <Arrow /></a>
            <a className="button button-secondary" href="#kitchen">Help Find Our Kitchen</a>
          </div>
        </div>
      </section>

      <section className="mission-strip">
        <p>Freshly prepared.</p><span>✦</span><p>Chef-created.</p><span>✦</span><p>Quality meals.</p>
      </section>

      <section className="pilot-note">
        <p><strong>Proven in practice:</strong> Our 17-week pilot program confirmed the need, tested the model, and demonstrated the power of a thoughtfully prepared meal.</p>
      </section>

      <section className="section split-section">
        <div>
          <p className="eyebrow">Why a Meal Matters</p>
          <h2>Sometimes, preparing a meal becomes one burden too many.</h2>
        </div>
        <div className="body-copy">
          <p>
            Mission Meals can help—a firefighter struggling to prepare meals
            after surgery, or a veteran and his wife fighting an uphill battle
            with illnesses. During times of recovery, serious illness, financial
            hardship, or the changes that can come with age, a quality meal served
            with dignity offers practical relief and reminds people that they are
            not facing a difficult season alone.
          </p>
          <a className="text-link" href="/about">Read Our Story <Arrow /></a>
        </div>
      </section>

      <section className="service-section">
        <div className="home-mission-label">
          <p className="eyebrow light">Our Mission</p>
        </div>
        <blockquote>“To provide chef-created quality meals to veterans, first responders, and others facing times of stress, hardship, recovery, or need.”</blockquote>
      </section>

      <section className="partner-section" id="partner">
        <div className="partner-intro">
          <p className="eyebrow">Partner with Mission Meals</p>
          <h2>Bring what you have.<br />Help us serve.</h2>
          <p>
            A Mission Partner is a person, business, or organization that provides
            a resource the mission needs. That resource can be large or small,
            temporary or ongoing.
          </p>
          <a className="button button-primary" href="mailto:missionmeals@missionmeals.net?subject=Become%20a%20Mission%20Meals%20Partner&amp;body=Tell%20us%20how%20you%20can%20help%20Mission%20Meals%3A%0A%0A">Become a Partner <Arrow /></a>
        </div>
        <div className="partner-grid">
          <article><div><h3>Kitchen &amp; Space</h3><p>Commercial kitchen access, storage, land, or a future home.</p></div></article>
          <article><div><h3>Food &amp; Supplies</h3><p>Ingredients, packaging, labels, and dependable food resources.</p></div></article>
          <article><div><h3>Transportation</h3><p>Vehicles, fuel, delivery help, and dependable local logistics.</p></div></article>
          <article><div><h3>Equipment</h3><p>Commercial appliances, refrigeration, shelving, and kitchen tools.</p></div></article>
          <article><div><h3>Professional Services</h3><p>Skilled help with permits, trades, printing, technology, and more.</p></div></article>
          <article><div><h3>People &amp; Connections</h3><p>Volunteers, referrals, introductions, outreach, and community support.</p></div></article>
        </div>
      </section>

      <section className="founding-partners-banner">
        <div className="founding-partners-title">
          <span aria-hidden="true">★</span>
          <h2>Founding Partners</h2>
          <span aria-hidden="true">★</span>
        </div>
        <p>
          The people, businesses, and organizations that help make Mission Meals
          possible will be recognized as <strong>Founding Partners</strong> and regularly highlighted
          across our website, social media, news, and publications.
        </p>
      </section>

      <section className="section kitchen-section" id="kitchen">
        <div className="kitchen-card">
          <p className="eyebrow">No stone unturned</p>
          <h2>Help us find a kitchen to call home.</h2>
          <p>
            After completing our successful 17-week pilot program, Mission Meals
            lost access to the compliant kitchen that made our work possible. We
            are now searching throughout the Golden Isles for a temporary, shared,
            leased, donated, or permanent space where the mission can resume.
          </p>
          <a className="button button-primary" href="mailto:missionmeals@missionmeals.net?subject=Mission%20Meals%20Kitchen%20Lead">Share a kitchen lead <Arrow /></a>
        </div>
        <div className="kitchen-needs">
          <h3>We are open to possibilities.</h3>
          <ul>
            <li>Church, community, school, or organizational kitchens</li>
            <li>Underused commercial or catering facilities</li>
            <li>Lease, lease-to-own, purchase, or donated property</li>
            <li>Partners who can help make a facility possible</li>
          </ul>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p className="eyebrow light">Join the mission</p>
          <h2>Help us serve those who have served—one quality meal at a time.</h2>
        </div>
        <a className="button button-gold" href="/donate">Give to Mission Meals <Arrow /></a>
      </section>

      <Footer />
    </main>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="footer-brand"><img src="/mission-meals-logo.png" alt="Mission Meals" /><span>Serving Those<br />Who Served</span></div>
      <p>Mission Meals, Inc. is a Georgia<br />501(c)(3) nonprofit organization.</p>
      <div className="footer-links"><a href="/about">About &amp; Contact</a><a href="/donate">Donate</a><a href="https://www.facebook.com/missionmealsinc" target="_blank" rel="noopener noreferrer">Facebook</a><a href="mailto:missionmeals@missionmeals.net">missionmeals@missionmeals.net</a></div>
    </footer>
  );
}
