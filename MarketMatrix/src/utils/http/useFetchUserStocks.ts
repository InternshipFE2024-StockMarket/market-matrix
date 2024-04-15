import axios from 'axios';
import {useEffect, useState} from 'react';
import {Investment} from '../../constants/Interfaces';
import {UserStockData} from '../../constants/Interfaces';

const useFetchUserStocks = (userInvestments: Investment[]) => {
  const [stocksData, setStocksData] = useState<UserStockData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedStocksData: UserStockData[] = [];

        for (const userInvestment of userInvestments) {
          const response = await axios.get(
            `http://localhost:3000/stocks?ticker=${userInvestment.ticker}`,
          );
          const stockData = {
            image: response.data[0].image,
            price: parseFloat(response.data[0].price),
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
