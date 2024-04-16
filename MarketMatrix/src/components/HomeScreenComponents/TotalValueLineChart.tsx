import {ChartConfiguration} from '../chart/ChartConfiguration';
import {useEffect, useState} from 'react';
import {StockChanges, UserData} from '../../constants/Interfaces';
import axios from 'axios';

interface TotalValueLineChartProps {
  currency: string;
}

export const TotalValueLineChart = ({currency}: TotalValueLineChartProps) => {
  const [user, setUser] = useState<UserData[]>([]);
  const [changes, setChanges] = useState<StockChanges[]>([]);

  let chartValues: number[] = [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/src/db.json');
        setUser(response.data.user);
        setChanges(response.data.changes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (user?.length > 0 && changes.length > 0) {
    const dateTotalMap = new Map();

    user[0].investment.forEach(investment => {
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
