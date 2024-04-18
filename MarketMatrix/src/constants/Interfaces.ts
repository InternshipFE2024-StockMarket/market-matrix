export interface Stock {
  ticker: string;
  companyName: string;
  companyValue: string;
  openPrice: number;
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
  id: string;
  ticker: string;
  image: string;
  currentPrice: number;
  amount: number;
  plValue: number;
  dynamicValue: number;
  type: string;
}

export interface Investment {
  id: string;
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
  companyValue: string;
  price: number;
  openPrice: number;
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
export interface UserData {
  id: string;
  name: string;
  investment: Investment[];
  total: string;
  availableAmount: number;
}

export interface BarChartInvestmentData {
  stocks: number;
  crypto: number;
  indices: number;
}
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface AuthUser {
  displayName: string;
  email: string;
  expiresIn: string;
  idToken: string;
}
