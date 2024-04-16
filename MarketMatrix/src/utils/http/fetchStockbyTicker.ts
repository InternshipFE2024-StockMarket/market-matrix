import axios from 'axios';

export const fetchStockByTicker = async (ticker: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/stocks/${ticker}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stock for ticker ${ticker} :`, error);
    throw error;
  }
};
