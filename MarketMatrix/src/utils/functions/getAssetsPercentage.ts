import {useUserInvestmentsDetails} from './getUserInvestmentsDetails';

export const useAssetsPercentage = (userId: number): number[] => {
  let stocks = 0;
  let crypto = 0;
  let indices = 0;
  const userInvestments = useUserInvestmentsDetails(userId);
  userInvestments.map(inv => {
    if (inv.type === 'stock') {
      stocks = stocks + inv.amount;
    } else if (inv.type === 'crypto') {
      crypto = crypto + inv.amount;
    } else if (inv.type === 'indices') {
      indices = indices + inv.amount;
    }
  });

  return [stocks, crypto, indices];
};
