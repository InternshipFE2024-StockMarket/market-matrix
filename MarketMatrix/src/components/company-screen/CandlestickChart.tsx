import React, {useEffect, useState} from 'react';
import {StockValues} from '../../constants/Interfaces';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';
import {ChartConfiguration} from '../chart/ChartConfiguration';

export const CandlestickChart = ({route}: any) => {
  const [candleChartData, setCandleChartData] = useState([]);
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
            item.open,
            item.high,
            item.low,
            item.close,
          ];
        });
        setCandleChartData(chartData);
      } catch (error: any) {
        console.error('Failed to fetch values for stock:', error);
        //setError(error);
      } finally {
        //setLoading(false);
      }
    }
  };

  return (
    <ChartConfiguration
      ticker={ticker}
      seriesData={candleChartData}
      chartType="candlestick"
    />
  );
};
