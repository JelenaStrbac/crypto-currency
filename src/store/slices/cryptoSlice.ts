import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Currencies, RootState } from "../../types/index";

const initialState: RootState["crypto"] = {
  BTCUSD: {
    dailyChange: 0,
    volume: 0,
    lastPrice: 0,
  },
  BTCEUR: {
    dailyChange: 0,
    volume: 0,
    lastPrice: 0,
  },
  ETHUSD: {
    dailyChange: 0,
    volume: 0,
    lastPrice: 0,
  },
  ETHEUR: {
    dailyChange: 0,
    volume: 0,
    lastPrice: 0,
  },
  EOSUSD: {
    dailyChange: 0,
    volume: 0,
    lastPrice: 0,
  },
};

const criptoSlice = createSlice({
  name: "cripto",
  initialState,
  reducers: {
    updateCrypto(
      state,
      action: PayloadAction<{
        currency: Currencies;
        currencyDetails: {
          dailyChange: number;
          volume: number;
          lastPrice: number;
        };
      }>
    ) {
      state[action.payload.currency] = action.payload.currencyDetails;
    },
  },
});

export const { updateCrypto } = criptoSlice.actions;

export default criptoSlice.reducer;
