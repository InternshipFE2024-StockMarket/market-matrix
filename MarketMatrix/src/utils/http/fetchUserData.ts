import axios from 'axios';
import {useEffect, useState} from 'react';
import {UserData} from '../../constants/Interfaces';

export const fetchUserData = (id: string) => {
  const [userData, setUserData] = useState<UserData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user?id=${id}`);
        setUserData(response.data[0]);
      } catch (error) {
        console.error(`Error fetching user data for user ${id} :`, error);
        throw error;
      }
    };
    fetchData();
  }, [id]);
  return userData;
};
