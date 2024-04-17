import {StyleSheet, View} from 'react-native';
import React from 'react';
import {ChartConfiguration} from '../chart/ChartConfiguration';

interface BarChartProps {
  invData: number[];
}

const BarChart = (invData: BarChartProps) => {
  return (
    <View style={styles.chart}>
      <ChartConfiguration
        title="Asset Type Investment Comparison"
        seriesData={invData.invData}
        chartType="column"
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
});
