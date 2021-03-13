export type Currencies = "BTCUSD" | "BTCEUR" | "ETHUSD" | "ETHEUR" | "EOSUSD";

export interface RootState {
  auth: {
    isAuthenticated: boolean;
  };
  crypto: {
    [Key in Currencies]: {
      dailyChange: number;
      volume: number;
      lastPrice: number;
    };
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
  | [number, number[]];
