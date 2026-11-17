import { Footer } from "../page";

export default function About() {
  return (
    <main>
      <header className="site-header inner-header">
        <a className="brand" href="/"><img src="/mission-meals-logo.png" alt="Mission Meals" /><span className="brand-tag">Serving Those Who Served</span></a>
        <nav><a href="/">Home</a><a href="/about">About</a><a href="/media">Media</a><a href="/about#contact">Contact</a><a className="nav-donate" href="/donate">Donate</a></nav>
      </header>
      <section className="page-hero about-hero">
        <img src="/tony-hero-clean.png" alt="Chef Tony Dulaney preparing chicken in the kitchen" />
        <div>
          <p className="eyebrow">About Mission Meals</p>
          <h1>A good meal can be a lifeline.</h1>
          <p>Mission Meals began with a simple belief: people who have served others should not face difficult seasons alone.</p>
        </div>
      </section>
      <section className="section story-grid">
        <div><p className="eyebrow">Our story</p><h2>From one conversation to a working mission.</h2></div>
        <div className="body-copy">
          <p>Chef Tony Dulaney saw an opportunity to use what he knew best—creating quality meals—to serve veterans in his community. Together, Tony Dulaney and Caryn Stinson shaped that idea into Mission Meals.</p>
          <p>For 17 consecutive weeks, the pilot program prepared and served chef-created meals. It demonstrated both the need and the value of providing food that feels thoughtful, personal, and worthy of the people receiving it.</p>
          <p>When access to the original kitchen ended because of permitting limitations, the meals paused—but the mission did not. Mission Meals, Inc. was established as an independent Georgia nonprofit corporation and began the search for a compliant kitchen and permanent home.</p>
        </div>
      </section>
      <section className="statement-section">
        <p className="eyebrow light">Our mission</p>
        <span className="statement-star" aria-hidden="true">★</span>
        <blockquote>“To provide chef-created quality meals to veterans, first responders, and others facing times of stress, hardship, recovery or need.”</blockquote>
      </section>
      <section className="section leadership">
        <div><p className="eyebrow">Leadership</p><h2>Built by people who believe service should be personal.</h2></div>
        <div className="leader-list">
          <article><span>Founder &amp; President</span><h3>Tony Dulaney</h3><p>A professional chef with a background in military service, law enforcement, and 14 years in emergency medical services. Tony combines his culinary expertise with a lifetime of serving others, bringing firsthand understanding of the challenges faced by veterans and first responders to the Mission Meals mission.</p></article>
          <article><span>Founder &amp; Vice President</span><h3>Caryn Stinson</h3><p>An entrepreneur with experience in food service, business ownership, and operations. Raised as a U.S. Air Force military dependent on bases throughout the United States and overseas, Caryn brings a personal connection to military life, along with her experience in strategic planning and organizational leadership, to Mission Meals.</p></article>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div><p className="eyebrow">Contact us</p><h2>Let’s start a conversation.</h2><p>For kitchen leads, partnerships, donations, media inquiries, or general questions, contact Mission Meals directly.</p></div>
        <div className="contact-card"><span>Email</span><a href="mailto:missionmeals@missionmeals.net">missionmeals@missionmeals.net</a><span>Service area</span><p>Brunswick and the Golden Isles, Georgia</p><a className="button button-primary" href="mailto:missionmeals@missionmeals.net">Send an email →</a></div>
      </section>
      <Footer />
    </main>
  );
}
