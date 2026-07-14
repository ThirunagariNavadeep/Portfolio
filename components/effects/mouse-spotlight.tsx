"use client";

import { useEffect, useState } from "react";

export function MouseSpotlight() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden md:block"
      style={{
        background: `radial-gradient(
          500px circle at ${position.x}px ${position.y}px,
          rgba(6, 182, 212, 0.08),
          transparent 45%
        )`,
      }}
    />
  );
}