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
  displayName?: string;
  category: string;
  locationLabel: string;
  heroTitle: string;
  heroEmphasis: string;
  heroImageLabel: string;
  heroImageAriaLabel: string;
  tagline: string;
  callLabel: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesEmphasis: string;
  servicesIntro: string;
  walkInLabel?: string;
  hoursSummary: string;
  hoursEyebrow: string;
  hoursTitle: string;
  hoursEmphasis: string;
  finalEyebrow: string;
  finalTitle: string;
  finalEmphasis: string;
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
  booking?: {
    label: string;
    url: string;
  };
};

export const timeToCutBarbershop: BusinessConfig = {
  name: "Time to Cut Barbershop",
  category: "Barbershop",
  locationLabel: "Milwaukee / South Side",
  heroTitle: "Look sharp.",
  heroEmphasis: "Feel ready.",
  heroImageLabel: "Crafted for your next cut",
  heroImageAriaLabel: "Generic illustrative barber shop image",
  tagline:
    "Haircuts and grooming services for men and women, with walk-ins welcome.",
  callLabel: "Call the shop",
  servicesEyebrow: "The menu",
  servicesTitle: "Good grooming,",
  servicesEmphasis: "your way.",
  servicesIntro:
    "From a clean line-up to a little more time in the chair, the shop offers a range of grooming services for men and women.",
  walkInLabel: "Walk-ins welcome",
  hoursSummary: "Tue–Sat 10 AM–8 PM · Sun 10 AM–6 PM",
  hoursEyebrow: "Plan your visit",
  hoursTitle: "Hours that are",
  hoursEmphasis: "easy to find.",
  finalEyebrow: "Ready when you are",
  finalTitle: "Make time",
  finalEmphasis: "to cut.",
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
      src: "/images/barbershop-clippers.webp",
      alt: "Generic illustrative image of barber clippers on a counter",
      caption: "Generic visual concept — not a photo of this shop.",
    },
    {
      src: "/images/barbershop-chair.webp",
      alt: "Generic illustrative image of an empty barber chair",
      caption: "Generic visual concept — not a photo of this shop.",
    },
    {
      src: "/images/barbershop-storefront.webp",
      alt: "Generic illustrative image with a barber pole by a window",
      caption: "Generic visual concept — not a photo of this shop.",
    },
  ],
  conceptLabel: "Unofficial concept",
  conceptNotice:
    "Unofficial concept — a design mockup by Cream City Web Co. We are not affiliated with Time to Cut Barbershop.",
  booking: {
    label: "Book online",
    url: "https://app.acuityscheduling.com/schedule.php?owner=28062419&ref=sched_block&isInConfig=false&calendarID=7967999",
  },
};

export const mrCleanLaundromat: BusinessConfig = {
  name: "MR CLEAN LAUNDROMAT",
  displayName: "Mr Clean Laundromat",
  category: "Laundromat",
  locationLabel: "Milwaukee",
  heroTitle: "A clearer place",
  heroEmphasis: "to start.",
  heroImageLabel: "Generic laundromat visual",
  heroImageAriaLabel: "Generic illustrative laundromat interior",
  tagline: "A simple place to find the essentials.",
  callLabel: "Call the laundromat",
  servicesEyebrow: "Before launch",
  servicesTitle: "What services",
  servicesEmphasis: "should we list?",
  servicesIntro:
    "What services should we list here? Details come from the owner.",
  hoursSummary: "What hours should we publish?",
  hoursEyebrow: "Before launch",
  hoursTitle: "What hours",
  hoursEmphasis: "should we publish?",
  finalEyebrow: "A simple next step",
  finalTitle: "Make the basics",
  finalEmphasis: "easy to find.",
  phone: "(414) 975-5803",
  phoneHref: "tel:+14149755803",
  address: "4778 N 51st Blvd, Milwaukee, WI 53218",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=4778+N+51st+Blvd+Milwaukee+WI+53218",
  hours: [],
  hoursNote:
    "What weekly schedule should we show? To be confirmed with the owner.",
  services: [],
  gallery: [
    {
      src: "/images/laundromat-interior.webp",
      alt: "Generic illustrative image of a bright laundromat interior",
      caption: "Generic illustration — not a photo of MR CLEAN LAUNDROMAT.",
    },
    {
      src: "/images/laundromat-towels.webp",
      alt: "Generic illustrative image of neatly folded towels",
      caption: "Generic illustration — not a photo of MR CLEAN LAUNDROMAT.",
    },
    {
      src: "/images/laundromat-storefront.webp",
      alt: "Generic illustrative image of a laundromat storefront",
      caption: "Generic illustration — not a photo of MR CLEAN LAUNDROMAT.",
    },
  ],
  conceptLabel: "Unofficial concept",
  conceptNotice:
    "Unofficial concept — a design mockup by Cream City Web Co. We are not affiliated with MR CLEAN LAUNDROMAT.",
};
