import ClockFace from "@/app/components/Clocks/ClockFace";


const FragmentedClock = () => {
  return (
    <svg width={240} height={240} viewBox="0 0 240 240">
      <ClockFace centerX={120} centerY={120} />
    </svg>
  );
};

export default FragmentedClock;
