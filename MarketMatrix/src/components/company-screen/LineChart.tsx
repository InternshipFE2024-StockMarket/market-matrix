import React, {useEffect, useState} from 'react';
import {StockValues} from '../../constants/Interfaces';
import {ChartConfiguration} from '../chart/ChartConfiguration';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';

export const LineChart = ({route}: any) => {
  const [chartValues, setChartValues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ticker = route.params?.userParams?.ticker;

  useEffect(() => {
    if (ticker) {
      getValuesForStock();
    } else {
      console.log('Ticker is undefined.');
    }
  }, [ticker]);

  const getValuesForStock = async () => {
    const selStock = await fetchChangesForStock(ticker);
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
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <ChartConfiguration
      ticker={ticker}
      seriesData={chartValues}
      chartType="line"
    />
  );
};
