import { Footer } from "../page";
export const metadata = { title: "Media & News" };
export default function Media() {
  return <main>
    <header className="site-header inner-header">
      <a className="brand" href="/"><img src="/mission-meals-logo.png" alt="Mission Meals" /><span className="brand-tag">Serving Those Who Served</span></a>
      <nav><a href="/">Home</a><a href="/about">About</a><a href="/media">Media &amp; News</a><a href="/about#contact">Contact</a><a className="nav-donate" href="/donate">Donate</a></nav>
    </header>
    <section className="section">
      <div className="center-heading"><p className="eyebrow">Mission Meals</p><h1>Media &amp; News</h1><p>Coverage of the people and work behind Mission Meals.</p></div>
      <p>Some coverage below describes the early pilot program at American Legion Post 9. Mission Meals, Inc. is now an independent 501(c)(3) nonprofit organization.</p>
      <div className="support-grid media-coverage">
<article><span>The Brunswick News · June 20, 2026</span><h3>Mission Meals provide delicious food for veterans</h3><p>Terry Dickson’s coverage of the chef-prepared meals and the people behind the pilot program.</p><div className="media-links"><a href="/media/Mission_Meals_Brunswick_News_Clean_Article.pdf" target="_blank" rel="noopener noreferrer">Read the article with photo (PDF) →</a><a href="/media/Mission_Meals_Brunswick_News_Print_Coverage.pdf" target="_blank" rel="noopener noreferrer">View original print coverage (PDF) →</a></div></article>
<article><span>Mission Meals Facebook</span><h3>Col. Allen West and Tony at the American Legion</h3><p>A video shared on the official Mission Meals Facebook page.</p><a href="https://www.facebook.com/reel/1057465106822051" target="_blank" rel="noopener noreferrer">Watch the video on Facebook →</a></article>
        <article><span>The American Legion · June 2026</span><h3>Legionnaire provides fresh, homemade meals to veterans in need</h3><p>A feature about Tony Dulaney and the Mission Meals pilot in Brunswick.</p><a href="https://www.legion.org/information-center/news/community/2026/june/legionnaire-provides-fresh-homemade-meals-to-veterans-in-need" target="_blank" rel="noopener noreferrer">Read the article →</a></article>
        <article><span>The Constitutional Defender · First issue</span><h3>CSD member Tony Dulaney meets need through Mission Meals</h3><p>A magazine feature about Tony’s local service through the early Mission Meals program.</p><a href="https://supportanddefend.org/wp-content/uploads/sites/8/2026/08/Constitutional-Defender-1-WEB.pdf" target="_blank" rel="noopener noreferrer">Open the magazine PDF →</a></article>
      </div>
<article className="media-photo-feature"><div className="media-print-photo"><img src="/media/tony-jean-live-free-august-2026.jpeg" alt="Photograph published in Live Free showing Tony Dulaney with Major Jean F. Clark" /></div><div><p className="eyebrow">Live Free · ACRU · August 2026</p><h2>At the Golden Isles Liberty Ride</h2><p>Tony Dulaney with Major Jean F. Clark, USAF (Ret.), at the Golden Isles Liberty Ride Poker Run supporting Golden Isles Veterans Village, July 2026.</p><p>Published in <em>Live Free</em>, ACRU, August 2026.</p><a href="https://theacru.org/wp-content/uploads/2026/09/ACRU-Newsletter-August-2026.pdf" target="_blank" rel="noopener noreferrer">View the publication (PDF) →</a></div></article>
    </section>
    <Footer />
  </main>;
}
