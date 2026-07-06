import type { Service } from "@/data/services";

const paths: Record<Service["icon"], string> = {
  car: "M4 16l1.5-5A2 2 0 0 1 7.4 9.5h9.2a2 2 0 0 1 1.9 1.4L20 16M4 16v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h10v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3M4 16h16M7 12.5h10M7 19v0M17 19v0",
  route:
    "M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm14-11a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6.8 15.5 13 9M15 8h2.5a2 2 0 0 1 2 2v.5",
  clock: "M12 7v5l3.5 2M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z",
  "plane-transfer":
    "M3 12l7-2 3-7 1.5.5-2 6.5 6 1.5.5 1.5-6.5 1-1 4-1.5-.5-.5-3.5-6 1.5-1-1.5Z",
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
