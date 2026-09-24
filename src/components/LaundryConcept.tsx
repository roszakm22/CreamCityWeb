import type { BusinessConfig } from "~/data/businesses";

export function LaundryConcept({ business }: { business: BusinessConfig }) {
  return (
    <div className="laundry-page">
      <div className="laundry-disclaimer" role="note">
        <strong>{business.conceptLabel}</strong>
        <span>{business.conceptNotice}</span>
      </div>

      <header className="laundry-header">
        <a className="laundry-brand" href="#top">
          <span className="laundry-brand-symbol" aria-hidden="true">✳</span>
          <span>MR CLEAN <small>LAUNDROMAT</small></span>
        </a>
        <nav aria-label="Page navigation">
          <a href="#details">The essentials</a>
          <a href="#visuals">The concept</a>
        </nav>
        <a className="laundry-header-call" href={business.phoneHref}>Call us ↗</a>
      </header>

      <main id="top">
        <section className="laundry-hero">
          <div className="laundry-hero-copy">
            <p className="laundry-kicker">{business.locationLabel} · A neighborhood essential</p>
            <h1>Fresh starts<br /><span>here.</span></h1>
            <p>{business.tagline} The address and phone number are easy to find, while unconfirmed details remain clearly marked.</p>
            <a className="laundry-button" href={business.directionsHref} target="_blank" rel="noreferrer">Find your way <span aria-hidden="true">↗</span></a>
          </div>
          <div className="laundry-hero-visual">
            <img src={business.gallery[0].src} alt={business.gallery[0].alt} />
            <span>ILLUSTRATIVE IMAGE · NOT THE ACTUAL BUSINESS</span>
          </div>
          <span className="laundry-hero-index" aria-hidden="true">01 / 03</span>
        </section>

        <section className="laundry-details" id="details">
          <div className="laundry-section-heading">
            <span className="laundry-kicker">01 — Find us</span>
            <h2>The important<br /><i>stuff.</i></h2>
          </div>
          <div className="laundry-detail-grid">
            <article>
              <span className="laundry-detail-number">01 / LOCATION</span>
              <h3>Come by</h3>
              <p>{business.address}</p>
              <a href={business.directionsHref} target="_blank" rel="noreferrer">Get directions ↗</a>
            </article>
            <article>
              <span className="laundry-detail-number">02 / CONTACT</span>
              <h3>Give us a call</h3>
              <p>{business.phone}</p>
              <a href={business.phoneHref}>Call the laundromat ↗</a>
            </article>
            <article>
              <span className="laundry-detail-number">03 / HOURS</span>
              <h3>When to visit</h3>
              <p>{business.hoursSummary}</p>
              <small>{business.hoursNote}</small>
            </article>
            <article>
              <span className="laundry-detail-number">04 / SERVICES</span>
              <h3>What is offered?</h3>
              <p>{business.servicesIntro}</p>
              <small>To be confirmed with the owner before launch.</small>
            </article>
          </div>
        </section>

        <section className="laundry-visuals" id="visuals">
          <div className="laundry-visuals-heading">
            <span className="laundry-kicker">02 — A visual direction</span>
            <h2>Room to <i>breathe.</i></h2>
            <p>These generated illustrations suggest a feeling for the site. They do not show the real business or its facilities.</p>
          </div>
          <div className="laundry-photo-grid">
            {business.gallery.slice(1).map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={item.alt} loading="lazy" />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="laundry-end">
          <span className="laundry-kicker">The next step is simple</span>
          <h2>Find us in<br />Milwaukee.</h2>
          <div>
            <a href={business.directionsHref} target="_blank" rel="noreferrer">Directions ↗</a>
            <a href={business.phoneHref}>{business.phone} ↗</a>
          </div>
        </section>
      </main>
      <footer className="laundry-footer">
        <span>MR CLEAN LAUNDROMAT · Unofficial pre-production concept</span>
        <span>Concept by Cream City Web Co. · No business affiliation or approval</span>
      </footer>
      <a className="laundry-mobile-call" href={business.phoneHref}>Call {business.phone} ↗</a>
    </div>
  );
}
