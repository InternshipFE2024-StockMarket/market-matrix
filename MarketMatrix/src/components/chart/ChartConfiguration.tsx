import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import WebView from 'react-native-webview';
import {Colors} from '../../constants/Colors';

interface ChartConfigurationProp {
  title: string;
  chartType: 'line' | 'candlestick' | 'column';
  seriesData: number[];
  ticker?: string;
  height?: number;
  xaxis?: any[] | undefined;
}

export const ChartConfiguration = ({
  title,
  chartType,
  seriesData,
  ticker,
  height,
  xaxis,
}: ChartConfigurationProp) => {
  const [loading, setLoading] = useState(true);

  const chartConfig = {
    chart: {
      type: chartType,
      backgroundColor: Colors.companyScreenBackground,
      style: {
        color: chartType === 'candlestick' ? Colors.pink : Colors.text500,
        fontSize: height ? (height > 500 ? '28' : '14') : '28',
        fontWeight: 'bold',
      },
    },
    title: {
      text: title,
      style: {
        color: Colors.text500,
      },
    },
    xAxis: {
      title: {
        text: chartType === 'column' ? '' : 'Date',
        style: {
          color: Colors.text500,
        },
      },
      categories:
        chartType === 'column'
          ? ['Stocks', 'Crypto', 'Indices']
          : chartType === 'line'
          ? xaxis
          : '',
      type: chartType === 'candlestick' ? 'datetime' : 'date',
      gridLineWidth: 0,
      labels: {
        style: {
          color: Colors.text500,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Price',
        style: {
          color: Colors.text500,
        },
      },
      gridLineWidth: 0,
      labels: {
        style: {
          color: Colors.text500,
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          color: Colors.text500,
          style: {
            fontWeight: 'bold',
            fontSize: height ? (height > 500 ? '24' : '14') : 24,
          },
        },
        color: Colors.green,
      },
      candlestick: {
        color: chartType === 'candlestick' ? Colors.pink : Colors.text500,
        lineColor: Colors.text500,
        upColor: Colors.green,
        upLineColor: Colors.green,
      },
      column: {},
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: Colors.text500,
        fontSize: height ? (height > 500 ? '24' : '14') : '24',
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
            : chartType === 'column'
            ? `Assets type`
            : 'Chart type not defined',
        data: seriesData,
        colorByPoint: true,
        colors:
          chartType === 'column'
            ? [Colors.pink, Colors.green, Colors.text500]
            : ' ',
        tooltip: {
          valueDecimals: 2,
        },
        style: {
          color: Colors.text500,
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
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>There is no data provided yet.</Text>
        </View>
      )}
      {seriesData.length > 0 && loading && (
        <ActivityIndicator
          size="large"
          color={Colors.text500}
          style={styles.loader}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: Colors.background600,
  },
  textContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    flex: 1,
  },
  text: {
    color: Colors.text500,
    fontSize: 20,
    alignSelf: 'center',
  },
  loader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.background600,
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
