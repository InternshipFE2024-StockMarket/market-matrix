import React, {useEffect, useState} from 'react';
import {StockValues} from '../../constants/Interfaces';
import {ChartConfiguration} from '../chart/ChartConfiguration';
import {fetchChangesForStock} from '../../utils/http/fetchChangesForStock';
import {Dimensions} from 'react-native';

export const LineChart = ({route}: any) => {
  const [chartValues, setChartValues] = useState([]);
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height,
  );
  const id = route.params?.userParams?.id;
  const title = `Recent Close Prices for ${id}`;

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
    <ChartConfiguration
      title={title}
      seriesData={chartValues}
      chartType="line"
      ticker={id}
      height={screenHeight}
    />
  );
};
