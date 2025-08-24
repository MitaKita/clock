import { ClockType, type RootState } from "@/app/store";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const SQUARE_CLOCK_SIZE = 240;

const SquareClock: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clockType = useSelector((state: RootState) => state.clock.clockType);
  const hourColor = useSelector((state: RootState) => state.clock.hourColor);
  const minuteColor = useSelector((state: RootState) => state.clock.minuteColor);
  const secondColor = useSelector((state: RootState) => state.clock.secondColor);
  const backgroundColor = useSelector((state: RootState) => state.clock.backgroundColor);
  const clockFrame = useSelector((state: RootState) => state.clock.clockFrame);
  const hourMarks = useSelector((state: RootState) => state.clock.hourMarks);
  const centerDotColor = useSelector((state: RootState) => state.clock.centerDotColor);

  useEffect(() => {
    const drawClock = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, SQUARE_CLOCK_SIZE, SQUARE_CLOCK_SIZE);

      // Draw background
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, SQUARE_CLOCK_SIZE, SQUARE_CLOCK_SIZE);

      // Draw square border
      ctx.strokeStyle = clockFrame;
      ctx.lineWidth = 4;
      ctx.strokeRect(2, 2, SQUARE_CLOCK_SIZE - 4, SQUARE_CLOCK_SIZE - 4);

      // Center
      const cx = SQUARE_CLOCK_SIZE / 2;
      const cy = SQUARE_CLOCK_SIZE / 2;
      const radius = SQUARE_CLOCK_SIZE * 0.4;

      // Draw hour marks
      ctx.save();
      ctx.translate(cx, cy);
      for (let i = 0; i < 12; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 6);
        ctx.beginPath();
        ctx.moveTo(0, -radius);
        ctx.lineTo(0, -radius + 15);
        ctx.strokeStyle = hourMarks;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();

      const now = new Date();
      const hour = now.getHours() % 12;
      const minute = now.getMinutes();
      const second = now.getSeconds();

      // Draw hour hand
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(
        ((hour + minute / 60) * Math.PI) / 6
      );
      ctx.beginPath();
      ctx.moveTo(0, 10);
      ctx.lineTo(0, -radius * 0.5);
      ctx.strokeStyle = hourColor;
      ctx.lineWidth = 6;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();

      // Draw minute hand
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(
        ((minute + second / 60) * Math.PI) / 30
      );
      ctx.beginPath();
      ctx.moveTo(0, 15);
      ctx.lineTo(0, -radius * 0.8);
      ctx.strokeStyle = minuteColor;
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();

      // Draw second hand
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((second * Math.PI) / 30);
      ctx.beginPath();
      ctx.moveTo(0, 20);
      ctx.lineTo(0, -radius * 0.9);
      ctx.strokeStyle = secondColor;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.restore();

      // Draw center dot
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, 2 * Math.PI);
      ctx.fillStyle = centerDotColor;
      ctx.fill();
    };

    drawClock();
    const interval = setInterval(drawClock, 1000);
    return () => clearInterval(interval);
  }, [hourColor, minuteColor, secondColor, backgroundColor, clockFrame, hourMarks, centerDotColor]);

  if (clockType !== ClockType.Square) {
    return null;
  }

  return (
    <div style={{ width: SQUARE_CLOCK_SIZE, height: SQUARE_CLOCK_SIZE, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas
        ref={canvasRef}
        width={SQUARE_CLOCK_SIZE}
        height={SQUARE_CLOCK_SIZE}
        style={{ display: "block", background: "#fff", borderRadius: 8 }}
        aria-label="Square analog clock"
      />
    </div>
  );
};

export default SquareClock;