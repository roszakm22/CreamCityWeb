import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/concepts")({
  head: () => ({
    meta: [
      { title: "Design concepts — Cream City Web Co." },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "Unapproved, pre-production website concepts by Cream City Web Co.",
      },
    ],
  }),
  component: Concepts,
});

function Concepts() {
  return (
    <div className="agency-page">
      <header className="agency-header">
        <a className="agency-wordmark" href="/">Cream City Web Co.</a>
        <nav className="agency-nav" aria-label="Main navigation">
          <a href="/">Home</a>
        </nav>
      </header>
      <main className="concepts-main">
        <p className="eyebrow">Work in progress</p>
        <h1>Design concepts</h1>
        <div className="concepts-disclaimer" role="note">
          These are pre-production design concepts made by Cream City Web Co.
          They are not official websites and have not been approved by, or made
          in affiliation with, the businesses shown. Images are illustrative;
          business details should be confirmed with each business.
        </div>
        <div className="concepts-grid">
          <a className="concept-card" href="/previews/mr-clean">
            <span className="eyebrow">Laundromat concept</span>
            <strong>MR CLEAN LAUNDROMAT</strong>
            <span>View concept ↗</span>
          </a>
          <a className="concept-card" href="/previews/time-to-cut">
            <span className="eyebrow">Barbershop concept</span>
            <strong>Time to Cut Barbershop</strong>
            <span>View concept ↗</span>
          </a>
        </div>
      </main>
    </div>
  );
}
