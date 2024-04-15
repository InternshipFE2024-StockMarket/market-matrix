import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {StockChanges} from '../../constants/Interfaces';
import {ChartConfiguration} from '../chart/ChartConfiguration';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';

export const LineChart = ({route}: any) => {
  const [selectedStock, setSelectedStock] = useState<
    StockChanges | undefined
  >();
  const [dates, setDates] = useState<string[]>([]);
  const [closeValues, setCloseValues] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const ticker = route.params?.userParams?.ticker;

  useEffect(() => {
    if (ticker) {
      setLoading(true);
      (async () => {
        try {
          const selStock = await fetchChangesForStock(ticker);
          setSelectedStock(selStock);
          if (selStock) {
            setDates(
              selStock.values.map((stock: {date: string}) => stock.date),
            );
            setCloseValues(
              selStock.values.map(
                (stock: {close: number}) => Math.round(stock.close * 100) / 100,
              ),
            );
          }
        } catch (error: any) {
          console.error('Failed to fetch values for stock:', error);
          setError(error);
        } finally {
          setLoading(false);
        }
      })();
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
