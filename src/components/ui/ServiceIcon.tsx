import type { Service } from "@/data/services";

const paths: Record<Service["icon"], string> = {
  car: "M4 16l1.5-5A2 2 0 0 1 7.4 9.5h9.2a2 2 0 0 1 1.9 1.4L20 16M4 16v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3M4 16h16M7 12.5h10M7 19v0M17 19v0",
  map: "M4 6l6-2 6 2 4-1v14l-4 1-6-2-6 2-4-1V5l4 1Zm6-2v16",
  hotel: "M4 20V9l7-4 7 4v11M4 20h16M9 20v-6h4v6M12 9h.01",
  plane: "M3 12l7-2 3-7 1.5.5-2 6.5 6 1.5.5 1.5-6.5 1-1 4-1.5-.5-.5-3.5-6 1.5-1-1.5Z",
  passport:
    "M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm6 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm-3.5 9c.4-1.7 1.8-2.5 3.5-2.5s3.1.8 3.5 2.5",
};

export default function ServiceIcon({
  icon,
  className,
}: {
  icon: Service["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d={paths[icon]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
