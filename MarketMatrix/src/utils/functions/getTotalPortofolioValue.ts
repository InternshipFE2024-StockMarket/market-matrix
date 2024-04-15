import {useEffect, useState} from 'react';
import {UserData} from '../../constants/Interfaces';
import axios from 'axios';
import {useStock} from '../../contexts/stocksContext';
import {getDynamicValue} from './getDynamicValue';

export const getTotalPortofolioValue = () => {
  const [totalValue, setTotalValue] = useState(0);
  const [user, setUser] = useState<UserData[]>([]);
  const {stocks} = useStock();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/src/db.json');
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //   console.log(user);
  let total = 0;
  if (user.length > 0) {
    user[0].investment.map(investition => {
      const stock = stocks.find(stock => stock.ticker === investition.ticker);
      if (stock) {
        const value = getDynamicValue(investition.shares, stock.price);
        total = total + value;
      }
    });
  }
  if (total !== 0) {
    console.log('Total' + total);
    return Number(total);
  }
};
