import axios from 'axios';
const API_KEY = 'AIzaSyCoC60Y8_wS-_es0-R-d-wusXHZ6-y-2NY';

const authenticate = async (mode: string, email: string, password: string) => {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email,
    password,
    returnSecureToken: true,
  });
  console.log(response.data);

  return response;
};

export const createUser = async (email: string, password: string) => {
  await authenticate('signUp', email, password);
};

export const login = async (email: string, password: string) => {
  await authenticate('signInWithPassword', email, password);
};
