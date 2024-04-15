import axios from 'axios';
import {useEffect, useState} from 'react';

export interface Investment {
  ticker: string;
  amount: number;
  boughtPrice: number;
  shares: number;
}

const useFetchUserInvetments = (id: number) => {
  const [userInvestments, setUserInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user?id=${id}`)
      .then(userResponse => {
        setUserInvestments(userResponse.data[0].investment);
      })
      .catch(error => {
        console.error('Error fetching user investment data:', error);
      });
  }, [id]);

  return userInvestments;
};

export default useFetchUserInvetments;
