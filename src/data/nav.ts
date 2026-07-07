export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/enquiry", label: "Enquiry" },
] as const;

// TODO: swap in the production domain once Akshar Travels' site is deployed
export const siteUrl = "https://www.akshartravels.in";

export const siteInfo = {
  name: "Akshar",
  nameSuffix: "Travels",
  tagline: "Your city, any city — one trusted cab away.",
  // TODO: swap in Akshar Travels' real business details before launch
  phoneDisplay: "+91 [PHONE]",
  phoneHref: "tel:+91[PHONE]",
  whatsappHref: "https://wa.me/91[PHONE]",
  email: "[EMAIL]@akshartravels.in",
  city: "[CITY], [STATE]",
  hours: "Mon–Sun, 24/7",
} as const;
