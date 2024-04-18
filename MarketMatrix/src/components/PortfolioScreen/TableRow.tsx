import React from 'react';
import {Pressable, View, useWindowDimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AssetCell from './AssetCell';
import {UserInvestmentsDetails} from '../../constants/Interfaces';
import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';
import {useThemeContext} from '../../contexts/themeContext';

const TableRow = ({
  id,
  ticker,
  amount,
  plValue,
  dynamicValue,
  currentPrice,
  image,
}: UserInvestmentsDetails) => {
  const navigation = useNavigation<{
    navigate: (screen: string, params: {id: string}) => void;
  }>();
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  const {theme} = useThemeContext();
  const {tableRowStyles} = useThemeColorHook();

  return (
    <Pressable onPress={() => navigation.navigate('Company', {id: id})}>
      <LinearGradient
        colors={[theme.cardBackground500, theme.cardBackground700]}
        style={tableRowStyles.container}>
        <View
          style={
            isLandscape ? tableRowStyles.landscapeRow : tableRowStyles.row
          }>
          <AssetCell
            ticker={ticker}
            price={currentPrice}
            logoSource={image}
            style={tableRowStyles.cell}
          />
          <CustomText style={[tableRowStyles.cell, tableRowStyles.text]}>
            {amount}
          </CustomText>
          <CustomText
            style={[
              {color: plValue > 0 ? theme.green : theme.pink},
              tableRowStyles.cell,
            ]}>
            {plValue}
          </CustomText>
          <CustomText style={[tableRowStyles.cell, tableRowStyles.text]}>
            {dynamicValue}
          </CustomText>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default TableRow;
