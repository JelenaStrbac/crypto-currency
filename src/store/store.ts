import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authReducer from "./slices/authSlice";
// import criptoReducer from "./slices/criptoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    // cripto: criptoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
