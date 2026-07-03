import { siteInfo } from "@/data/nav";

const trustPoints = [
  "Response within 24 hours, usually faster",
  "No spam calls — we only follow up on what you asked",
  "Verified drivers & vetted travel partners only",
];

export default function ContactPanel() {
  return (
    <div className="rounded-2xl bg-ink p-8 text-sand">
      <h2 className="font-display text-xl font-semibold">Talk to us directly</h2>
      <p className="mt-2 text-sm text-sand/70">
        Prefer a quicker chat? Reach the travel desk directly.
      </p>

      <ul className="mt-6 flex flex-col gap-4 text-sm">
        <li className="flex items-center gap-3">
          <IconWrap>
            <path
              d="M6 3h3l1.5 5-2 1.5a11 11 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2C10.5 20 4 13.5 4 5a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </IconWrap>
          <a href={siteInfo.phoneHref} className="hover:text-ember-400">
            {siteInfo.phoneDisplay}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <IconWrap>
            <path
              d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </IconWrap>
          <a
            href={siteInfo.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="hover:text-ember-400"
          >
            Chat on WhatsApp
          </a>
        </li>
        <li className="flex items-center gap-3">
          <IconWrap>
            <path
              d="M4 6l8 6 8-6M4 6h16v12H4V6Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </IconWrap>
          <a href={`mailto:${siteInfo.email}`} className="hover:text-ember-400">
            {siteInfo.email}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <IconWrap>
            <path
              d="M12 21s7-6.5 7-11.5A7 7 0 0 0 5 9.5C5 14.5 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.5" />
          </IconWrap>
          <span className="text-sand/80">
            {siteInfo.city} · {siteInfo.hours}
          </span>
        </li>
      </ul>

      <ul className="mt-8 flex flex-col gap-3 border-t border-sand/10 pt-6 text-xs text-sand/60">
        {trustPoints.map((point) => (
          <li key={point} className="flex items-start gap-2">
            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-ember-400" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sand/10 text-ember-400">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
        {children}
      </svg>
    </span>
  );
}
