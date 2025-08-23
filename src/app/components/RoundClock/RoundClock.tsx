'use client'
import React, { useEffect, useRef } from "react";
import { HOUR_MARKS, getCurrentTime } from "@/app/utils/clock-helpers";
import "./style.css";

interface RoundClockProps {
  hourColor?: string
  minuteColor?: string
  secondColor?: string
}
const RoundClock = ({ hourColor = '#333', minuteColor = '#666', secondColor = '#e33' }: RoundClockProps) => {
  const hourRef = useRef<SVGLineElement>(null);
  const minuteRef = useRef<SVGLineElement>(null);
  const secondRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const updateClock = () => {
      debugger
      const { hour: hrAngle, minute: minAngle, second: secAngle } = getCurrentTime();
      const rotate = (angle: number) => `rotate(${angle} 100 100)`;
      hourRef?.current?.setAttribute("transform", rotate(hrAngle));
      minuteRef?.current?.setAttribute("transform", rotate(minAngle));
      secondRef?.current?.setAttribute("transform", rotate(secAngle));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const getHourMarks = () => HOUR_MARKS.map((mark, i) => (
    <line
      key={i}
      x1={mark.x1}
      y1={mark.y1}
      x2={mark.x2}
      y2={mark.y2}
      stroke="#333"
      strokeWidth="4"
    />
  ))
  
  const getClock = () => {
    return <svg width="220" height="220" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="#fff" stroke="#333" strokeWidth="6" />
      {getHourMarks()}
      {/* Hour, minute, second hands */}
      <line ref={hourRef} x1="100" y1="100" x2="100" y2="55" stroke={hourColor} strokeWidth={7} strokeLinecap="round" />
      <line ref={minuteRef} x1="100" y1="100" x2="100" y2="55" stroke={minuteColor} strokeWidth={5} strokeLinecap="round" />
      <line ref={secondRef} x1="100" y1="100" x2="100" y2="55" stroke={secondColor} strokeWidth={1} strokeLinecap="round" />
      {/* Center dot */}
      <circle cx="100" cy="100" r="6" fill="#333" />
    </svg>
  }

  return (
    <div className="roundclock-container">
      {getClock()}      
    </div>
  );
};

export default RoundClock;