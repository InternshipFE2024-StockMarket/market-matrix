import {useEffect, useState} from 'react';
import axios from 'axios';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';
import {Stock} from '../constants/Interfaces';
import {CompanyTabNavigation} from '../navigation/CompanyTabNavigation';

export const CompanyScreen = ({navigation}: any) => {
  const [selectedStock, setSelectedStock] = useState<Stock | undefined>();
  const ticker = 'AAPL';

  useEffect(() => {
    axios
      .get('http://localhost:3000/stocks')
      .then(response => {
        const selStock = response.data.find(
          (stock: Stock) => stock.ticker === ticker,
        );
        setSelectedStock(selStock);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(selectedStock);

  return (
    <GradientBackground>
      {selectedStock ? (
        <View>
          <View style={styles.rootContainer}>
            <View style={styles.companyDetaildContainer}>
              <View style={styles.mainDetails}>
                <Image
                  style={styles.companyImage}
                  source={{uri: selectedStock.image}}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <View>
                    <Text style={styles.companyName}>
                      {selectedStock.companyName}
                    </Text>
                    <Text style={styles.compantIndex}>
                      NASDAQ: {selectedStock.ticker}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.companyCapital}>
                      ${selectedStock.companyValue}
                    </Text>
                    <Text style={styles.marketText}>Market capitalization</Text>
                  </View>
                </View>
              </View>
              <View style={styles.secondaryDetails}>
                <View style={styles.detailColumn}>
                  <Text style={styles.detailsText}>
                    CEO: {selectedStock.ceo}
                  </Text>
                  <Text style={styles.detailsText}>
                    Industry: {selectedStock.industry}
                  </Text>
                  <Text style={styles.detailsText}>
                    Sector: {selectedStock.sector}
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
            <CompanyTabNavigation />
          </View>
          <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
      ) : (
        <Text>No details available for AAPL.</Text>
      )}
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginHorizontal: '5%',
    marginTop: '10%',
    backgroundColor: 'rgba(177, 188, 222, 0.1)',
    height: '90%',
    borderRadius: 15,
  },
  companyDetaildContainer: {
    margin: '3%',
    height: '30%',
  },
  mainDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
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
