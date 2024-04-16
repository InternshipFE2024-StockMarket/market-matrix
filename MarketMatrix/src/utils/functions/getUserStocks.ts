import {Investment, Stock, UserStockData} from '../../constants/Interfaces';

export const getUserStocks = (
  userInvestments: Investment[],
  stocks: Stock[],
) => {
  const fetchedStocksData: UserStockData[] = [];
  for (const userInvestment of userInvestments) {
    const stock = stocks.find(
      (stock: Stock) => stock.id === userInvestment.ticker,
    );
    const stockData = {
      image: stock!.image,
      price: stock!.price,
      ticker: stock!.ticker,
      type: stock!.type,
    };
    fetchedStocksData.push(stockData);
  }

  return fetchedStocksData;
};
