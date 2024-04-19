/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Stock} from '../../constants/Interfaces';
import {useStock} from '../../contexts/stocksContext';
import CustomText from '../UI/CustomText';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';
import Button from '../../components/UI/Button';
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

  const {theme} = useThemeContext();
  const {stockDetailsStyles} = useThemeColorHook();

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const stockContext = useStock();
  const route = useRoute();
  const {id} = route.params as RouteParams;

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

  const change = selStock?.priceChange;
  const percentage = selStock?.priceChangePercentage;

  return (
    <>
      <View style={stockDetailsStyles.companyDetaildContainer}>
        <View style={stockDetailsStyles.upperView}>
          <Image
            style={stockDetailsStyles.companyImage}
            source={{uri: selStock?.image}}
          />
          <View style={stockDetailsStyles.mainDetails}>
            <View style={{flex: 1}}>
              <CustomText style={stockDetailsStyles.companyName}>
                {selStock?.companyName}
              </CustomText>
              <CustomText style={stockDetailsStyles.compantIndex}>
                {nasdaq} {selStock?.ticker}
              </CustomText>
            </View>
            <View>
              <CustomText style={stockDetailsStyles.companyCapital}>
                ${selStock?.companyValue}
              </CustomText>
              <CustomText style={stockDetailsStyles.marketText}>
                {market}
              </CustomText>
            </View>
          </View>
        </View>
        <View style={stockDetailsStyles.secondaryDetails}>
          <View style={stockDetailsStyles.detailColumn}>
            <CustomText style={stockDetailsStyles.detailsText}>
              {ceo} {selStock?.ceo}
            </CustomText>
            <CustomText style={stockDetailsStyles.detailsText}>
              {industry} {selStock?.industry}
            </CustomText>
            <CustomText style={stockDetailsStyles.detailsText}>
              {sector} {selStock?.sector}
            </CustomText>
          </View>
          <View style={stockDetailsStyles.priceColumn}>
            <View>
              <CustomText style={stockDetailsStyles.priceValue}>
                ${selStock?.price}
              </CustomText>
              <View style={stockDetailsStyles.fluctuationText}>
                <CustomText
                  style={{
                    fontSize: 16,
                    color: change && change > 0 ? theme.green : theme.pink,
                  }}>
                  {change && change > 0 ? '+' : ''}
                  {change}
                </CustomText>
                <CustomText
                  style={{
                    fontSize: 16,
                    color:
                      percentage && percentage > 0 ? theme.green : theme.pink,
                  }}>
                  ({percentage && percentage > 0 ? '+' : ''}
                  {percentage}%)
                </CustomText>
              </View>
              <View style={stockDetailsStyles.buyButtonContainer}>
                <Button
                  style={{backgroundColor: theme.background600}}
                  onPress={handleTradeAction}>
                  Trade
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
          stockId={selStock?.id}
          stockTicker={selStock?.ticker}
          boughtPrice={selStock?.price}
        />
      )}
    </>
  );
};
