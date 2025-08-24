'use client'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/app/store';
import { setHourColor, setMinuteColor, setSecondColor, setBackgroundColor, setClockFrame, setHourMarks, setClockType } from '@/app/store/slices/clockSlice';
import { ClockType } from '@/app/store/slices/clockSlice';

const ClockConfigForm = () => {
  const dispatch = useDispatch();
  const { hourColor, minuteColor, secondColor, backgroundColor, clockFrame, hourMarks, clockType } = useSelector((state: RootState) => state.clock);
  return (
    <form className="text-center">
      <div className="flex flex-wrap justify-center gap-x-2 gap-y-2">
        <label className="font-bold mr-6 flex items-center gap-2">
          Type:
          <select
            className="ml-1 px-2 py-1 rounded border border-gray-300"
            value={clockType}
            onChange={e => dispatch(setClockType(e.target.value as ClockType))}
          >
            <option value={ClockType.Round}>Round</option>
            <option value={ClockType.Square}>Square</option>
            <option value={ClockType.NoFrame}>No Frame</option>
            <option value={ClockType.Digital}>Digital</option>
          </select>
        </label>
        <label className="font-bold mr-6 flex items-center gap-2">
          Hour Color:
          <input
            className="mr-2"
            type="color"
            value={hourColor}
            onChange={e => dispatch(setHourColor(e.target.value))}
          />
        </label>
        <label className="font-bold mr-6 flex items-center gap-2">
          Minute Color:
          <input
            className="mr-2"
            type="color"
            value={minuteColor}
            onChange={e => dispatch(setMinuteColor(e.target.value))}
          />
        </label>
        <label className="font-bold mr-6 flex items-center gap-2">
          Second Color:
          <input
            className="mr-2"
            type="color"
            value={secondColor}
            onChange={e => dispatch(setSecondColor(e.target.value))}
          />
        </label>
        <label className="font-bold mr-6 flex items-center gap-2">
          Background Color:
          <input
            className="mr-2"
            type="color"
            value={backgroundColor}
            onChange={e => dispatch(setBackgroundColor(e.target.value))}
          />
        </label>
        <label className="font-bold mr-6 flex items-center gap-2">
          Clock Frame Color:
          <input
            className="mr-2"
            type="color"
            value={clockFrame}
            onChange={e => dispatch(setClockFrame(e.target.value))}
          />
        </label>
        <label className="font-bold flex items-center gap-2">
          Hour Marks Color:
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
