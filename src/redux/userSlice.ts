import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string[] | [];
  searchStep: number | undefined;
  numberOfSteps: number;
  errorMessage: string | undefined;
};

export const tripDetailsSlice = createSlice({
  name: "tripDetails",
  initialState: {
    place: "",
    interests: [],
    travellingWith: [],
    searchStep: 1,
    numberOfSteps: 4,
    errorMessage: undefined,
  } as InitialState,
  reducers: {
    setSearchStep: (state, { payload }: PayloadAction<number>) => {
      if (payload < 1 || payload > state.numberOfSteps) {
        return;
      }

      state.searchStep = payload;
    },
    setPlace: (state, { payload }: PayloadAction<string>) => {
      console.log("payload", payload);
      state.place = payload;
    },
    setErrorMessage: (state, { payload }: PayloadAction<string>) => {
      state.errorMessage = payload;
    },

    setInterests: (state, { payload }: PayloadAction<string>) => {
      if (state.interests.includes(payload as never)) {
        const updatedInterest = (state.interests = state.interests.filter(
          (item) => item !== payload
        ));
        state.interests = updatedInterest;
      } else {
        state.interests = [...state.interests, payload];
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearchStep, setErrorMessage, setInterests, setPlace } =
  tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
