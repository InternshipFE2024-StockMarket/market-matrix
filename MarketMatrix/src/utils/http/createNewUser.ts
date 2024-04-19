import axios from 'axios';
import {User} from '../../constants/Interfaces';

export const createNewUser = async (newUser: User) => {
  const userData = {
    id: newUser.email,
    name: newUser.name,
    email: newUser.email,
    password: 's3cur3P@ssw0rd',
    investment: [
      {
        id: '',
        ticker: '',
        amount: 0,
        boughtPrice: 0,
        shares: 0,
      },
    ],
    availableAmout: 0,
  };
  try {
    const response = await axios.post('http://localhost:3000/user', userData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
