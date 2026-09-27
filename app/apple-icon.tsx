import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#16233A",
        }}
      >
        <span
          style={{
            fontFamily: "Georgia, serif",
            fontSize: 68,
            color: "#FAF6EF",
            lineHeight: 1,
          }}
        >
          BK
        </span>
      </div>
    ),
    { ...size },
  );
}
