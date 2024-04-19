import axios from 'axios';

export const addMoneyToUser = async (userId: string, amountToAdd: number) => {
  console.log({userId}, {amountToAdd});

  try {
    const userResponse = await axios.get(
      `http://localhost:3000/user?id=${userId}`,
    );
    const userData = userResponse.data;

    const userAmount = userData[0].availableAmount;
    const newAmount = userAmount + amountToAdd;

    const updateResponse = await axios.patch(
      `http://localhost:3000/user/${userId}`,
      {
        availableAmount: newAmount,
      },
    );

    return updateResponse.data;
  } catch (error: any) {
    console.error(
      'Error updating user available amount',
      error.response ? error.response.data : error.message,
    );
    throw error;
  }
};

const userId = '4@4.com';
const amountToAdd = 500;

addMoneyToUser(userId, amountToAdd);
