function PalettePreview({ muted = false }: { muted?: boolean }) {
  return (
    <article className={`palette-preview ${muted ? "palette-muted" : "palette-current"}`}>
      <div className="palette-label">
        <span>{muted ? "Option 2" : "Option 1"}</span>
        <h2>{muted ? "Muted Heritage Coastal" : "Current Traditional"}</h2>
        <p>{muted ? "Softer slate, dusty oxblood, aged brass, and warm linen." : "Deep navy, strong oxblood, traditional gold, and cream."}</p>
      </div>
      <div className="palette-site-sample">
        <header>
          <div className="palette-brand"><img src="/mission-meals-logo.png" alt="Mission Meals" /><b>Serving Those Who Served</b></div>
          <nav aria-label={`${muted ? "Muted" : "Current"} palette sample navigation`}><span>Home</span><span>About</span><span>Contact</span><strong>Donate</strong></nav>
        </header>
        <section className="palette-hero-sample">
          <div>
            <h3><span>MISSION</span><em>MEALS<sup>TM</sup></em></h3>
            <div className="palette-rule"><i></i><b>★</b><i></i></div>
            <p><strong>It’s more than a meal.</strong><em>It’s a mission.</em></p>
            <div className="palette-actions"><b>Support the Mission →</b><span>Help Find Our Kitchen</span></div>
          </div>
        </section>
        <div className="palette-strip"><span>Quality meals.</span><b>✦</b><span>Chef-created.</span><b>✦</b><span>Scratch-made.</span></div>
        <section className="palette-content-sample">
          <p>Why a Meal Matters</p>
          <h4>Sometimes, preparing a meal becomes one burden too many.</h4>
          <div><span></span><span></span><span></span></div>
        </section>
        <footer><img src="/mission-meals-logo.png" alt="" /><b>Serving Those<br />Who Served</b><span>MISSION MEALS, INC.</span></footer>
      </div>
      <div className="palette-swatches" aria-label="Color samples">
        <span className="swatch-navy"></span><span className="swatch-red"></span><span className="swatch-gold"></span><span className="swatch-cream"></span>
      </div>
    </article>
  );
}

export default function ColorOptionsPage() {
  return (
    <main className="color-options-page">
      <header className="color-options-intro">
        <a href="/" aria-label="Return to Mission Meals"><img src="/mission-meals-logo.png" alt="Mission Meals" /></a>
        <div><p>Color comparison only</p><h1>Same website. Two different moods.</h1><span>Nothing on the locked homepage has been changed.</span></div>
      </header>
      <section className="palette-comparison"><PalettePreview /><PalettePreview muted /></section>
      <div className="color-options-return"><a className="button button-primary" href="/">Return to the current homepage</a></div>
    </main>
  );
}
