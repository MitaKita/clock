import React from "react";
import RoundClock from "@/app/components/RoundClock";

const Clock = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <RoundClock />
    </div>
  );
};

export default Clock;