import useFetchUserInvetments from '../http/useFetchUserInvetments';
import {getPlValue} from './getPlValue';
import {getDynamicValue} from './getDynamicValue';
import {UserInvestmentsDetails} from '../../constants/Interfaces';
import {useStock} from '../../contexts/stocksContext';
import {getUserStocks} from './getUserStocks';

const formatNumber = (num: number): number => {
  return Number(num.toFixed(2));
};

export const useUserInvestmentsDetails = (
  userId: string,
): UserInvestmentsDetails[] => {
  const userInvestments = useFetchUserInvetments(userId);
  const stockCtx = useStock();
  const stocks = stockCtx.stocks;

  const stocksData = getUserStocks(userInvestments, stocks);

  const userInvestmentsDetails: UserInvestmentsDetails[] = [];

  stocksData.forEach(async (stock: any) => {
    const userInvestment = userInvestments.find(
      (inv: any) => inv.ticker === stock.ticker,
    );

    if (userInvestment) {
      const plValue = formatNumber(
        getPlValue(
          stock.price,
          userInvestment.boughtPrice,
          userInvestment.shares,
        ),
      );

      const dynamicValue = formatNumber(
        getDynamicValue(stock.price, userInvestment.shares),
      );

      const userInvestmentData: UserInvestmentsDetails = {
        id: userInvestment.id,
        ticker: stock.ticker,
        image: stock.image,
        currentPrice: stock.price,
        amount: userInvestment.amount,
        plValue,
        dynamicValue,
        type: stock.type,
      };

      userInvestmentsDetails.push(userInvestmentData);
    }
  });

  return userInvestmentsDetails;
};
