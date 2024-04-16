import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';
import {Colors} from '../../constants/Colors';

interface ChartConfigurationProp {
  title: string;
  chartType: 'line' | 'candlestick' | 'bar';
  seriesData: number[];
}

export const ChartConfiguration = ({
  title,
  chartType,
  seriesData,
}: ChartConfigurationProp) => {
  const chartConfig = {
    chart: {
      type: chartType,
      // backgroundColor: '#ffffff',
      borderWidth: 0,
    },
    title: {
      text: title,
      style: {
        fontSize: 40,
        fontWeight: 'bold',
      },
    },
    xAxis: {
      title: {
        text: 'Date',
        style: {
          fontSize: 30,
          alignSelf: 'center',
        },
      },
      type: 'datetime',
      labels: {
        style: {
          fontSize: 30,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Price',
        style: {
          fontSize: 30,
        },
      },
      labels: {
        style: {
          fontSize: 24,
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: 26,
          },
        },
        tooltip: {
          headerFormat: '<span style="font-size: 30px">{point.key}</span><br/>', // Set font size of tooltip header
          pointFormat: '<span style="font-size: 30px">{point.y}</span><br/>', // Set font size of tooltip point
        },
      },
      candlestick: {
        color: 'pink',
        lineColor: 'red',
        upColor: 'lightgreen',
        upLineColor: 'green',
        tooltip: {
          headerFormat: '<span style="font-size: 30px">{point.key}</span><br/>', // Set font size of tooltip header
          pointFormat: '<span style="font-size: 30px">{point.y}</span><br/>', // Set font size of tooltip point
        },
      },
    },
    series: [
      {
        name:
          chartType === 'line'
            ? `Price`
            : chartType === 'candlestick'
            ? `Price Movement`
            : chartType === 'bar'
            ? `Bar series name`
            : 'Chart type not defined',
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
        <style>
        body, html, #container {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          
        }
      </style>
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
    backgroundColor: 'white',
  },
});
