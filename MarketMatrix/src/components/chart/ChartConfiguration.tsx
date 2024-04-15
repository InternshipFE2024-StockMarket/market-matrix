import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

interface ChartConfigurationProp {
  ticker: string;
  seriesData: number[];
  xAxisData: string[];
}

export const ChartConfiguration = ({
  ticker,
  seriesData,
  xAxisData,
}: ChartConfigurationProp) => {
  const chartConfig = {
    chart: {
      type: 'line',
    },
    title: {
      text: `Recent Close Prices for ${ticker}`,
    },
    xAxis: {
      categories: xAxisData,
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
        data: seriesData,
      },
    ],
  };

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
          document.addEventListener('DOMContentLoaded', function () {
            const chart = Highcharts.chart('container', ${JSON.stringify(
              chartConfig,
            )});
          });
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
