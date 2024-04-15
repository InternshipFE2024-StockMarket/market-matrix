import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

interface ChartConfigurationProp {
  ticker: string;
  chartType: 'line' | 'candlestick' | 'bar';
  seriesData: number[];
}

export const ChartConfiguration = ({
  ticker,
  chartType,
  seriesData,
}: ChartConfigurationProp) => {
  const isLineChart = chartType === 'line';

  const chartConfig = {
    chart: {
      type: chartType,
    },
    title: {
      text:
        chartType === 'line'
          ? `Recent Close Prices for ${ticker}`
          : chartType === 'candlestick'
          ? `Price Movements for ${ticker}`
          : chartType === 'bar'
          ? `Bar chart for ${ticker}`
          : 'Chart type not defined',
    },
    xAxis: {
      title: {text: 'Date'},
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: 'Price',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {enabled: true},
      },
      candlestick: {
        color: 'pink',
        lineColor: 'red',
        upColor: 'lightgreen',
        upLineColor: 'green',
      },
    },
    series: [
      {
        name: isLineChart ? 'Price' : 'Price Movements',
        data: seriesData,
        tooltip: {
          valueDecimals: 2,
        },
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
