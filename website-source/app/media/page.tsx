import { Footer } from "../page";
export const metadata = { title: "Media & News" };
export default function Media() {
  return <main>
    <header className="site-header inner-header">
      <a className="brand" href="/"><img src="/mission-meals-logo.png" alt="Mission Meals" /><span className="brand-tag">Serving Those Who Served</span></a>
      <nav><a href="/">Home</a><a href="/about">About</a><a href="/media">Media</a><a href="/about#contact">Contact</a><a className="facebook-follow" href="https://www.facebook.com/missionmealsinc" target="_blank" rel="noopener noreferrer" aria-label="Follow Mission Meals on Facebook"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" focusable="false"><path fill="#1877F2" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047v-2.66c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.49 0-1.956.931-1.956 1.887v2.263h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" /></svg><span>Follow Us</span></a><a className="nav-donate" href="/donate">Donate</a></nav>
    </header>
    <section className="section">
      <div className="center-heading"><p className="eyebrow" style={{ fontSize: "1rem" }}>Mission Meals, Inc.</p><h1>Media &amp; News</h1><p>Coverage of the people and work behind Mission Meals.</p></div>
      <p style={{ textAlign: "center" }}>Some coverage below describes the early pilot program at American Legion Post 9. Mission Meals, Inc. is now an independent 501(c)(3) nonprofit organization.</p>
      <p style={{ marginTop: "1em", fontSize: "1.125rem", textAlign: "center" }}><strong>Contact information in the articles below may be outdated.</strong> For current Mission Meals, Inc. contact information, see our <a href="/about#contact"><strong>About &amp; Contact</strong> page</a>.</p>
      <div className="support-grid media-coverage">
<article><span>The Brunswick News · June 20, 2026</span><h3>Mission Meals provide delicious food for veterans</h3><p>Terry Dickson’s coverage of the chef-prepared meals and the people behind the pilot program.</p><div className="media-links"><a href="/media/Mission_Meals_Brunswick_News_Clean_Article.pdf" target="_blank" rel="noopener noreferrer">Read the article with photo (PDF) →</a><a href="/media/brunswick-news-print.html" target="_blank" rel="noopener noreferrer">View original print coverage →</a></div></article>

        <article><span>The American Legion · June 2026</span><h3>Legionnaire provides fresh, homemade meals to veterans in need</h3><p>A feature about Tony Dulaney and the Mission Meals pilot in Brunswick.</p><a href="https://www.legion.org/information-center/news/community/2026/june/legionnaire-provides-fresh-homemade-meals-to-veterans-in-need" target="_blank" rel="noopener noreferrer">Read the article →</a></article>

      </div>
<article className="media-video-feature"><a className="media-video-preview" href="https://www.facebook.com/reel/1057465106822051" target="_blank" rel="noopener noreferrer" aria-label="Watch LTC Allen West and Tony at the American Legion on Facebook"><img src="/media/allen-west-tony-video-preview.jpg" alt="Preview of the video featuring LTC Allen West and Tony at the American Legion" loading="lazy" /><span className="media-play" aria-hidden="true">▶</span></a><div><p className="eyebrow">Mission Meals Facebook</p><h2>LTC Allen West and Tony at the American Legion</h2><p>A video shared on the official Mission Meals Facebook page.</p><a href="https://www.facebook.com/reel/1057465106822051" target="_blank" rel="noopener noreferrer">Watch the video on Facebook →</a></div></article>

<article className="media-magazine-feature">
  <a className="magazine-cover" href="/media/constitutional-defender-mission-meals-page.pdf" target="_blank" rel="noopener noreferrer"><img src="/media/constitutional-defender-cover.jpg" alt="Front cover of The Constitutional Defender, first issue" loading="lazy" /></a>
  <div><p className="eyebrow">The Constitutional Defender · First issue</p><h2>CSD member Tony Dulaney meets need through Mission Meals</h2><p>A magazine feature about Tony’s local service through the early Mission Meals program.</p><a href="/media/constitutional-defender-mission-meals-page.pdf" target="_blank" rel="noopener noreferrer">Read the Mission Meals article page (PDF) →</a><a className="magazine-clipping defender-article-preview" href="/media/constitutional-defender-mission-meals-page.pdf" target="_blank" rel="noopener noreferrer"><img src="/media/constitutional-defender-mission-meals-page.jpg" alt="Mission Meals article clipping from page 41 of The Constitutional Defender" loading="lazy" /></a></div>
</article>
<article className="media-magazine-feature">
  <a className="magazine-cover" href="/media/tony-jean-live-free-august-2026.jpeg" target="_blank" rel="noopener noreferrer"><img src="/media/live-free-acru-august-2026-cover.jpg" alt="Front cover of Live Free, ACRU, August 2026" loading="lazy" /></a>
  <div><p className="eyebrow">Live Free · ACRU · August 2026</p><h2>At the Golden Isles Liberty Ride</h2><p>Sgt. Tony Dulaney, USMC, with Major Jean F. Clark, USAF (Ret.), at the Golden Isles Liberty Ride Poker Run supporting Golden Isles Veterans Village, July 2026.</p><p>Published in <em>Live Free</em>, ACRU, August 2026.</p><a href="/media/tony-jean-live-free-august-2026.jpeg" target="_blank" rel="noopener noreferrer">View the published photograph →</a><div className="media-print-photo magazine-photo"><img src="/media/tony-jean-live-free-august-2026.jpeg" alt="Photograph published in Live Free showing Tony Dulaney with Major Jean F. Clark" loading="lazy" /></div></div>
</article>
    </section>
    <Footer />
  </main>;
}
