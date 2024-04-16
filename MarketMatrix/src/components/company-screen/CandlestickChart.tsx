import React, {useEffect, useState} from 'react';
import {StockValues} from '../../constants/Interfaces';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';
import {ChartConfiguration} from '../chart/ChartConfiguration';

export const CandlestickChart = ({route}: any) => {
  const [candleChartData, setCandleChartData] = useState([]);
  const id = route.params?.userParams?.id;
  const title = `Recent Price Movements for ${id}`;

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
            item.open,
            item.high,
            item.low,
            item.close,
          ];
        });
        setCandleChartData(chartData);
      } catch (error: any) {
        console.error('Failed to fetch values for stock:', error);
      }
    }
  };

  return (
    <ChartConfiguration
      title={title}
      seriesData={candleChartData}
      chartType="candlestick"
    />
  );
};
