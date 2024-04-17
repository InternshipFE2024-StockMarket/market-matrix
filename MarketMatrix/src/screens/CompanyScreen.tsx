import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';
import {Stock} from '../constants/Interfaces';
import {CompanyTabNavigation} from '../navigation/CompanyTabNavigation';
import {BackButton} from '../components/UI/BackButton';
import {useStock} from '../contexts/stocksContext';
import {StockDetails} from '../components/company-screen/StockDetails';

export const CompanyScreen = ({navigation, route}: any) => {
  const [selStock, setSelectedStock] = useState<Stock | string>();
  const [loading, setLoading] = useState(false);
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height,
  );
  const stockContext = useStock();
  const id = route.params.id;
  const findById = stockContext?.findById;

  useEffect(() => {
    const onChange = () => {
      setLoading(true);
      const {height} = Dimensions.get('window');
      setScreenHeight(height);
      setLoading(false);
    };

    Dimensions.addEventListener('change', onChange);
  }, [screenHeight]);

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

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={Colors.background500} />
      </View>
    );
  }

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
          <View
            style={[
              styles.rootContainer,
              screenHeight < 500 && {marginTop: '2%'},
            ]}>
            {screenHeight > 500 && <StockDetails />}
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
    marginTop: '2%',
  },
  rootContainer: {
    marginHorizontal: '5%',
    marginTop: '5%',
    backgroundColor: Colors.companyScreenBackground,
    height: '90%',
    borderRadius: 15,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
