import {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';
import {Stock} from '../constants/Interfaces';
import {CompanyTabNavigation} from '../navigation/CompanyTabNavigation';
import {BackButton} from '../components/UI/BackButton';
import {useStock} from '../contexts/stocksContext';
import {StockDetails} from '../components/company-screen/StockDetails';

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
            <StockDetails selStock={selStock} />
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
});
