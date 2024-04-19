import axios from 'axios';
import {Investment} from '../../constants/Interfaces';

export const addNewStockForUser = async (
  userId: string,
  newInvestment: Investment,
) => {
  try {
    const userResponse = await axios.get(
      `http://localhost:3000/user?id=${userId}`,
    );
    const userData = userResponse.data;

    const updatedInvestments = [...userData[0].investment, newInvestment];

    const updateResponse = await axios.patch(
      `http://localhost:3000/user/${userId}`,
      {
        investment: updatedInvestments,
      },
    );

    return updateResponse.data;
  } catch (error: any) {
    console.error(
      'Error updating user investment:',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};
