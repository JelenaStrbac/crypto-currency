import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authReducer from "./slices/authSlice";
import cryptoReducer from "./slices/cryptoSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    crypto: cryptoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;

export default store;
