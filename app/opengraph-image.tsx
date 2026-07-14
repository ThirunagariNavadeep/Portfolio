import { ImageResponse } from "next/og";

export const alt =
  "Navadeep Thirunagari — Data Analyst, Analytics Engineer and AI Developer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #020617 0%, #000000 45%, #071827 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.08,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Cyan glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            left: 250,
            top: 150,
            borderRadius: "50%",
            background: "rgba(6, 182, 212, 0.12)",
            filter: "blur(100px)",
          }}
        />

        {/* Main Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "70px 85px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(34, 211, 238, 0.5)",
                borderRadius: 18,
                background: "rgba(6, 182, 212, 0.1)",
                color: "#22d3ee",
                fontSize: 34,
                fontWeight: 800,
              }}
            >
              N
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
              }}
            >
              Navadeep Thirunagari
            </div>
          </div>

          {/* Label */}
          <div
            style={{
              display: "flex",
              marginTop: 55,
              color: "#22d3ee",
              fontSize: 19,
              fontWeight: 700,
              letterSpacing: "6px",
            }}
          >
            DATA • INTELLIGENCE • PRODUCTS
          </div>

          {/* Main Heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: 24,
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 900,
              letterSpacing: "-3px",
            }}
          >
            <div style={{ display: "flex" }}>
              Transforming Data into
            </div>

            <div
              style={{
                display: "flex",
                color: "#22d3ee",
              }}
            >
              Intelligent Products.
            </div>
          </div>

          {/* Role */}
          <div
            style={{
              display: "flex",
              marginTop: 40,
              color: "#a1a1aa",
              fontSize: 24,
            }}
          >
            Data Analyst • Analytics Engineer • AI Developer
          </div>

          {/* Stack */}
          <div
            style={{
              display: "flex",
              gap: 14,
              marginTop: 34,
            }}
          >
            {["Power BI", "SQL", "Python", "Machine Learning"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    display: "flex",
                    padding: "10px 18px",
                    border:
                      "1px solid rgba(34, 211, 238, 0.25)",
                    borderRadius: 999,
                    background: "rgba(6, 182, 212, 0.08)",
                    color: "#67e8f9",
                    fontSize: 17,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
