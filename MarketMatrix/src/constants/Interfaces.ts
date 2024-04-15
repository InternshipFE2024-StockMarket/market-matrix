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
