'use client'
import React from "react";
import RoundClock from "@/app/components/Clocks/RoundClock";
import ClockConfigForm from "@/app/components/ClockConfigForm";
import SquareClock from "@/app/components/Clocks/SquareClock/SquareClock";
import { useSelector } from "react-redux";
import { ClockType, RootState } from "@/app/store";
import FragmentedClock from "@/app/components/Clocks/FragmentedClock/FragmentedClock";
import NoFrameClock from "../components/Clocks/NoFrameClock";
import ClockSelector from "@/app/components/Clocks/ClockSelector";

const Clock = () => {
  const clockType = useSelector((state: RootState) => state.clock.clockType);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <ClockConfigForm />
      <ClockSelector />
    </div>
  );
};

export default Clock;