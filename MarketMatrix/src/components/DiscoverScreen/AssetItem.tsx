/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Stock} from '../../constants/Interfaces';

import CardContainer from '../UI/CardContainer';
import CustomText from '../UI/CustomText';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface AssetItemProps {
  stock: Stock;
}

const AssetItem = ({stock}: AssetItemProps) => {
  const navigation = useNavigation<{
    navigate: (screen: string, params: {id: string}) => void;
  }>();

  const {theme} = useThemeContext();
  const {assetItemStyles} = useThemeColorHook();

  const change = stock.priceChangePercentage;
  return (
    <Pressable onPress={() => navigation.navigate('Company', {id: stock.id})}>
      <CardContainer>
        <View style={assetItemStyles.container}>
          <View style={assetItemStyles.leftContainer}>
            <View style={assetItemStyles.titleContainer}>
              <Image
                source={{uri: stock.image}}
                style={assetItemStyles.image}
              />
              <View>
                <CustomText style={assetItemStyles.ticker}>
                  {stock.ticker}
                </CustomText>
                <CustomText style={assetItemStyles.name}>
                  {stock.companyName}
                </CustomText>
              </View>
            </View>
          </View>

          <View style={assetItemStyles.rightContainer}>
            <CustomText style={assetItemStyles.price}>{stock.price}</CustomText>
            <CustomText
              style={{
                color: change > 0 ? theme.green : theme.pink,
                fontFamily: 'monospace',
                fontSize: 14,
              }}>
              {change > 0 ? '+' : ''}
              {change.toFixed(2)}%
            </CustomText>
          </View>
        </View>
      </CardContainer>
    </Pressable>
  );
};

export default AssetItem;
