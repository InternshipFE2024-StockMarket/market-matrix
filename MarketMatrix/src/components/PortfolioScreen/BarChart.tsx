import {StyleSheet, View, useWindowDimensions} from 'react-native';
import React from 'react';
import {ChartConfiguration} from '../chart/ChartConfiguration';

interface BarChartProps {
  invData: number[];
}

const BarChart = (invData: BarChartProps) => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={isLandscape ? styles.landscapeChart : styles.chart}>
      <ChartConfiguration
        title="Asset Type Investment Comparison"
        seriesData={invData.invData}
        chartType="column"
        height={height}
      />
    </View>
  );
};

export default BarChart;

const styles = StyleSheet.create({
  chart: {
    width: '90%',
    height: '80%',
    justifyContent: 'center',
  },
  landscapeChart: {
    width: '90%',
    height: '100%',
    justifyContent: 'center',
  },
});
