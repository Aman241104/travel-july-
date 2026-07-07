import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          borderRadius: 14,
        }}
      >
        <svg width="38" height="38" viewBox="0 0 26 26" fill="none">
          <path
            d="M3 20c3-1 5-4 6.5-7.5C11 9 13 4 17 4c2.5 0 3.5 2 3 4.5-1 5-6 9-13 10.5"
            stroke="#e07a52"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <circle cx="20" cy="7" r="2.6" fill="#e07a52" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
