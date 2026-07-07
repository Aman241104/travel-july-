import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#09090b",
          color: "#faf7f2",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <svg width="40" height="40" viewBox="0 0 26 26" fill="none">
            <path
              d="M3 20c3-1 5-4 6.5-7.5C11 9 13 4 17 4c2.5 0 3.5 2 3 4.5-1 5-6 9-13 10.5"
              stroke="#e07a52"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx="20" cy="7" r="2.6" fill="#e07a52" />
          </svg>
          <span
            style={{
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            Akshar
            <span
              style={{
                marginLeft: 8,
                fontSize: 18,
                color: "rgba(250,247,242,0.6)",
                letterSpacing: 4,
                textTransform: "uppercase",
              }}
            >
              Travels
            </span>
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 56,
            fontSize: 58,
            fontWeight: 600,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Outstation cabs, booked your way.
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "rgba(250,247,242,0.7)",
          }}
        >
          One-way &middot; Round trip &middot; Local &middot; Airport transfer
        </div>
      </div>
    ),
    { ...size },
  );
}
