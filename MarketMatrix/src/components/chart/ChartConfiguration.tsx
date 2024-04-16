import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
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
      backgroundColor: Colors.companyScreenBackground,
      style: {
        fontFamily: 'Arial',
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
      },
    },
    title: {
      text: title,
      style: {
        color: '#ffffff',
      },
    },
    xAxis: {
      title: {
        text: 'Date',
        style: {
          color: '#ffffff',
        },
      },
      type: 'datetime',
      gridLineWidth: 0,
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Price',
        style: {
          color: '#ffffff',
        },
      },
      gridLineWidth: 0,
      labels: {
        style: {
          color: '#ffffff',
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          color: '#ffffff',
          style: {
            fontWeight: 'bold',
            fontSize: 24,
          },
        },
        color: Colors.green,
      },
      candlestick: {
        color: Colors.pink,
        lineColor: Colors.pink,
        upColor: Colors.green,
        upLineColor: Colors.green,
        tooltip: {
          headerFormat: '<span style="font-size: 30px">{point.key}</span><br/>',
          pointFormat: '<span style="font-size: 30px">{point.y}</span><br/>',
        },
      },
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: '#ffffff',
        fontSize: 24,
      },
    },
    exporting: {
      enabled: false,
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
        style: {
          color: '#ffffff',
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
          margin: 0;
          padding: 0;
          background-color: ${Colors.background600};
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
      {seriesData.length > 0 ? (
        <WebView
          originWhitelist={['*']}
          source={{html: htmlContent}}
          style={{flex: 1}}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>There are no data</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 26,
    alignSelf: 'center',
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 26,
    alignSelf: 'center',
  },
});
