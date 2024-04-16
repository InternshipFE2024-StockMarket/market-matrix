import {ChartConfiguration} from '../chart/ChartConfiguration';
import useFetchUserInvetments from '../../utils/http/useFetchUserInvetments';
import {useFetchChanges} from '../../utils/http/useFetchChanges';
import {useEffect, useState} from 'react';
import {StockChanges} from '../../constants/Interfaces';

interface TotalValueLineChartProps {
  currency: string;
}

export const TotalValueLineChart = ({currency}: TotalValueLineChartProps) => {
  const userInvestments = useFetchUserInvetments(123456);
  const [changes, setChanges] = useState<StockChanges[]>([]);
  useEffect(() => {
    const fetchChanges = async () => {
      const response = await useFetchChanges();
      setChanges(response);
    };
    fetchChanges();
  }, []);

  let chartValues: number[] = [];

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

    const chartData = result.map(item => {
      if (currency === 'EUR') {
        return [
          new Date(item.date).getTime(),
          parseFloat((item.total * 1.06).toFixed(2)),
        ];
      } else {
        return [
          new Date(item.date).getTime(),
          parseFloat(item.total.toFixed(2)),
        ];
      }
    });

    chartValues = chartData as unknown as number[];
  }

  return (
    <ChartConfiguration
      title="Total values fluctuation"
      seriesData={chartValues}
      chartType="line"
    />
  );
};
