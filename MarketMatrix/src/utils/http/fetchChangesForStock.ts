import axios from 'axios';

export const fetchChangesForStock = async (ticker: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/changes?ticker=${ticker}`,
    );
    return response.data[0];
  } catch (error) {
    console.error(`Error fetching values for ticker ${ticker} :`, error);
    throw error;
  }
};
