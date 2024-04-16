import {useEffect, useState} from 'react';
import {UserData} from '../../constants/Interfaces';
import axios from 'axios';
import {useStock} from '../../contexts/stocksContext';
import {getDynamicValue} from './getDynamicValue';
import {diff} from 'jest-diff';

export const getTotalPortofolioValue = () => {
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

  let total = 0;
  let difference = 0;

  if (user?.length > 0) {
    user[0].investment.map(investition => {
      const stock = stocks.find(stock => stock.ticker === investition.ticker);
      if (stock) {
        const value = getDynamicValue(investition.shares, stock.price);
        const differenceValue = getDynamicValue(
          stock.openPrice - stock.price,
          investition.shares,
        );

        total = total + value;
        difference = differenceValue;
      }
    });
  }
  if (total !== 0) {
    const finalValue = {
      total: total,
      difference: difference,
    };
    return finalValue;
  }
};
