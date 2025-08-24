import { ClockType, RootState } from "@/app/store";
import { useSelector } from "react-redux";
import ClockFace from "@/app/components/Clocks/ClockFace";

const NoFrameClock = () => {
  const clockType = useSelector((state: RootState) => state.clock.clockType);

  if (clockType !== ClockType.NoFrame) {
    return <></>;
  }

  return (
    <svg width="200" height="200">
      <ClockFace />
    </svg>
  );
};

export default NoFrameClock;
