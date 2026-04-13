"use client";

export function DotGrid() {
  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at center, rgba(198, 241, 53, 0.025) 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px",
      }}
    />
  );
}
