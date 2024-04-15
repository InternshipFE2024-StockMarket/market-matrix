export interface UserInvestmentsDetails {
  ticker: string;
  image: string;
  currentPrice: number;
  amount: number;
  plValue: number;
  dynamicValue: number;
}

export interface Investment {
  ticker: string;
  amount: number;
  boughtPrice: number;
  shares: number;
}

export interface StockData {
  image: string;
  price: number;
  ticker: string;
  type: string;
}
