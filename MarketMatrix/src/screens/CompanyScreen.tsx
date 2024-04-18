/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Stock} from '../constants/Interfaces';
import {CompanyTabNavigation} from '../navigation/CompanyTabNavigation';
import {BackButton} from '../components/UI/BackButton';
import {useStock} from '../contexts/stocksContext';
import {StockDetails} from '../components/company-screen/StockDetails';
import CustomText from '../components/UI/CustomText';
import {useThemeColorHook} from '../utils/useThemeColorHook';
import {useThemeContext} from '../contexts/themeContext';

export const CompanyScreen = ({navigation, route}: any) => {
  const {theme, setTheme} = useThemeContext();
  const {companyScreenStyles} = useThemeColorHook();
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
      <View style={companyScreenStyles.loader}>
        <ActivityIndicator size="large" color={theme.background500} />
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
        style={companyScreenStyles.backButton}
      />
      {selStock ? (
        <View>
          <View
            style={[
              companyScreenStyles.rootContainer,
              screenHeight < 500 && {marginTop: '2%'},
            ]}>
            {screenHeight > 500 && <StockDetails />}
            <CompanyTabNavigation id={id} />
          </View>
        </View>
      ) : (
        <CustomText>No details available for {id}</CustomText>
      )}
    </GradientBackground>
  );
};
