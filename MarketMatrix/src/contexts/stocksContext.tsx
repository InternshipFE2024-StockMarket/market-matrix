import React, {createContext, useContext, useState} from 'react';
import {Stock} from '../constants/Interfaces';

interface StockContextValue {
  stocks: Stock[];
}

const StockContext = createContext<StockContextValue | undefined>(undefined);

export const useStock = () => useContext(StockContext);

interface StockProviderProps {
  children: React.ReactNode;
}

export const StockProvider = ({children}: StockProviderProps) => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  const value = {
    stocks: stocks,
  };

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};

export default StockContext;
