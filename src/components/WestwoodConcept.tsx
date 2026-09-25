function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="westwood-icon">
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="westwood-icon">
      <path d="M5.1 3.7 7 3.2l1.6 3.7-1.5 1.3a12.7 12.7 0 0 0 4.7 4.7l1.3-1.5 3.7 1.6-.5 1.9a2 2 0 0 1-2 1.5C8.3 15.9 4.1 11.7 3.6 5.7a2 2 0 0 1 1.5-2Z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="westwood-icon">
      <path d="M16.5 8.4c0 4.2-6.5 9.1-6.5 9.1S3.5 12.6 3.5 8.4a6.5 6.5 0 1 1 13 0Z" />
      <circle cx="10" cy="8.3" r="2" />
    </svg>
  );
}

export function WestwoodConcept() {
  const phone = "(414) 774-2201";
  const phoneHref = "tel:+14147742201";
  const address = "8731 W North Ave, Wauwatosa, WI 53226";
  const directionsHref =
    "https://www.google.com/maps/dir/?api=1&destination=8731+W+North+Ave+Wauwatosa+WI+53226";

  return (
    <div className="westwood-page">
      <div className="westwood-notice" role="note">
        <strong>Unofficial concept</strong>
        <span>
          Pre-production design concept by Cream City Web Co. Not affiliated
          with or approved by Westwood Dry Cleaners. Details are owner-to-confirm.
        </span>
      </div>

      <header className="westwood-header">
        <a className="westwood-brand" href="#top" aria-label="Westwood Dry Cleaners home">
          <span className="westwood-monogram" aria-hidden="true">W</span>
          <span>
            <strong>Westwood</strong>
            <small>Dry Cleaners</small>
          </span>
        </a>
        <a className="westwood-header-call" href={phoneHref}>
          <PhoneIcon />
          <span>Call {phone}</span>
        </a>
      </header>

      <main id="top">
        <section className="westwood-hero">
          <div className="westwood-rail" aria-hidden="true">
            <span>Wauwatosa / WI</span>
            <span>01</span>
          </div>
          <div className="westwood-hero-copy">
            <p className="westwood-eyebrow">A clear starting point</p>
            <h1>Information<br /><em>made clear.</em></h1>
            <p className="westwood-lede">
              A calm, considered home for the information customers need before
              they stop by. Built around the details to confirm before launch.
            </p>
            <div className="westwood-actions">
              <a className="westwood-button westwood-button-primary" href={directionsHref} target="_blank" rel="noreferrer">
                Find the shop <ArrowIcon />
              </a>
              <a className="westwood-text-link" href="#details">See the essentials <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="westwood-hero-art" role="img" aria-label="Abstract illustrative clothing-care mark">
            <div className="westwood-art-grid" aria-hidden="true" />
            <div className="westwood-hanger" aria-hidden="true">
              <span className="westwood-hanger-hook" />
              <span className="westwood-hanger-body" />
            </div>
            <div className="westwood-art-tag" aria-hidden="true">
              <span>CARE</span>
              <strong>01</strong>
            </div>
            <p>Illustrative graphic<br />not a photo of the business</p>
          </div>
        </section>

        <section className="westwood-contact-strip" id="details" aria-label="Business contact details">
          <div className="westwood-contact-item">
            <span className="westwood-contact-icon"><PinIcon /></span>
            <div>
              <span className="westwood-label">Find us</span>
              <address>{address}</address>
            </div>
          </div>
          <div className="westwood-contact-item">
            <span className="westwood-contact-icon"><PhoneIcon /></span>
            <div>
              <span className="westwood-label">Talk to the shop</span>
              <a href={phoneHref}>{phone}</a>
            </div>
          </div>
          <a className="westwood-map-link" href={directionsHref} target="_blank" rel="noreferrer">
            Open in Maps <ArrowIcon />
          </a>
        </section>

        <section className="westwood-details">
          <div className="westwood-section-intro">
            <p className="westwood-eyebrow">The useful stuff</p>
            <h2>Clear details.<br /><em>Less guesswork.</em></h2>
            <p>
              The final site can make the visit feel straightforward without
              asking customers to hunt for the basics.
            </p>
          </div>
          <div className="westwood-confirm-list">
            <article className="westwood-confirm-card">
              <span className="westwood-card-index">01 / HOURS</span>
              <h3>When should we visit?</h3>
              <p>What weekly hours should we publish?</p>
              <small>Owner to confirm before launch.</small>
            </article>
            <article className="westwood-confirm-card westwood-confirm-card-dark">
              <span className="westwood-card-index">02 / SERVICES</span>
              <h3>What should we bring?</h3>
              <p>Which services or care details should we list?</p>
              <small>Owner to confirm before launch.</small>
            </article>
          </div>
        </section>

        <section className="westwood-note-section">
          <div className="westwood-note-mark" aria-hidden="true">“</div>
          <div>
            <p className="westwood-eyebrow">A flexible starting point</p>
            <blockquote>
              “A polished front door for the information that matters most.”
            </blockquote>
            <p className="westwood-note-caption">
              This is a visual direction, not an official Westwood Dry Cleaners
              website. The owner would approve all copy, hours and service details.
            </p>
          </div>
        </section>

        <section className="westwood-final">
          <p className="westwood-eyebrow">Start with the essentials</p>
          <h2>Come by<br /><em>Westwood.</em></h2>
          <div className="westwood-final-actions">
            <a className="westwood-button westwood-button-light" href={directionsHref} target="_blank" rel="noreferrer">
              Directions <ArrowIcon />
            </a>
            <a className="westwood-final-phone" href={phoneHref}>{phone}</a>
          </div>
        </section>
      </main>

      <footer className="westwood-footer">
        <div>
          <strong>Westwood Dry Cleaners</strong>
          <span>{address}</span>
        </div>
        <div>
          <span>Concept by Cream City Web Co.</span>
          <span>Unofficial · no business affiliation or approval</span>
        </div>
      </footer>
      <a className="westwood-mobile-call" href={phoneHref}>
        <PhoneIcon /> Call {phone}
      </a>
    </div>
  );
}
