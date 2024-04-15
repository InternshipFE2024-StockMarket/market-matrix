import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import {Stock, StockChanges} from '../../constants/Interfaces';

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

  const chartConfig = {
    chart: {
      type: 'line',
    },
    title: {
      text: `Recent Close Prices for ${ticker}`,
    },
    xAxis: {
      categories: dates,
      title: {
        text: 'Date',
      },
    },
    yAxis: {
      title: {
        text: 'Close price',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: 'Prices',
        data: closeValues,
      },
    ],
  };

  const injectedData = `
    document.addEventListener('DOMContentLoaded', function () {
      const chart = Highcharts.chart('container', ${JSON.stringify(
        chartConfig,
      )});
    });
  `;

  const htmlContent = `
    <html>
      <head>
      <script src="https://code.highcharts.com/stock/highstock.js"></script>
      <script src="https://code.highcharts.com/stock/modules/exporting.js"></script>
      <script src="https://code.highcharts.com/stock/modules/candlestick.js"></script>
      </head>
      <body>
        <div id="container" style="height: 100%; width: 100%;"></div>
        <script>
          ${injectedData}
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{html: htmlContent}}
        style={{flex: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
