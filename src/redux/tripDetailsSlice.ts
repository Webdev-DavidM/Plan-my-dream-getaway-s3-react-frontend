import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string;
  searchStep: number | undefined;
  numberOfSteps: number;
  errorMessage: string | undefined;
  loading: boolean;
  tripRecommendation: any;
};

export const getRecommendations: any = createAsyncThunk<any>(
  "tripDetails/getRecommendations",
  async (data: any, { dispatch, getState }) => {
    const trip = getState();
    console.log("trip", trip);
    console.log("data", data);
    const { place, interests, travellers } = data;
    console.log("interests", interests);
    console.log("travellers", travellers);

    try {
      console.log(axios.defaults.timeout);
      axios.defaults.timeout = 90000;
      console.log(axios.defaults.timeout);
      const data = await axios.post(
        // this currently doesnt work with the custom domain
        "https://api-dev.planmydreamgetaway.co.uk/places",
        {
          place: place,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("data", data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

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
    tripRecommendation: {},
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
      if (payload === 4 && state.travellingWith === undefined) {
        state.errorMessage = "Please select at least one traveller";
        return;
      }
      if (payload === 4 && state.travellingWith) {
        state.searchStep = payload;

        getRecommendations();
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
  extraReducers: (builder) => {
    builder
      .addCase(getRecommendations.pending, (state, action) => {
        state.loading = true;
        // if (state.loading === 'idle') {
        //   state.loading = 'pending'
        //   state.currentRequestId = action.meta.requestId
        // }
      })
      .addCase(getRecommendations.fulfilled, (state, action) => {
        // const { requestId } = action.meta;
        state.loading = false;
        console.log("action.payload.data", action.payload.data);
        state.tripRecommendation = action.payload.data.message;

        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.entities.push(action.payload)
        //   state.currentRequestId = undefined
        // }
      })
      .addCase(getRecommendations.rejected, (state, action) => {
        // const { requestId } = action.meta;
        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.error = action.error
        //   state.currentRequestId = undefined
        // }
      });
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
