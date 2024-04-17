/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {StockValues} from '../../constants/Interfaces';
import {ChartConfiguration} from '../chart/ChartConfiguration';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';
import {Dimensions} from 'react-native';

export const LineChart = ({route}: any) => {
  const [chartValues, setChartValues] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height,
  );
  const id = route.params?.userParams?.id;
  const title = `Recent Close Prices for ${id}`;

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

  useEffect(() => {
    const onChange = () => {
      const {height} = Dimensions.get('window');
      setScreenHeight(height);
    };

    Dimensions.addEventListener('change', onChange);
  }, [screenHeight]);

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
      const newChartData: number[] = [];
      const newDates: string[] = [];

      selStock.values.forEach((item: StockValues) => {
        const dateObj = new Date(item.date);
        const formattedDate = `${dateObj.getDate()} ${
          monthNames[dateObj.getMonth()]
        }`;
        newDates.push(formattedDate);
        newChartData.push(parseFloat(item.close.toFixed(2)));
      });

      setDates(newDates);
      setChartValues(newChartData);
    }
  };

  return (
    <ChartConfiguration
      title={title}
      seriesData={chartValues}
      xaxis={dates}
      chartType="line"
      ticker={id}
      height={screenHeight}
    />
  );
};
