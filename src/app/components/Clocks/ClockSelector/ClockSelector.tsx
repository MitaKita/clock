import { ClockType, RootState } from "@/app/store";
import { useSelector } from "react-redux";
import NoFrameClock from "@/app/components/Clocks/NoFrameClock";
import SquareClock from "@/app/components/Clocks/SquareClock";
import RoundClock from "@/app/components/Clocks/RoundClock";

const ClockSelector = () => {
  const clockType = useSelector((state: RootState) => state.clock.clockType);
  return (
    <div
      style={{
        width: 240,
        height: 240,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {clockType === ClockType.Round && <RoundClock />}
      {clockType === ClockType.Square && <SquareClock />}
      {clockType === ClockType.NoFrame && <NoFrameClock />}
    </div>
  );
};

export default ClockSelector;
