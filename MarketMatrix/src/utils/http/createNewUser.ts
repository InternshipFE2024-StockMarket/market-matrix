import axios from 'axios';
import {User} from '../../constants/Interfaces';

export const createNewUser = async (newUser: User) => {
  try {
    const response = await axios.post('http://localhost:3000/user', newUser);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
