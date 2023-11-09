import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string[] | [];
  searchStep: number;
};

export const tripDetailsSlice = createSlice({
  name: "tripDetails",
  initialState: {
    place: "",
    interests: [],
    travellingWith: [],
    searchStep: 0,
  } as InitialState,
  reducers: {
    setSearchStep: (state, { payload }: PayloadAction<number>) => {
      if (payload < 0) {
        state.searchStep = 0;
        return;
      }
      if (payload > 2) {
        state.searchStep = 2;
        return;
      }
      state.searchStep = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchStep } = tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
