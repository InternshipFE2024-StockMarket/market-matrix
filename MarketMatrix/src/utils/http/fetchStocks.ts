import axios from 'axios';

export const fetchStocks = async () => {
  try {
    const response = await axios.get('http://localhost:3000/stocks');
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};
