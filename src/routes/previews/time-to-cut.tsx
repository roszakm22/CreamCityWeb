import { createFileRoute } from "@tanstack/react-router";

import { BusinessTemplate } from "~/components/BusinessTemplate";
import { timeToCutBarbershop } from "~/data/businesses";

export const Route = createFileRoute("/previews/time-to-cut")({
  head: () => ({
    meta: [
      { title: "Time to Cut Barbershop — Unofficial Concept" },
      {
        name: "description",
        content: "An unofficial design concept prepared by Cream City Web Co.",
      },
      { name: "robots", content: "noindex, nofollow, noarchive" },
    ],
  }),
  component: TimeToCutPreview,
});

function TimeToCutPreview() {
  return <BusinessTemplate business={timeToCutBarbershop} />;
}
