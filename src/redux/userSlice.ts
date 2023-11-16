import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string;
  searchStep: number | undefined;
  numberOfSteps: number;
  errorMessage: string | undefined;
  loading: boolean;
};

export const tripDetailsSlice = createSlice({
  name: "tripDetails",
  initialState: {
    place: "",
    interests: [],
    travellingWith: undefined,
    searchStep: 1,
    numberOfSteps: 4,
    errorMessage: undefined,
    loading: false,
  } as InitialState,
  reducers: {
    setSearchStep: (state, { payload }: PayloadAction<number>) => {
      if (payload < 1 || payload > state.numberOfSteps) {
        return;
      }
      if (payload < state.searchStep) {
        state.searchStep = payload;
        return;
      }
      if (state.searchStep === 1 && payload === 2) {
        state.searchStep = payload;
        return;
      }
      // If on the interest place and the user has not selected any interest, set an error message
      if (payload === 3 && state.interests.length === 0) {
        state.errorMessage = "Please select at least one interest";
        return;
      }
      if (payload === 3 && state.interests.length > 0) {
        state.searchStep = payload;
      }

      // Traveling with step
      if (payload === 4 && state.travellingWith.length === 0) {
        state.errorMessage = "Please select at least one traveller";
        return;
      }
      if (payload === 4 && state.travellingWith.length > 0) {
        state.searchStep = payload;

        state.loading = true;
      }
      // need to make the api call here, can i do async from a reducer??
    },
    setPlace: (state, { payload }: PayloadAction<string>) => {
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
        state.errorMessage = undefined;
      }
    },
    setSelectTravellingWith: (state, { payload }: PayloadAction<string>) => {
      if (state.travellingWith === payload) {
        state.travellingWith = undefined;
      } else {
        state.travellingWith = payload;
        state.errorMessage = undefined;
      }
    },
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
  },
});

export const {
  setSearchStep,
  setErrorMessage,
  setInterests,
  setPlace,

  setSelectTravellingWith,
  setLoading,
} = tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
