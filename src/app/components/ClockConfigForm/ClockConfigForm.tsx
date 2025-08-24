'use client'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setHourColor, setMinuteColor, setSecondColor, setBackgroundColor, setClockFrame, setHourMarks } from '@/app/store/slices/clockSlice';
import "./style.css";

interface ClockConfigFormProps {
  onConfigChange?: (config: { hourColor: string; minuteColor: string; secondColor: string }) => void
}

const ClockConfigForm = ({ onConfigChange }: ClockConfigFormProps) => {
  const dispatch = useDispatch();
  const { hourColor, minuteColor, secondColor, backgroundColor, clockFrame, hourMarks } = useSelector((state: any) => state.clock);
  return (
    <form className="clock-config-form">
      <div>
        <h2>Select Colors</h2>
        <label>
          Hour Color:{" "}
          <input
            type="color"
            value={hourColor}
            onChange={e => dispatch(setHourColor(e.target.value))}
          />
        </label>
        <label>
          Minute Color:{" "}
          <input
            type="color"
            value={minuteColor}
            onChange={e => dispatch(setMinuteColor(e.target.value))}
          />
        </label>
        <label>
          Second Color:{" "}
          <input
            type="color"
            value={secondColor}
            onChange={e => dispatch(setSecondColor(e.target.value))}
          />
        </label>
        <label>
          Background Color:{" "}
          <input
            type="color"
            value={backgroundColor}
            onChange={e => dispatch(setBackgroundColor(e.target.value))}
          />
        </label>
        <label>
          Clock Frame Color:{" "}
          <input
            type="color"
            value={clockFrame}
            onChange={e => dispatch(setClockFrame(e.target.value))}
          />
        </label>
        <label>
          Hour Marks Color:{" "}
          <input
            type="color"
            value={hourMarks}
            onChange={e => dispatch(setHourMarks(e.target.value))}
          />
        </label>
      </div>
    </form>
  );
};

export default ClockConfigForm;
