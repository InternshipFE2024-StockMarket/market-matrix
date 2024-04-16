import React, {useEffect, useState} from 'react';
import {StockValues} from '../../constants/Interfaces';
import {ChartConfiguration} from '../chart/ChartConfiguration';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';
import {Text, View} from 'react-native';

export const LineChart = ({route}: any) => {
  const [chartValues, setChartValues] = useState([]);
  const id = route.params?.userParams?.id;

  useEffect(() => {
    if (id) {
      getValuesForStock();
    } else {
      console.log('Ticker is undefined.');
    }
  }, [id]);

  const getValuesForStock = async () => {
    const selStock = await fetchChangesForStock(id);
    if (selStock) {
      try {
        const chartData = selStock.values.map((item: StockValues) => {
          return [
            new Date(item.date).getTime(),
            parseFloat(item.close.toFixed(2)),
          ];
        });
        setChartValues(chartData);
      } catch (error: any) {
        console.error('Failed to fetch values for stock:', error);
      }
    }
  };
  return (
    <ChartConfiguration ticker={id} seriesData={chartValues} chartType="line" />
  );
};
