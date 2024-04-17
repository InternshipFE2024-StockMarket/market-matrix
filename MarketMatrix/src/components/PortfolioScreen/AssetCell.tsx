import React from 'react';
import {Image, StyleSheet, View, ViewStyle} from 'react-native';
import {Colors} from '../../constants/Colors';
import CustomText from '../UI/CustomText';

interface AssetCellProps {
  logoSource: any;
  ticker: string;
  price: number;
  style: ViewStyle;
}

const AssetCell = ({logoSource, ticker, price, style}: AssetCellProps) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: logoSource}} />
      </View>
      <View>
        <CustomText style={styles.ticker}>{ticker}</CustomText>
        <CustomText style={styles.price}>{price}</CustomText>
      </View>
    </View>
  );
};

export default AssetCell;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  image: {
    width: '90%',
    height: '90%',
  },
  ticker: {
    color: Colors.text500,
    fontWeight: 'bold',
    fontSize: 18,
  },
  price: {
    color: Colors.text500,
    fontSize: 14,
  },
});
