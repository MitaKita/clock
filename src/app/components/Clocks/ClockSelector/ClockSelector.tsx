'use client'
import { ClockType, RootState } from "@/app/store";
import { useSelector } from "react-redux";
import NoFrameClock from "@/app/components/Clocks/NoFrameClock";
import SquareClock from "@/app/components/Clocks/SquareClock";
import RoundClock from "@/app/components/Clocks/RoundClock";
import DigitalClock from "@/app/components/Clocks/DigitalClock";

const ClockSelector = () => {
  const clockType = useSelector((state: RootState) => state.clock.clockType);
  const className = clockType === ClockType.Digital ? "w-[700px] h-[240px]" : "w-[240px] h-[240px] flex items-center justify-center relative";
  return (
    <div className={className}>
      {clockType === ClockType.Round && <RoundClock />}
      {clockType === ClockType.Square && <SquareClock />}
      {clockType === ClockType.NoFrame && <NoFrameClock />}
      {clockType === ClockType.Digital && <DigitalClock />}
    </div>
  );
};

export default ClockSelector;
