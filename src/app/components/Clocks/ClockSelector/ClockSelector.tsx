'use client'
import { ClockType, RootState } from "@/app/store";
import { useSelector } from "react-redux";
import NoFrameClock from "@/app/components/Clocks/NoFrameClock";
import SquareClock from "@/app/components/Clocks/SquareClock";
import RoundClock from "@/app/components/Clocks/RoundClock";

const ClockSelector = () => {
  const clockType = useSelector((state: RootState) => state.clock.clockType);
  return (
    <div className="w-[240px] h-[240px] flex items-center justify-center relative">
      {clockType === ClockType.Round && <RoundClock />}
      {clockType === ClockType.Square && <SquareClock />}
      {clockType === ClockType.NoFrame && <NoFrameClock />}
    </div>
  );
};

export default ClockSelector;
