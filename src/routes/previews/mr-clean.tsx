import { createFileRoute } from "@tanstack/react-router";
import { LaundryConcept } from "~/components/LaundryConcept";
import { mrCleanLaundromat } from "~/data/businesses";

export const Route = createFileRoute("/previews/mr-clean")({
  head: () => ({
    meta: [
      { title: "MR CLEAN LAUNDROMAT — Unofficial Concept" },
      {
        name: "description",
        content: "An unofficial design concept prepared by Cream City Web Co.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: MrCleanPreview,
});

function MrCleanPreview() {
  return <LaundryConcept business={mrCleanLaundromat} />;
}
