import React from "react";
import ClockConfigForm from "@/app/components/ClockConfigForm";
import ClockSelector from "@/app/components/Clocks/ClockSelector";

const Clock = () => {
  return (
    <div className="flex flex-col items-center gap-8 m-6 m-6">
      <ClockConfigForm />
      <ClockSelector />
    </div>
  );
};

export default Clock;