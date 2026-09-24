import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cream City Web Co. — Simple sites for local businesses" },
      {
        name: "description",
        content:
          "Simple, mobile-friendly static websites for independently owned Milwaukee-area businesses.",
      },
    ],
  }),
  component: AgencyHome,
});

function ArrowUpRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="icon icon-sm">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function AgencyHome() {
  return (
    <div className="agency-page">
      <header className="agency-header">
        <a className="agency-wordmark" href="#top">
          Cream City Web Co.
        </a>
        <nav className="agency-nav" aria-label="Main navigation">
          <a href="/concepts">Concepts</a>
        </nav>
      </header>

      <main className="agency-main" id="top">
        <section className="agency-hero">
          <div>
            <p className="eyebrow">Small site. Big welcome.</p>
            <h1>
              Make it easy
              <br />
              to find <em>you.</em>
            </h1>
          </div>
          <div className="agency-hero-copy">
            <p>
              We build simple, mobile-friendly static websites for independently
              owned Milwaukee-area businesses — the essentials, presented
              clearly.
            </p>
            <a className="button button-primary" href="#offer">
              See what is included
              <ArrowUpRightIcon />
            </a>
          </div>
        </section>

        <section className="agency-offer" id="offer">
          <article className="offer-card is-dark">
            <p className="eyebrow">One clear product</p>
            <h2>
              A useful home
              <br />
              on the web.
            </h2>
            <ul>
              <li>One to three focused pages</li>
              <li>Mobile-friendly design</li>
              <li>Click-to-call phone link</li>
              <li>Hours, address, directions, services, and gallery</li>
              <li>Hosting and up to two minor content updates each month</li>
            </ul>
          </article>
          <article className="offer-card">
            <p className="eyebrow">Straightforward pricing</p>
            <h2>
              <span className="price">
                $199 <small>setup</small>
              </span>
            </h2>
            <p>One-time setup for a simple static website.</p>
            <h2>
              <span className="price">
                $29 <small>/ month</small>
              </span>
            </h2>
            <p>
              Hosting and basic maintenance. Domain registration and renewal are
              separate and remain owned by the customer.
            </p>
          </article>
        </section>

        <section className="agency-contact" aria-labelledby="contact-heading">
          <p className="eyebrow">A place for your next step</p>
          <h2 id="contact-heading">
            Let&apos;s make your basics
            <br />
            easy to find.
          </h2>
          <p>Tell us about your business and what you need people to find.</p>
          <a className="contact-email" href="mailto:roszakm37@gmail.com">
            roszakm37@gmail.com
          </a>
        </section>
      </main>

      <footer className="agency-footer">
        <span>Cream City Web Co.</span>
        <span>Simple static websites for local businesses</span>
      </footer>
    </div>
  );
}
