import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "../../types/index";

const initialState: RootState["auth"] = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser(state) {
      state.isAuthenticated = true;
    },
  },
});

export const { authenticateUser } = authSlice.actions;

export default authSlice.reducer;
