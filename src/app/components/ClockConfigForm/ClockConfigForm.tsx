'use client'
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/app/store';
import { setHourColor, setMinuteColor, setSecondColor, setBackgroundColor, setClockFrame, setHourMarks, setClockType, setDotColor } from '@/app/store/slices/clockSlice';
import { ClockType } from '@/app/store/slices/clockSlice';

const ClockConfigForm = () => {
  const dispatch = useDispatch();
  const { hourColor, minuteColor, secondColor, backgroundColor, clockFrame, hourMarks, clockType, dotColor } = useSelector((state: RootState) => state.clock);
  const colorStyle = "font-bold flex items-center justify-between w-full gap-2"

  return (
    <form className="text-center">
      <div className="w-full mb-4 justify-center flex">
        <label className="font-bold flex items-center justify-between w-1/3 gap-2">
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
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <label className={colorStyle}>
          Hour Color:
          <input
            className="mr-2"
            type="color"
            value={hourColor}
            onChange={e => dispatch(setHourColor(e.target.value))}
          />
        </label>
        <label className={colorStyle}>
          Minute Color:
          <input
            className="mr-2"
            type="color"
            value={minuteColor}
            onChange={e => dispatch(setMinuteColor(e.target.value))}
          />
        </label>
        <label className={colorStyle}>
          Second Color:
          <input
            className="mr-2"
            type="color"
            value={secondColor}
            onChange={e => dispatch(setSecondColor(e.target.value))}
          />
        </label>
        <label className={colorStyle}>
          Background Color:
          <input
            className="mr-2"
            type="color"
            value={backgroundColor}
            onChange={e => dispatch(setBackgroundColor(e.target.value))}
          />
        </label>
        <label className={colorStyle}>
          Clock Frame Color:
          <input
            className="mr-2"
            type="color"
            value={clockFrame}
            onChange={e => dispatch(setClockFrame(e.target.value))}
          />
        </label>
        <label className={colorStyle}>
          Hour Marks Color:
          <input
            className="mr-2"
            type="color"
            value={hourMarks}
            onChange={e => dispatch(setHourMarks(e.target.value))}
          />
        </label>

      </div>
        {
          clockType === ClockType.Digital && (
            <div className="w-full mb-4 mt-4 justify-center flex">
              <div>
                        <label className="font-bold flex items-center w-1/3">
                          Dot Color:
                          <input
                            type="color"
                            value={dotColor}
                            onChange={e => dispatch(setDotColor(e.target.value))}
                          />
                        </label>
              </div>
            </div>
        )}
    </form>
  );
};

export default ClockConfigForm;
