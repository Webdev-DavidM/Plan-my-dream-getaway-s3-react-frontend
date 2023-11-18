import { configureStore } from "@reduxjs/toolkit";
import tripDetailsReducer from "./tripDetailsSlice";

export const store = configureStore({
  reducer: {
    tripDetails: tripDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    Cypress: any;
  }
}

if (window.Cypress) {
  window["store"] = store;
}
