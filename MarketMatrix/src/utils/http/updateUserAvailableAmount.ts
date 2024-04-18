import axios from 'axios';

export const updateUserAvailableAmount = async (
  amountUsed: number,
  userId: string,
) => {
  try {
    const userResponse = await axios.get(
      `http://localhost:3000/user?id=${userId}`,
    );
    const userData = userResponse.data;

    const userAmount = userData[0].availableAmount;
    const newAmount = userAmount - amountUsed;

    const updateResponse = await axios.patch(
      `http://localhost:3000/user/${userId}`,
      {
        availableAmount: newAmount,
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
