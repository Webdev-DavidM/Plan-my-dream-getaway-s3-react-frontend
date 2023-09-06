import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface name {
  name: string;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "Jeff",
    post: "Hello there",
  },
  reducers: {
    consoleLog: (state, { payload }: PayloadAction<name>) => {
      console.log(state.post);
      console.log(payload.name);
    },
  },
});

// Action creators are generated for each case reducer function
export const { consoleLog } = userSlice.actions;

export default userSlice.reducer;
