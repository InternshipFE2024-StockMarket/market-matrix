import axios from 'axios';

export const fetchStockById = async (id: string) => {
  try {
    const response = await axios.get(`http://localhost:3000/stocks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching stock for ticker ${id} :`, error);
    throw error;
  }
};
