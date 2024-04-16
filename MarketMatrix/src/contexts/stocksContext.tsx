import React, {createContext, useContext, useEffect, useState} from 'react';
import {Stock} from '../constants/Interfaces';
import {fetchStocks} from '../utils/http/fetchStocks';
import {fetchStockById} from '../utils/http/fetchStockbyTicker';

interface StockContextValue {
  stocks: Stock[];
  findById: (id: string) => Stock | undefined;
}

const StockContext = createContext<StockContextValue | undefined>({
  stocks: [],
  findById: (id: string) => undefined,
});

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
          const priceChange = modifyPriceChange(price, stock.openPrice);
          const priceChangePercentage = modifyPricePercentage(
            priceChange,
            stock.openPrice,
          );
          // console.log('OPEN ', stock.openPrice);
          // console.log('PRICE ', price);
          // console.log('CHANGE ', priceChange);
          return {...stock, priceChange, priceChangePercentage, price};
        }),
      );
      setStocks(updatedStocks);
    };
    updateStocksData();

    const intervalId = setInterval(updateStocksData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const findStockById = (id: string) => {
    const stock = stocks.find(stock => stock.id === id);
    if (stock) {
      return stock;
    } else {
      console.log('No stock found');
    }
  };

  const value = {
    stocks: stocks,
    findById: findStockById,
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

function modifyPriceChange(price: number, openPrice: number) {
  const change = price - openPrice;
  return Number(change.toFixed(2));
}

function modifyPricePercentage(priceChange: number, openPrice: number) {
  return Number(((priceChange / openPrice) * 100).toFixed(2));
}
