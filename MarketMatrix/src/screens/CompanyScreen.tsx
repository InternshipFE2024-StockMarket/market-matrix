import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';
import {Stock} from '../constants/Interfaces';
import {CompanyTabNavigation} from '../navigation/CompanyTabNavigation';
import {fetchStockByTicker} from '../utils/http/fetchStockbyTicker';
import {BackButton} from '../components/UI/BackButton';

const nasdaq = 'NASDAQ:';
const ceo = 'CEO:';
const industry = 'Industry:';
const sector = 'Sector:';
const market = 'Market capitalization';

export const CompanyScreen = ({navigation}: any) => {
  const [selectedStock, setSelectedStock] = useState<Stock | undefined>();
  const ticker = 'AAPL';

  useEffect(() => {
    getStockByTicker();
  }, [ticker]);

  const getStockByTicker = async () => {
    try {
      const stock = await fetchStockByTicker(ticker);
      setSelectedStock(stock);
    } catch (error: any) {
      console.error('Failed to fetch stock:', error);
    }
  };

  return (
    <GradientBackground>
      {selectedStock ? (
        <View>
          <BackButton
            text="Back"
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          />
          <View style={styles.rootContainer}>
            <View style={styles.companyDetaildContainer}>
              <View style={styles.upperView}>
                <Image
                  style={styles.companyImage}
                  source={{uri: selectedStock.image}}
                />
                <View style={styles.mainDetails}>
                  <View>
                    <Text style={styles.companyName}>
                      {selectedStock.companyName}
                    </Text>
                    <Text style={styles.compantIndex}>
                      {nasdaq} {selectedStock.ticker}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.companyCapital}>
                      ${selectedStock.companyValue}
                    </Text>
                    <Text style={styles.marketText}>{market}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.secondaryDetails}>
                <View style={styles.detailColumn}>
                  <Text style={styles.detailsText}>
                    {ceo} {selectedStock.ceo}
                  </Text>
                  <Text style={styles.detailsText}>
                    {industry} {selectedStock.industry}
                  </Text>
                  <Text style={styles.detailsText}>
                    {sector} {selectedStock.sector}
                  </Text>
                </View>
                <View style={styles.priceColumn}>
                  <Text style={styles.priceValue}>${selectedStock.price}</Text>
                  <Text style={styles.fluctuationText}>
                    {selectedStock.priceChange.toFixed(2)} (
                    {selectedStock.priceChangePercentage.toFixed(2)}%)
                  </Text>
                </View>
              </View>
            </View>
            <CompanyTabNavigation ticker={ticker} />
          </View>
        </View>
      ) : (
        <Text>No details available for {ticker}</Text>
      )}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  backButton: {
    marginHorizontal: '5%',
  },
  rootContainer: {
    marginHorizontal: '5%',
    marginTop: '5%',
    backgroundColor: Colors.companyScreenBackground,
    height: '90%',
    borderRadius: 15,
  },
  companyDetaildContainer: {
    margin: '3%',
    height: '30%',
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
    flex: 1,
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
    color: Colors.pink,
    fontSize: 16,
  },
});
