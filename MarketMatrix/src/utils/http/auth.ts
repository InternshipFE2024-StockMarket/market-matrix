import axios from 'axios';

export const createUser = async (email: string, password: string) => {
  const API_KEY = 'AIzaSyCoC60Y8_wS-_es0-R-d-wusXHZ6-y-2NY';

  try {
    const response = await axios.post(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
        API_KEY,
      {
        email,
        password,
        returnSecureToken: true,
      },
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
