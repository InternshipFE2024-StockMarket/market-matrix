// Add global interfaces
export interface ChangeValue {
  date: string;
  close: number;
  dividends: number;
  high: number;
  low: number;
  open: number;
  stockSplits: number;
  volume: number;
}

export interface Change {
  ticker: string;
  values: ChangeValue[];
}
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

export interface UserStockData {
  image: string;
  price: number;
  ticker: string;
  type: string;
}

export interface Stock {
  id: string;
  ticker: string;
  companyName: string;
  price: number;
  priceChangePercentage: number;
  priceChange: number;
  image: string;
  exchange: string;
  ceo: string;
  city: string;
  state: string;
  industry: string;
  sector: string;
  type: string;
}

export interface UserData {
  id: string;
  name: string;
  investment: Investment[];
  total: string;
}
