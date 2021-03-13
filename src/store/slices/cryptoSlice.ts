import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Currencies, CurrencyDetails, RootState } from "../../types/index";

const initialState: RootState["crypto"] = {
  BTCUSD: null,
  BTCEUR: null,
  ETHUSD: null,
  ETHEUR: null,
  EOSUSD: null,
};

const criptoSlice = createSlice({
  name: "cripto",
  initialState,
  reducers: {
    updateCrypto(
      state,
      action: PayloadAction<{
        currency: Currencies;
        currencyDetails: CurrencyDetails;
      }>
    ) {
      state[action.payload.currency] = action.payload.currencyDetails;
    },
  },
});

export const { updateCrypto } = criptoSlice.actions;

export default criptoSlice.reducer;
