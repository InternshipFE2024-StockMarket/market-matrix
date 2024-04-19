import {useStock} from '../../contexts/stocksContext';
import {getDynamicValue} from './getDynamicValue';
import useFetchUserInvetments from '../http/useFetchUserInvetments';

export const useTotalPortofolioValue = (userId: string) => {
  const userInvestments = useFetchUserInvetments(userId);
  const {stocks} = useStock();

  let total = 0;
  let difference = 0;

  if (userInvestments.length === 0) {
    return {
      total: 0,
      difference: 0,
    };
  }
  if (userInvestments?.length > 0) {
    userInvestments.map(investition => {
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
