import React, {createContext, useContext, useEffect, useState} from 'react';
import {Stock} from '../constants/Interfaces';
import {fetchStocks} from '../utils/http/fetchStocks';
// import {patchPrice} from '../utils/http/patchPrice';

interface StockContextValue {
  stocks: Stock[];
}

const StockContext = createContext<StockContextValue | undefined>(undefined);

export const useStock = () => {
  const context = useContext(StockContext);
  if (!context) {
    console.log('useStock must be used within a StockProvider');
  }
  return context;
};

interface StockProviderProps {
  children: React.ReactNode;
}

export const StockProvider = ({children}: StockProviderProps) => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const updateStocksData = async () => {
      const stocksData = await fetchStocks();

      const updatedStocks = await Promise.all(
        stocksData.map(async (stock: Stock) => {
          const price = modifyPrice(stock.price);
          // await patchPrice(stock.id, price);
          return {...stock, price};
        }),
      );
      setStocks(updatedStocks);
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

function modifyPrice(price: number) {
  const randomOffset = Math.random();
  const modifier = Math.random() > 0.5 ? 1 : -1;
  const modifiedPrice = price + randomOffset * modifier;
  return Number(modifiedPrice.toFixed(2));
}
