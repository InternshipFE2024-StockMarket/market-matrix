/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {Stock} from '../../constants/Interfaces';
import {Colors} from '../../constants/Colors';
import CardContainer from '../UI/CardContainer';
import {useNavigation} from '@react-navigation/native';

interface AssetItemProps {
  stock: Stock;
}

const AssetItem = ({stock}: AssetItemProps) => {
  const navigation = useNavigation<{
    navigate: (screen: string, params: {id: string}) => void;
  }>();

  const change = stock.priceChangePercentage;
  return (
    <Pressable onPress={() => navigation.navigate('Company', {id: stock.id})}>
      <CardContainer>
        <View style={styles.container}>
          <View style={styles.leftContainer}>
            <View style={styles.titleContainer}>
              <Image source={{uri: stock.image}} style={styles.image} />
              <View>
                <Text style={styles.ticker}>{stock.ticker}</Text>
                <Text style={styles.name}>{stock.companyName}</Text>
              </View>
            </View>
          </View>

          <View style={styles.rightContainer}>
            <Text style={styles.price}>{stock.price}</Text>
            <Text
              style={{
                color: change > 0 ? Colors.green : Colors.pink,
                fontFamily: 'monospace',
                fontSize: 14,
              }}>
              {change > 0 ? '+' : ''}
              {change.toFixed(2)}%
            </Text>
          </View>
        </View>
      </CardContainer>
    </Pressable>
  );
};

export default AssetItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    gap: 5,
  },
  rightContainer: {
    alignItems: 'flex-end',
    gap: 6,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    color: Colors.text500,
  },
  ticker: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text500,
  },
  name: {
    fontSize: 16,
    color: Colors.text500,
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: Colors.text500,
  },
  price: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: Colors.text500,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
