import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import WebView from 'react-native-webview';
import CustomText from '../UI/CustomText';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

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
  height,
  xaxis,
}: ChartConfigurationProp) => {
  const [loading, setLoading] = useState(true);
  const {theme} = useThemeContext();
  const {chartConfigurationStyles} = useThemeColorHook();

  const chartConfig = {
    chart: {
      type: chartType,
      backgroundColor: theme.companyScreenBackground,
      style: {
        color: chartType === 'candlestick' ? theme.pink : theme.text500,
        fontSize: height ? (height > 500 ? '28' : '14') : '28',
        fontWeight: 'bold',
      },
    },
    title: {
      text: title,
      style: {
        color: theme.text500,
      },
    },
    xAxis: {
      title: {
        text: chartType === 'column' ? '' : 'Date',
        style: {
          color: theme.text500,
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
          color: theme.text500,
        },
      },
    },
    yAxis: {
      title: {
        text: 'Price',
        style: {
          color: theme.text500,
        },
      },
      gridLineWidth: 0,
      labels: {
        style: {
          color: theme.text500,
        },
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
          color: theme.text500,
          style: {
            fontWeight: 'bold',
            fontSize: height ? (height > 500 ? '24' : '14') : 24,
          },
        },
        color: theme.green,
      },
      candlestick: {
        color: chartType === 'candlestick' ? theme.pink : theme.text500,
        lineColor: theme.text500,
        upColor: theme.green,
        upLineColor: theme.green,
      },
      column: {},
    },
    legend: {
      enabled: true,
      itemStyle: {
        color: theme.text500,
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
            ? [theme.pink, theme.green, theme.text500]
            : ' ',
        tooltip: {
          valueDecimals: 2,
        },
        style: {
          color: theme.text500,
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
          background-color: ${theme.background600};
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
    <View style={chartConfigurationStyles.container}>
      {seriesData.length > 0 ? (
        <WebView
          originWhitelist={['*']}
          source={{html: htmlContent}}
          style={{flex: 1}}
          onLoadEnd={() => setLoading(false)}
        />
      ) : (
        <View style={chartConfigurationStyles.textContainer}>
          <CustomText style={chartConfigurationStyles.text}>
            There is no data provided yet.
          </CustomText>
        </View>
      )}
      {seriesData.length > 0 && loading && (
        <ActivityIndicator
          size="large"
          color={theme.text500}
          style={chartConfigurationStyles.loader}
        />
      )}
    </View>
  );
};
