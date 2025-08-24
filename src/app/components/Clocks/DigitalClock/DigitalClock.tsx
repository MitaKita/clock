

import { RootState } from "@/app/store";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const pad = (n: number) => n.toString().padStart(2, "0");

const DigitalClock = () => {
  const hourColor = useSelector((state: RootState) => state.clock.hourColor);
  const minuteColor = useSelector((state: RootState) => state.clock.minuteColor);
  const secondColor = useSelector((state: RootState) => state.clock.secondColor);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <div className="flex flex-col items-center justify-center w-[700px] h-[240px] bg-black rounded-lg shadow-lg">
      <span className="text-6xl font-mono text-green-400 select-none">
        <span style={{ color: hourColor }}>{hours}</span>:
        <span style={{ color: minuteColor }}>{minutes}</span>:
        <span style={{ color: secondColor }}>{seconds}</span>
      </span>
    </div>
  );
};

export default DigitalClock;
