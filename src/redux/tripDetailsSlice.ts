import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import getCurrentEnvURL from "../helpers/getCurrentEnv";

type PlaceImage = {
  place: string;
  imageUrl: string[];
};

type TopFivePlaces = {
  place: string | undefined;
  summary: string | undefined;
  image: PlaceImage | undefined;
};

type Position = {
  lat: number;
  lng: number;
};

type TopFivePlacesImages = {
  place: string;
  image: string[];
  position: Position;
};

type InitialState = {
  place: string;
  interests: string[] | [];
  travellingWith: string;
  searchStep: number | undefined;
  numberOfSteps: number;
  errorMessage: string | undefined;
  loading: boolean;
  tripSummary: string;
  // This is used if the data is got from the server as all the data will load at the same time
  topFivePlacesAllData: TopFivePlaces[] | [];
  // As I am waiting for the data to come back from the api call, I have split up
  // the data below so it is easier to access in the components
  topFivePlaces: {
    place: string;
    summary: string | undefined;
  }[];
  topFivePlacesImages: TopFivePlacesImages[];
  topFivePlacesDescriptions: string[];
  chosenMapPlace: Position | undefined;
};

const url = getCurrentEnvURL();

export const getTopFivePlaces: any = createAsyncThunk<any>(
  "tripDetails/topFivePlaces",
  async (data: any, { dispatch, getState }) => {
    const state: any = getState();
    const place = state.tripDetails.place;

    try {
      const topFive = await axios.post(`${url}/topFivePlaces`, {
        place: `${place}`,
      });

      return topFive;
    } catch {
      console.error("err");
    }
  }
);
export const getTopFivePlaceDescriptions: any = createAsyncThunk<any>(
  "tripDetails/getTopFivePlaceDescriptions",
  async (placesArray: any, { dispatch, getState }) => {
    try {
      const topFivePlacesDescriptions = axios.post(
        `${url}/recommendedPlaceDescription`,
        {
          placesArray,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return topFivePlacesDescriptions;
    } catch {
      console.error("err");
    }
  }
);

export const getTopFivePlaceImages: any = createAsyncThunk<any>(
  "tripDetails/topFivePlaceImages",
  async (placesArray: any, { dispatch, getState }) => {
    // EC2 set to false as this api needs to go to lambda not EC2
    const url = getCurrentEnvURL(false);
    console.log("url for lambda", url);
    try {
      const topFiveImages = axios.post(
        `${url}/placesPhotos`,
        {
          places: placesArray,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return topFiveImages;
    } catch {
      console.error("err");
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
    tripSummary: "",
    topFivePlaces: [],
    topFivePlacesAllData: [],
    topFivePlacesImages: [],
    topFivePlacesDescriptions: [],
    chosenMapPlace: undefined,
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

    // Results page
    setTripSummary: (state, { payload }: PayloadAction<string>) => {
      state.tripSummary = payload;
    },
    setChosenMapPlace: (state, { payload }: PayloadAction<any>) => {
      const position = state.topFivePlacesImages.find(
        (image) => image.place === payload.place
      )?.position;

      state.chosenMapPlace = position;
    },
  },
  extraReducers: (builder) => {
    // getTopFivePlaces
    builder
      .addCase(getTopFivePlaces.pending, (state, action) => {
        // state.loading = true;
        // if (state.loading === 'idle') {
        //   state.loading = 'pending'
        //   state.currentRequestId = action.meta.requestId
        // }
      })
      .addCase(getTopFivePlaces.fulfilled, (state, action) => {
        // const { requestId } = action.meta;
        // state.loading = false;

        const updatedArray = action.payload.data.map((place: any) => {
          return {
            place: place,
          };
        });

        state.topFivePlaces = updatedArray;

        // state.tripRecommendation = action.payload.data.message;

        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.entities.push(action.payload)
        //   state.currentRequestId = undefined
        // }
      })
      .addCase(getTopFivePlaces.rejected, (state, action) => {
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
    // getTopFivePlaceImages
    builder
      .addCase(getTopFivePlaceImages.pending, (state, action) => {
        // if (state.loading === 'idle') {
        //   state.loading = 'pending'
        //   state.currentRequestId = action.meta.requestId
        // }
      })
      .addCase(getTopFivePlaceImages.fulfilled, (state, action) => {
        console.log("top 5 images", action.payload.data.message);
        state.topFivePlacesImages = [...action.payload.data.message];
        // const { requestId } = action.meta;
        // state.loading = false;
        // state.topFivePlaces = action.payload.data;
        // getTopFivePlaceImages(action.payload.data);
        // state.tripRecommendation = action.payload.data.message;

        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.entities.push(action.payload)
        //   state.currentRequestId = undefined
        // }
      })
      .addCase(getTopFivePlaceImages.rejected, (state, action) => {
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
    builder
      .addCase(getTopFivePlaceDescriptions.pending, (state, action) => {
        // if (state.loading === 'idle') {
        //   state.loading = 'pending'
        //   state.currentRequestId = action.meta.requestId
        // }
      })
      .addCase(getTopFivePlaceDescriptions.fulfilled, (state, action) => {
        state.topFivePlacesDescriptions = [...action.payload.data];

        // const { requestId } = action.meta;
        // state.loading = false;
        // state.topFivePlaces = action.payload.data;
        // getTopFivePlaceDescriptions(action.payload.data);
        // state.tripRecommendation = action.payload.data.message;

        // if (
        //   state.loading === 'pending' &&
        //   state.currentRequestId === requestId
        // ) {
        //   state.loading = 'idle'
        //   state.entities.push(action.payload)
        //   state.currentRequestId = undefined
        // }
      })
      .addCase(getTopFivePlaceDescriptions.rejected, (state, action) => {
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
  setTripSummary,
  setChosenMapPlace,
} = tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
