import axios from 'axios';
const API_KEY = 'AIzaSyCoC60Y8_wS-_es0-R-d-wusXHZ6-y-2NY';

const authenticate = async (mode: string, email: string, password: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });

  return response.data;
};

export const createUser = (email: string, password: string) => {
  return authenticate('signUp', email, password);
};

export const login = (email: string, password: string) => {
  return authenticate('signInWithPassword', email, password);
};
