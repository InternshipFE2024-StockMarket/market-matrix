/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Stock} from '../../constants/Interfaces';
import {Colors} from '../../constants/Colors';
import {useStock} from '../../contexts/stocksContext';
import CustomText from '../UI/CustomText';
import Button from '../UI/Button';
import {useAuth} from '../../contexts/authContext';
import {getUserAvailableAmount} from '../../utils/functions/getUserAvailableAmount';
import {BuyModal} from './BuyModal';

const nasdaq = 'NASDAQ:';
const ceo = 'CEO:';
const industry = 'Industry:';
const sector = 'Sector:';
const market = 'Market capitalization';
interface RouteParams {
  id: string;
}

export const StockDetails = () => {
  const [selStock, setSelectedStock] = useState<Stock | string>();
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const stockContext = useStock();
  const route = useRoute();
  const {id} = route.params as RouteParams;
  const userCtx = useAuth();
  const userId = userCtx.userId;

  const findById = stockContext?.findById;

  useEffect(() => {
    if (id && findById) {
      const stock = findById(id.toString());
      if (stock) {
        setSelectedStock(stock);
      } else {
        setSelectedStock('Stock not found');
      }
    }
  }, [id, stockContext]);

  if (typeof selStock === 'string') {
    return <CustomText>Stock not found</CustomText>;
  }

  const handleTradeAction = () => {
    setModalIsVisible(true);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  const userAvailableAmount = getUserAvailableAmount(userId);
  const change = selStock?.priceChange;
  const percentage = selStock?.priceChangePercentage;

  return (
    <>
      <View style={styles.companyDetaildContainer}>
        <View style={styles.upperView}>
          <Image style={styles.companyImage} source={{uri: selStock?.image}} />
          <View style={styles.mainDetails}>
            <View style={{flex: 1}}>
              <CustomText style={styles.companyName}>
                {selStock?.companyName}
              </CustomText>
              <CustomText style={styles.compantIndex}>
                {nasdaq} {selStock?.ticker}
              </CustomText>
            </View>
            <View>
              <CustomText style={styles.companyCapital}>
                ${selStock?.companyValue}
              </CustomText>
              <CustomText style={styles.marketText}>{market}</CustomText>
            </View>
          </View>
        </View>
        <View style={styles.secondaryDetails}>
          <View style={styles.detailColumn}>
            <CustomText style={styles.detailsText}>
              {ceo} {selStock?.ceo}
            </CustomText>
            <CustomText style={styles.detailsText}>
              {industry} {selStock?.industry}
            </CustomText>
            <CustomText style={styles.detailsText}>
              {sector} {selStock?.sector}
            </CustomText>
          </View>
          <View style={styles.priceColumn}>
            <View>
              <CustomText style={styles.priceValue}>
                ${selStock?.price}
              </CustomText>
              <View style={styles.fluctuationText}>
                <CustomText
                  style={{
                    fontSize: 16,
                    color: change && change > 0 ? Colors.green : Colors.pink,
                  }}>
                  {change && change > 0 ? '+' : ''}
                  {change}
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 16,
                    color:
                      percentage && percentage > 0 ? Colors.green : Colors.pink,
                  }}>
                  ({percentage && percentage > 0 ? '+' : ''}
                  {percentage}%)
                </CustomText>
              </View>
              <View style={styles.buyButtonContainer}>
                <Button
                  style={{backgroundColor: Colors.background600}}
                  onPress={handleTradeAction}>
                  Buy
                </Button>
              </View>
            </View>
          </View>
        </View>
      </View>
      {modalIsVisible && (
        <BuyModal
          isVisible={modalIsVisible}
          closeModal={handleCloseModal}
          availableAmount={userAvailableAmount}
        />
      )}
    </>
  );
};
const styles = StyleSheet.create({
  companyDetaildContainer: {
    margin: '3%',
    height: '30%',
    flex: 0.55,
  },
  upperView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  mainDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  companyImage: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 10,
  },
  companyName: {
    color: Colors.text500,
    fontSize: 24,
    marginBottom: 10,
  },
  compantIndex: {
    color: Colors.text500,
    fontSize: 14,
  },
  companyCapital: {
    color: Colors.text500,
    fontSize: 32,
    marginBottom: 2,
  },
  marketText: {
    color: Colors.text500,
    fontSize: 12,
  },
  secondaryDetails: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  detailColumn: {
    flex: 0.8,
    paddingRight: 10,
  },
  priceColumn: {
    flex: 0.6,
    alignItems: 'flex-end',
  },
  detailsText: {
    color: Colors.text500,
    fontSize: 16,
    marginVertical: 5,
  },
  priceValue: {
    color: Colors.text500,
    fontSize: 28,
    marginBottom: 2,
  },
  fluctuationText: {
    flexDirection: 'row',
  },
  buyButtonContainer: {
    marginVertical: '5%',
    height: 90,
  },
});
