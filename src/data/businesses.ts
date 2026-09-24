export type BusinessHour = {
  day: string;
  hours: string;
  note?: string;
};

export type BusinessGalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export type BusinessConfig = {
  name: string;
  category: string;
  locationLabel: string;
  tagline: string;
  servicesIntro: string;
  walkInLabel: string;
  hoursSummary: string;
  phone: string;
  phoneHref: string;
  address: string;
  directionsHref: string;
  hours: BusinessHour[];
  hoursNote: string;
  services: string[];
  gallery: BusinessGalleryItem[];
  conceptLabel: string;
  conceptNotice: string;
};

export const timeToCutBarbershop: BusinessConfig = {
  name: "Time to Cut Barbershop",
  category: "Barbershop",
  locationLabel: "Milwaukee / South Side",
  tagline:
    "Haircuts and grooming services for men and women, with walk-ins welcome.",
  servicesIntro:
    "From a clean line-up to a little more time in the chair, the shop offers a range of grooming services for men and women.",
  walkInLabel: "Walk-ins welcome",
  hoursSummary: "Tue–Sat 10 AM–8 PM · Sun 10 AM–6 PM",
  phone: "(414) 312-8229",
  phoneHref: "tel:+14143128229",
  address: "3877 S 27th St, Milwaukee, WI 53221",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=3877+S+27th+St+Milwaukee+WI+53221",
  hours: [
    { day: "Monday", hours: "Closed" },
    { day: "Tuesday", hours: "10:00 AM–8:00 PM" },
    { day: "Wednesday", hours: "10:00 AM–8:00 PM" },
    { day: "Thursday", hours: "10:00 AM–8:00 PM" },
    { day: "Friday", hours: "10:00 AM–8:00 PM" },
    { day: "Saturday", hours: "10:00 AM–8:00 PM" },
    { day: "Sunday", hours: "10:00 AM–6:00 PM" },
  ],
  hoursNote:
    "Hours come from the business's published site and Google listing as of 24 Sep 2026. Call to confirm before visiting.",
  services: [
    "Men's and women's haircuts",
    "Line-up and straight-razor shaves",
    "Scissor-focused cuts",
    "Traditional shaves",
    "Facials",
    "Waxing",
    "Perms",
    "Hair coloring",
  ],
  gallery: [
    {
      src: "/images/barbershop-clippers.png",
      alt: "Generic illustrative image of barber clippers on a counter",
      caption: "Generic visual concept — not a photo of this shop.",
    },
    {
      src: "/images/barbershop-chair.png",
      alt: "Generic illustrative image of an empty barber chair",
      caption: "Generic visual concept — not a photo of this shop.",
    },
    {
      src: "/images/barbershop-storefront.png",
      alt: "Generic illustrative image with a barber pole by a window",
      caption: "Generic visual concept — not a photo of this shop.",
    },
  ],
  conceptLabel: "Unofficial concept",
  conceptNotice:
    "Unofficial concept — a design mockup by Cream City Web Co. We are not affiliated with Time to Cut Barbershop.",
};
