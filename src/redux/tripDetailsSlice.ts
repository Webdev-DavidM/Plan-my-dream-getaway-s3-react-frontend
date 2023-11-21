import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string;
  searchStep: number | undefined;
  numberOfSteps: number;
  errorMessage: string | undefined;
  loading: boolean;
  tripRecommendation: string;
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
      dispatch(setLoading(true));

      const response = await fetch("http://localhost:4000/", {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*", // indicates which files we are able to understand
          "Content-Type": "application/json", // indicates what the server actually sent
        },
        body: JSON.stringify({ place: `${place}` }), // server is expecting JSON
      });
      if (!response.ok || !response.body) {
        throw response.statusText;
      }
      dispatch(setLoading(false));
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      const loopRunner = true;

      while (loopRunner) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }
        const decodedChunk = decoder.decode(value, { stream: true });
        // setAnswer((answer) => answer + decodedChunk);
        // console.log(decodedChunk);
        dispatch(setTripRecommendation(decodedChunk));
      }
    } catch (err) {
      console.error(err, "err");
    } finally {
      // setLoading(false);
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
    tripRecommendation: "",
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

        // getRecommendations();
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
    setTripRecommendation: (state, { payload }: PayloadAction<string>) => {
      console.log("payload", payload);
      console.log("state.tripRecommendation", state.tripRecommendation);
      state.tripRecommendation += payload;
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
  setTripRecommendation,
  setSelectTravellingWith,
  setLoading,
} = tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
