import React from 'react';
import {Image, View, ViewStyle} from 'react-native';

import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface AssetCellProps {
  logoSource: any;
  ticker: string;
  price: number;
  style: ViewStyle;
}

const AssetCell = ({logoSource, ticker, price, style}: AssetCellProps) => {
  const {assetsCellStyles} = useThemeColorHook();

  return (
    <View style={[assetsCellStyles.container, style]}>
      <View style={assetsCellStyles.imageContainer}>
        <Image style={assetsCellStyles.image} source={{uri: logoSource}} />
      </View>
      <View>
        <CustomText style={assetsCellStyles.ticker}>{ticker}</CustomText>
        <CustomText style={assetsCellStyles.price}>{price}</CustomText>
      </View>
    </View>
  );
};

export default AssetCell;
