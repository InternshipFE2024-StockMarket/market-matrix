import axios from 'axios';
import {User} from '../../constants/Interfaces';

export const createNewUser = async (newUser: User) => {
  const userData = {
    id: newUser.email,
    name: newUser.name,
    email: newUser.email,
    investment: [],
  };
  try {
    const response = await axios.post('http://localhost:3000/user', userData);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
