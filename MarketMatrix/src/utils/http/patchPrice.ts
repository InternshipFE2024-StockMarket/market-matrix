import axios from 'axios';

export const patchPrice = async (ticker: string, newPrice: number) => {
  try {
    const response = await axios.patch(
      `http://localhost:3000/stocks/${ticker}`,
      {price: newPrice},
    );

    return response.data;
  } catch (error) {
    console.error('Error updating stock price:', error);
    throw error;
  }
};
