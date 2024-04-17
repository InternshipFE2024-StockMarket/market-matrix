import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';
import AssetCell from './AssetCell';
import {UserInvestmentsDetails} from '../../constants/Interfaces';

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

  return (
    <Pressable onPress={() => navigation.navigate('Company', {id: id})}>
      <LinearGradient
        colors={[Colors.cardBackground500, Colors.cardBackground700]}
        style={styles.container}>
        <View style={isLandscape ? styles.landscapeRow : styles.row}>
          <AssetCell
            ticker={ticker}
            price={currentPrice}
            logoSource={image}
            style={styles.cell}
          />
          <Text style={[styles.cell, styles.text]}>{amount}</Text>
          <Text
            style={[
              {color: plValue > 0 ? Colors.green : Colors.pink},
              styles.cell,
            ]}>
            {plValue}
          </Text>
          <Text style={[styles.cell, styles.text]}>{dynamicValue}</Text>
        </View>
      </LinearGradient>
    </Pressable>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  container: {},
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  landscapeRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    color: Colors.text500,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
