import {ChartConfiguration} from '../chart/ChartConfiguration';
import useFetchUserInvetments from '../../utils/http/useFetchUserInvetments';
import {useFetchChanges} from '../../utils/http/useFetchChanges';
import {useEffect, useState} from 'react';
import {StockChanges} from '../../constants/Interfaces';
import {useAuth} from '../../contexts/authContext';

interface TotalValueLineChartProps {
  currency: string;
}

export const TotalValueLineChart = ({currency}: TotalValueLineChartProps) => {
  const userCtx = useAuth();
  const userId = userCtx.userId;
  const userInvestments = useFetchUserInvetments(userId);
  const [changes, setChanges] = useState<StockChanges[]>([]);
  useEffect(() => {
    const fetchChanges = async () => {
      const response = await useFetchChanges();
      setChanges(response);
    };
    fetchChanges();
  }, []);

  let chartValues: number[] = [];
  let dates: any[] | undefined = [];

  if (userInvestments.length > 0 && changes.length > 0) {
    const dateTotalMap = new Map();

    userInvestments.forEach(investment => {
      changes.forEach(change => {
        const last7DaysValues = change.values.slice(-7);

        if (change.ticker === investment.ticker) {
          last7DaysValues.forEach(value => {
            const existingTotal = dateTotalMap.get(value.date) || 0;
            dateTotalMap.set(
              value.date,
              existingTotal + value.open * investment.shares,
            );
          });
        }
      });
    });

    const result = Array.from(dateTotalMap, ([date, total]) => ({
      date,
      total,
    }));

    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    const chartData = result.map(item => {
      const dateObj = new Date(item.date);
      const monthIndex = dateObj.getMonth();
      const monthAbbreviation = monthNames[monthIndex];
      const day = dateObj.getDate();
      const formattedDate = `${monthAbbreviation} ${day}`;

      if (currency === 'EUR') {
        dates?.push(formattedDate);
        return [parseFloat((item.total * 1.06).toFixed(2))];
      } else {
        dates?.push(formattedDate);
        return [parseFloat(item.total.toFixed(2))];
      }
    });

    chartValues = chartData as unknown as number[];
  }

  return (
    <ChartConfiguration
      title="Total values fluctuation"
      seriesData={chartValues}
      chartType="line"
      xaxis={dates}
    />
  );
};
