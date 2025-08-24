import React from "react";
import RoundClock from "@/app/components/RoundClock";
import ClockConfigForm from "@/app/components/ClockConfigForm";

const Clock = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ClockConfigForm />
      <RoundClock />
    </div>
  );
};

export default Clock;