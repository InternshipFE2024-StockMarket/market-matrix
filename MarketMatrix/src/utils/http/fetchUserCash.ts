import axios from 'axios';

export const fetchUserCash = async (id: string) => {
  console.log(id);

  try {
    const response = await axios.get(`http://localhost:3000/user?id=${id}`);
    return response.data[0].availableAmount;
  } catch (error) {
    console.error(`Error fetching user data for user ${id} :`, error);
    throw error;
  }
};
