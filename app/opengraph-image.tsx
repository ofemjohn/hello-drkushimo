import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// TODO: once a real portrait is supplied, swap the flat gradient below for
// that image (`background: url(...)` isn't supported in next/og — fetch the
// image and pass it as an <img> src instead).
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0D1522 0%, #16233A 55%, #3a3120 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", fontFamily: "Georgia, serif" }}>
          <span style={{ fontSize: 64, color: "#FAF6EF" }}>Dr. Bola&nbsp;</span>
          <span style={{ fontSize: 72, color: "#B4924B", fontStyle: "italic" }}>Kushimo</span>
        </div>
        <span
          style={{
            marginTop: 18,
            fontSize: 18,
            letterSpacing: 8,
            color: "#FAF6EF",
            opacity: 0.75,
            fontFamily: "Arial, sans-serif",
          }}
        >
          PUBLIC HEALTH SCHOLAR &middot; PASTOR &middot; AUTHOR
        </span>
      </div>
    ),
    { ...size },
  );
}
