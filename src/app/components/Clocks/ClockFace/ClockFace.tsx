import { RootState } from "@/app/store";
import { HOUR_MARKS, getCurrentTime } from "@/app/utils/clock-helpers";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

interface ClockFaceProps {
  centerX?: number;
  centerY?: number;
}

const ClockFace = ({ centerX = 100, centerY = 100 }: ClockFaceProps) => {
  const hourColor = useSelector((state: RootState) => state.clock.hourColor);
  const minuteColor = useSelector((state: RootState) => state.clock.minuteColor);
  const secondColor = useSelector((state: RootState) => state.clock.secondColor);
  const hourMarks = useSelector((state: RootState) => state.clock.hourMarks);
  const centerDotColor = useSelector((state: RootState) => state.clock.centerDotColor);

  const hourRef = useRef<SVGLineElement>(null);
  const minuteRef = useRef<SVGLineElement>(null);
  const secondRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const updateClock = () => {
      const { hour: hrAngle, minute: minAngle, second: secAngle } = getCurrentTime();
      const rotate = (angle: number) => `rotate(${angle} ${centerX} ${centerY})`;
      hourRef?.current?.setAttribute("transform", rotate(hrAngle));
      minuteRef?.current?.setAttribute("transform", rotate(minAngle));
      secondRef?.current?.setAttribute("transform", rotate(secAngle));
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [centerX, centerY]);


  const getHourMarks = () => HOUR_MARKS.map((mark, i) => (
    <line
      key={i}
      x1={mark.x1}
      y1={mark.y1}
      x2={mark.x2}
      y2={mark.y2}
      stroke={hourMarks}
      strokeWidth="4"
    />
  ))

  return (
    <>
      {getHourMarks()}
      {/* Hour, minute, second hands */}
      <line ref={hourRef} x1={centerX} y1={centerY} x2={centerX} y2={centerY - 45} stroke={hourColor} strokeWidth={7} strokeLinecap="round" />
      <line ref={minuteRef} x1={centerX} y1={centerY} x2={centerX} y2={centerY - 45} stroke={minuteColor} strokeWidth={5} strokeLinecap="round" />
      <line ref={secondRef} x1={centerX} y1={centerY} x2={centerX} y2={centerY - 45} stroke={secondColor} strokeWidth={1} strokeLinecap="round" />
      {/* Center dot */}
      <circle cx={centerX} cy={centerY} r="6" fill={centerDotColor} />
    </>
  );
};

export default ClockFace;
