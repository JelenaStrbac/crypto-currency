export type Currencies = "BTCUSD" | "BTCEUR" | "ETHUSD" | "ETHEUR" | "EOSUSD";

export type CurrencyDetails = {
  dailyChange: string;
  volume: string;
  lastPrice: string;
};

export interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  crypto: {
    [Key in Currencies]: CurrencyDetails | null;
  };
}

export type ResponseTypes =
  | {
      event: string;
      channel: string;
      chanId: number;
      symbol: string;
      pair: Currencies;
    }
  | [number, number[] | "hb"];
