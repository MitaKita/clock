import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ClockState {
  hourColor: string;
  minuteColor: string;
  secondColor: string;
  backgroundColor: string;
  clockFrame: string;
  hourMarks: string;
}

const initialState: ClockState = {
  hourColor: "#333333",
  minuteColor: "#666666",
  secondColor: "#e33333",
  backgroundColor: "#ffffff",
  clockFrame: "#333333",
  hourMarks: "#333333",
};

const clockSlice = createSlice({
  name: "clock",
  initialState,
  reducers: {
    setHourColor(state, action: PayloadAction<string>) {
      state.hourColor = action.payload;
    },
    setMinuteColor(state, action: PayloadAction<string>) {
      state.minuteColor = action.payload;
    },
    setSecondColor(state, action: PayloadAction<string>) {
      state.secondColor = action.payload;
    },
    setBackgroundColor(state, action: PayloadAction<string>) {
      state.backgroundColor = action.payload;
    },
    setClockFrame(state, action: PayloadAction<string>) {
      state.clockFrame = action.payload;
    },
    setHourMarks(state, action: PayloadAction<string>) {
      state.hourMarks = action.payload;
    },
    setAllColors(state, action: PayloadAction<Partial<ClockState>>) {
      return { ...state, ...action.payload };
    },
  },
});

export const {
  setHourColor,
  setMinuteColor,
  setSecondColor,
  setBackgroundColor,
  setClockFrame,
  setHourMarks,
  setAllColors,
} = clockSlice.actions;

export default clockSlice.reducer;
