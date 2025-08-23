'use client'
import React, { useEffect, useRef } from "react";

const Clock = () => {
  const hourRef = useRef<SVGLineElement>(null);
  const minuteRef = useRef<SVGLineElement>(null);
  const secondRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const sec = now.getSeconds();
      const min = now.getMinutes();
      const hr = now.getHours() % 12;

      const secAngle = sec * 6;
      const minAngle = min * 6 + sec * 0.1;
      const hrAngle = hr * 30 + min * 0.5;

      if (hourRef.current) {
        hourRef.current.setAttribute(
          "transform",
          `rotate(${hrAngle} 100 100)`
        );
      }
      if (minuteRef.current) {
        minuteRef.current.setAttribute(
          "transform",
          `rotate(${minAngle} 100 100)`
        );
      }
      if (secondRef.current) {
        secondRef.current.setAttribute(
          "transform",
          `rotate(${secAngle} 100 100)`
        );
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 40 }}>
      <h1>Clock</h1>
      <svg width="220" height="220" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill="#fff" stroke="#333" strokeWidth="6" />
        {/* Hour marks */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const x1 = 100 + 75 * Math.sin(angle);
          const y1 = 100 - 75 * Math.cos(angle);
          const x2 = 100 + 85 * Math.sin(angle);
          const y2 = 100 - 85 * Math.cos(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#333"
              strokeWidth="4"
            />
          );
        })}
        {/* Hour hand */}
        <line
          ref={hourRef}
          x1="100"
          y1="100"
          x2="100"
          y2="55"
          stroke="#333"
          strokeWidth="7"
          strokeLinecap="round"
        />
        {/* Minute hand */}
        <line
          ref={minuteRef}
          x1="100"
          y1="100"
          x2="100"
          y2="35"
          stroke="#666"
          strokeWidth="5"
          strokeLinecap="round"
        />
        {/* Second hand */}
        <line
          ref={secondRef}
          x1="100"
          y1="100"
          x2="100"
          y2="25"
          stroke="#e33"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Center dot */}
        <circle cx="100" cy="100" r="6" fill="#333" />
      </svg>
    </div>
  );
};

export default Clock;