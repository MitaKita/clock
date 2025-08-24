'use client'
import React from "react";
import { useSelector } from "react-redux";
import { ClockType, type RootState } from "@/app/store";
import ClockFace from "../ClockFace";

const RoundClock = () => {
  const clockType = useSelector((state: RootState) => state.clock.clockType);

  const backgroundColor = useSelector((state: RootState) => state.clock.backgroundColor);
  const clockFrame = useSelector((state: RootState) => state.clock.clockFrame);

  if (clockType !== ClockType.Round) {
    return <></>
  }

  return (
  <div className="flex flex-col items-center mt-10">
      <svg width="220" height="220" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="90" fill={backgroundColor} stroke={clockFrame} strokeWidth="6" />
        <ClockFace />
      </svg>    
    </div>
  );
};

export default RoundClock;