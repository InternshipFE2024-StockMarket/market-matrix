import axios from 'axios';
import {useEffect, useState} from 'react';
import {Investment} from '../../constants/Interfaces';

const useFetchUserInvetments = (id: string) => {
  const [userInvestments, setUserInvestments] = useState<Investment[]>([]);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`http://localhost:3000/user?id=${id}`);
      if (!response) return;
      setUserInvestments(response.data[0].investment);
    };
    fetchUser();
  }, [id]);

  return userInvestments;
};

export default useFetchUserInvetments;
