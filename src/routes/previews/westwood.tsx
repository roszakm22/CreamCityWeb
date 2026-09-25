import { createFileRoute } from "@tanstack/react-router";
import { WestwoodConcept } from "~/components/WestwoodConcept";

export const Route = createFileRoute("/previews/westwood")({
  head: () => ({
    meta: [
      { title: "Westwood Dry Cleaners — Unofficial Concept" },
      {
        name: "description",
        content: "An unofficial design concept prepared by Cream City Web Co.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: WestwoodPreview,
});

function WestwoodPreview() {
  return <WestwoodConcept />;
}
