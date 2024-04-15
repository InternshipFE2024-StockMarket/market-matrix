import React, {createContext, useContext, useEffect, useState} from 'react';
import {Stock} from '../constants/Interfaces';
import {fetchStocks} from '../utils/http/fetchStocks';

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

  useEffect(() => {
    const updateStocksData = async () => {
      const stocksData = await fetchStocks();
      console.log({stocksData});

      setStocks(stocksData);
    };
    updateStocksData();

    const intervalId = setInterval(updateStocksData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const value = {
    stocks: stocks,
  };

  return (
    <StockContext.Provider value={value}>{children}</StockContext.Provider>
  );
};

export default StockContext;
