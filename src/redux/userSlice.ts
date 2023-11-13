import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string[] | [];
  searchStep: number | undefined;
  numberOfSteps: number;
};

export const tripDetailsSlice = createSlice({
  name: "tripDetails",
  initialState: {
    place: "",
    interests: [],
    travellingWith: [],
    searchStep: 1,
    numberOfSteps: 4,
  } as InitialState,
  reducers: {
    setSearchStep: (state, { payload }: PayloadAction<number>) => {
      if (payload < 1 || payload > state.numberOfSteps) {
        return;
      }

      state.searchStep = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchStep } = tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
