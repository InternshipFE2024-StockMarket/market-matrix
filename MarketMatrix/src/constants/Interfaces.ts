// Add global interfaces
export interface Stock {
  ticker: string;
  companyName: string;
  companyValue: string;
  price: number;
  priceChangePercentage: number;
  priceChange: number;
  image: string;
  ceo: string;
  city: string;
  state: string;
  industry: string;
  sector: string;
  type: string;
}

export interface StockValues {
  date: string;
  close: number;
  high: number;
  low: number;
  open: number;
}

export interface StockChanges {
  ticker: string;
  values: StockValues[];
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

export interface FormValidation {
  email: boolean;
  password: boolean;
  confirmEmail: boolean;
  confirmPassword: boolean;
}

export interface FormCredentials {
  email: string;
  password: string;
  confirmEmail?: string;
  confirmPassword?: string;
}
