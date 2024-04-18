import React from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import TableRow from './TableRow';
import {UserInvestmentsDetails} from '../../constants/Interfaces';
import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface DynamicTableProps {
  data: UserInvestmentsDetails[];
}

const DynamicTable = ({data}: DynamicTableProps) => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  const {dynamicTableStyles} = useThemeColorHook();

  return (
    <View style={dynamicTableStyles.rootContainer}>
      <View style={dynamicTableStyles.headerContainer}>
        <View
          style={
            isLandscape
              ? dynamicTableStyles.landscapeHeader
              : dynamicTableStyles.header
          }>
          <CustomText style={dynamicTableStyles.headerText}>Asset</CustomText>
          <CustomText style={dynamicTableStyles.headerText}>Amount</CustomText>
          <CustomText style={dynamicTableStyles.headerText}>P/L</CustomText>
          <CustomText style={dynamicTableStyles.headerText}>Value</CustomText>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TableRow
            id={item.id}
            ticker={item.ticker}
            amount={item.amount}
            plValue={item.plValue}
            dynamicValue={item.dynamicValue}
            currentPrice={item.currentPrice}
            image={item.image}
            type={item.type}
          />
        )}
      />
    </View>
  );
};

export default DynamicTable;
