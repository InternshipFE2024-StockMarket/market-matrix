import axios from 'axios';

export const useFetchChanges = async () => {
  try {
    const response = await axios.get('http://localhost:3000/changes');
    return response.data;
  } catch (error) {
    console.error('Error fetching stocks:', error);
    throw error;
  }
};
