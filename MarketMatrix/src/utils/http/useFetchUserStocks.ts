import axios from 'axios';
import {useEffect, useState} from 'react';

export interface Investment {
  ticker: string;
  amount: number;
  boughtPrice: number;
  shares: number;
}

export interface StockData {
  image: string;
  price: number;
  // priceChange: number;
  // priceChangePercentage: number;
  ticker: string;
  type: string;
}

const useFetchUserStocks = (userInvestments: Investment[]) => {
  const [stocksData, setStocksData] = useState<StockData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStocksData: StockData[] = [];

        for (const userInvestment of userInvestments) {
          const response = await axios.get(
            `http://localhost:3000/stocks?ticker=${userInvestment.ticker}`,
          );
          const stockData = {
            image: response.data[0].image,
            price: parseFloat(response.data[0].price),
            // priceChange: +response.data[0].priceChange,
            // priceChangePercentage: +response.data[0].priceChangePercentage,
            ticker: response.data[0].ticker,
            type: response.data[0].type,
          };
          fetchedStocksData.push(stockData);
        }

        setStocksData(fetchedStocksData);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [userInvestments]);

  return stocksData;
};

export default useFetchUserStocks;
