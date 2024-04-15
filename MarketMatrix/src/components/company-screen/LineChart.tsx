import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {WebView} from 'react-native-webview';
import axios from 'axios';
import {Stock} from '../../constants/Interfaces';

export const LineChart = () => {
  const chartConfig = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Monthly Average Temperature',
    },
    subtitle: {
      text: 'Source: WorldClimate.com',
    },
    xAxis: {
      categories: [
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
      ],
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: 'London',
        data: [
          3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8,
        ],
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
