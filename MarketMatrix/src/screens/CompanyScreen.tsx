import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';
import {Stock} from '../constants/Interfaces';
import {CompanyTabNavigation} from '../navigation/CompanyTabNavigation';
import {fetchStockById} from '../utils/http/fetchStockbyTicker';
import {BackButton} from '../components/UI/BackButton';
import {useStock} from '../contexts/stocksContext';

const nasdaq = 'NASDAQ:';
const ceo = 'CEO:';
const industry = 'Industry:';
const sector = 'Sector:';
const market = 'Market capitalization';

export const CompanyScreen = ({navigation, route}: any) => {
  const [selStock, setSelectedStock] = useState<Stock | string>();
  const stockContext = useStock();
  const id = route.params.id;
  const findById = stockContext?.findById;

  useEffect(() => {
    if (id && findById) {
      const stock = findById(id);
      if (stock) {
        setSelectedStock(stock);
      } else {
        setSelectedStock('Stock not found');
      }
    }
  }, [id, stockContext]);

  if (typeof selStock === 'string') {
    return <Text>Stock not found</Text>;
  }

  const change = selStock?.priceChange;
  const percentage = selStock?.priceChangePercentage;

  return (
    <GradientBackground>
      <BackButton
        text="Back"
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      />
      {selStock ? (
        <View>
          <View style={styles.rootContainer}>
            <View style={styles.companyDetaildContainer}>
              <View style={styles.upperView}>
                <Image
                  style={styles.companyImage}
                  source={{uri: selStock.image}}
                />
                <View style={styles.mainDetails}>
                  <View style={{flex: 1}}>
                    <Text style={styles.companyName}>
                      {selStock.companyName}
                    </Text>
                    <Text style={styles.compantIndex}>
                      {nasdaq} {selStock.ticker}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.companyCapital}>
                      ${selStock.companyValue}
                    </Text>
                    <Text style={styles.marketText}>{market}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.secondaryDetails}>
                <View style={styles.detailColumn}>
                  <Text style={styles.detailsText}>
                    {ceo} {selStock.ceo}
                  </Text>
                  <Text style={styles.detailsText}>
                    {industry} {selStock.industry}
                  </Text>
                  <Text style={styles.detailsText}>
                    {sector} {selStock.sector}
                  </Text>
                </View>
                <View style={styles.priceColumn}>
                  <Text style={styles.priceValue}>${selStock.price}</Text>
                  <View style={styles.fluctuationText}>
                    <Text
                      style={{
                        fontSize: 16,
                        color:
                          change && change > 0 ? Colors.green : Colors.pink,
                      }}>
                      {change && change > 0 ? '+' : ''}
                      {change}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        color:
                          percentage && percentage > 0
                            ? Colors.green
                            : Colors.pink,
                      }}>
                      ({percentage && percentage > 0 ? '+' : ''}
                      {percentage}%)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <CompanyTabNavigation id={id} />
          </View>
        </View>
      ) : (
        <Text>No details available for {id}</Text>
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
});
