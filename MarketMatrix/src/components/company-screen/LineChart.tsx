import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {StockChanges} from '../../constants/Interfaces';
import {ChartConfiguration} from '../chart/ChartConfiguration';

export const LineChart = ({route}: any) => {
  const [selectedStock, setSelectedStock] = useState<
    StockChanges | undefined
  >();
  const [dates, setDates] = useState<string[]>([]);
  const [closeValues, setCloseValues] = useState<number[]>([]);
  const ticker = route.params?.userParams?.ticker;

  useEffect(() => {
    if (ticker) {
      axios
        .get('http://localhost:3000/changes')
        .then(response => {
          const selStock = response.data.find(
            (stock: StockChanges) => stock.ticker === ticker,
          );
          setSelectedStock(selStock);
          if (selStock) {
            setDates(
              selStock.values.map((stock: {date: string}) => stock.date),
            );
            setCloseValues(
              selStock.values.map((stock: {close: number}) => stock.close),
            );
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    } else {
      console.log('Ticker is undefined.');
    }
  }, [ticker]);

  return (
    <ChartConfiguration
      ticker={ticker}
      seriesData={closeValues}
      xAxisData={dates}
    />
  );
};
