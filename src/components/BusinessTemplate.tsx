import type { BusinessConfig } from "~/data/businesses";

type BusinessTemplateProps = {
  business: BusinessConfig;
};

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-sm">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-sm">
      <path d="M6.6 3.6 9 3l2 4.7-1.8 1.5a15.8 15.8 0 0 0 5.6 5.6l1.5-1.8 4.7 2-.6 2.4a2.4 2.4 0 0 1-2.4 1.8C10.8 19.2 4.8 13.2 4.8 6a2.4 2.4 0 0 1 1.8-2.4Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-sm">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function ScissorsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-lg">
      <circle cx="6" cy="7" r="3" />
      <circle cx="6" cy="17" r="3" />
      <path d="m8.5 8.5 11 11M8.5 15.5l11-11" />
    </svg>
  );
}

function LaundryIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-lg">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <circle cx="8.5" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="11.5" cy="7.5" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-sm">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.2 2" />
    </svg>
  );
}

export function BusinessTemplate({ business }: BusinessTemplateProps) {
  return (
    <div className="business-page">
      <div className="concept-banner" role="note">
        <span className="concept-banner-mark">{business.conceptLabel}</span>
        <span>{business.conceptNotice}</span>
      </div>

      <header className="business-header">
        <a
          className="brand-lockup"
          href="#top"
          aria-label={`${business.name} home`}
        >
          <span className="brand-mark" aria-hidden="true">
            {business.category === "Laundromat" ? (
              <LaundryIcon />
            ) : (
              <ScissorsIcon />
            )}
          </span>
          <span>
            <span className="brand-name">
              {business.displayName ?? business.name}
            </span>
            <span className="brand-category">{business.category}</span>
          </span>
        </a>
        <a className="header-call" href={business.phoneHref}>
          <PhoneIcon />
          <span>Call {business.phone}</span>
        </a>
      </header>

      <main id="top">
        <section className="hero-section page-shell">
          <div className="hero-copy">
            <p className="eyebrow">{business.locationLabel}</p>
            <h1>
              {business.heroTitle}
              <br />
              <em>{business.heroEmphasis}</em>
            </h1>
            <p className="hero-tagline">{business.tagline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={business.phoneHref}>
                <PhoneIcon />
                {business.callLabel}
              </a>
              <a
                className="button button-secondary"
                href={business.directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                Get directions
                <ArrowUpRightIcon />
              </a>
              {business.booking ? (
                <div className="booking-action">
                  <a
                    className="button button-booking"
                    href={business.booking.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {business.booking.label}
                    <ArrowUpRightIcon />
                  </a>
                  <p>
                    Booking is handled by the shop&apos;s existing provider.
                  </p>
                </div>
              ) : null}
            </div>
            {business.walkInLabel ? (
              <p className="walk-in-note">
                <span className="pulse-dot" aria-hidden="true" />
                {business.walkInLabel}
              </p>
            ) : null}
          </div>
          <div className="hero-art" aria-label={business.heroImageAriaLabel}>
            <img src={business.gallery[0].src} alt={business.gallery[0].alt} />
            <div className="hero-art-label">
              <span>01</span>
              <span>{business.heroImageLabel}</span>
            </div>
          </div>
        </section>

        <section className="info-strip" aria-label="Business contact details">
          <div className="page-shell info-strip-inner">
            <div className="info-item">
              <span className="info-icon">
                <MapPinIcon />
              </span>
              <div>
                <span className="info-label">Find us</span>
                <address>{business.address}</address>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon">
                <ClockIcon />
              </span>
              <div>
                <span className="info-label">Hours</span>
                <span>{business.hoursSummary}</span>
              </div>
            </div>
            <a
              className="info-directions"
              href={business.directionsHref}
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <section className="services-section page-shell" id="services">
          <div className="section-intro">
            <p className="eyebrow">{business.servicesEyebrow}</p>
            <h2>
              {business.servicesTitle}
              <br />
              <em>{business.servicesEmphasis}</em>
            </h2>
          </div>
          <div className="services-content">
            {business.services.length > 0 ? (
              <>
                <p className="section-lede">{business.servicesIntro}</p>
                <ul className="service-list">
                  {business.services.map((service, index) => (
                    <li key={service}>
                      <span className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="confirmation-note">{business.servicesIntro}</p>
            )}
          </div>
        </section>

        <section className="gallery-section page-shell" id="gallery">
          <div className="gallery-heading">
            <div>
              <p className="eyebrow">The atmosphere</p>
              <h2>
                A little <em>inspiration.</em>
              </h2>
            </div>
            <p className="gallery-note">
              Illustrative images generated for this private concept. They do
              not depict the real shop, staff, or interior.
            </p>
          </div>
          <div className="gallery-grid">
            {business.gallery.map((item, index) => (
              <figure
                className={`gallery-card gallery-card-${index + 1}`}
                key={item.src}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="hours-section page-shell" id="hours">
          <div className="hours-card">
            <div className="hours-heading">
              <p className="eyebrow">{business.hoursEyebrow}</p>
              <h2>
                {business.hoursTitle}
                <br />
                <em>{business.hoursEmphasis}</em>
              </h2>
            </div>
            <div className="hours-list" aria-label="Weekly hours">
              {business.hours.length > 0 ? (
                business.hours.map((item) => (
                  <div
                    className={`hours-row${item.day === "Monday" ? " is-closed" : ""}`}
                    key={item.day}
                  >
                    <span>{item.day}</span>
                    <span>{item.hours}</span>
                  </div>
                ))
              ) : (
                <p className="confirmation-note">{business.hoursNote}</p>
              )}
              {business.hours.length > 0 ? (
                <p className="hours-note">{business.hoursNote}</p>
              ) : null}
            </div>
          </div>
        </section>

        <section className="final-cta page-shell">
          <p className="eyebrow">{business.finalEyebrow}</p>
          <h2>
            {business.finalTitle}
            <br />
            <em>{business.finalEmphasis}</em>
          </h2>
          <a className="button button-primary" href={business.phoneHref}>
            <PhoneIcon />
            {business.phone}
          </a>
        </section>
      </main>

      <footer className="business-footer">
        <div className="page-shell footer-inner">
          <div>
            <span className="footer-brand">{business.name}</span>
            <span className="footer-address">{business.address}</span>
          </div>
          <div className="footer-right">
            <span>
              Concept designed by <strong>Cream City Web Co.</strong>
            </span>
            <span className="footer-concept">Unofficial design concept</span>
          </div>
        </div>
      </footer>

      <a className="mobile-call-bar" href={business.phoneHref}>
        <PhoneIcon />
        <span>Call {business.phone}</span>
      </a>
    </div>
  );
}
