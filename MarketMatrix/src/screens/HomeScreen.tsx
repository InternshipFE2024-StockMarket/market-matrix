/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  StyleSheet,
  View,
  useWindowDimensions,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import {CurrencyDropdown} from '../components/HomeScreenComponents/CurrencyDropdown';
import {Story} from '../components/HomeScreenComponents/Story';
import axios from 'axios';
import {StockChanges} from '../constants/Interfaces';
import {useStock} from '../contexts/stocksContext';
import {useTotalPortofolioValue} from '../utils/functions/getTotalPortofolioValue';
import {TotalValueLineChart} from '../components/HomeScreenComponents/TotalValueLineChart';
import {useAuth} from '../contexts/authContext';
import {StoryModal} from '../components/HomeScreenComponents/StoryModal';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../components/UI/CustomText';
import EmptyPortfolio from '../components/PortfolioScreen/EmptyPortfolio';

interface Story {
  company: string;
  change: number | string;
  logo: {uri: string};
  name: string;
  percentage: number;
  date: string;
  id: string;
}

const HomeScreen = () => {
  const [currency, setCurrency] = useState('USD');
  const [changes, setChanges] = useState<StockChanges[]>([]);
  const [showModal, setShowModal] = useState(false);

  const [storyState, setStoryState] = useState({
    title: '',
    logo: {uri: ''},
    totalDifference: 0,
    percentage: 0,
    date: '',
    id: '',
  });

  const {stocks} = useStock();
  const userCtx = useAuth();
  const userId = userCtx.userId;
  const userName = userCtx.userName;
  const logout = userCtx.logout;

  let portfolioValue = Number(useTotalPortofolioValue(userId)?.total);
  let totalDifference = Number(useTotalPortofolioValue(userId)?.difference);
  const {height} = useWindowDimensions();

  const navigation = useNavigation<{
    navigate: (screen: string, params: {id: string}) => void;
  }>();

  let percentage = ((totalDifference * 100) / portfolioValue).toFixed(2);

  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/src/db.json');
        setChanges(response.data.changes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const maxDifferences: {
    [ticker: string]: {difference: number | string; date: string};
  } = {};

  changes?.forEach(change => {
    let maxDifference = -Infinity;
    let minDifference = Infinity;
    let maxDifferenceDate = '';
    let minDifferenceDate = '';

    const last7DaysValues = change.values.slice(-7);

    last7DaysValues.forEach(value => {
      const difference = value.close - value.open;
      if (difference > maxDifference) {
        maxDifference = difference;
        maxDifferenceDate = value.date;
      }
      if (difference < minDifference) {
        minDifference = difference;
        minDifferenceDate = value.date;
      }
    });

    if (Math.abs(minDifference) > maxDifference) {
      maxDifferences[change.ticker] = {
        difference: minDifference.toFixed(2),
        date: maxDifferenceDate,
      };
    } else {
      maxDifferences[change.ticker] = {
        difference: maxDifference.toFixed(2),
        date: maxDifferenceDate,
      };
    }
  });

  const entries = Object.entries(maxDifferences);

  entries.sort(
    (a, b) =>
      Math.abs(parseFloat(b[1].difference as string)) -
      Math.abs(parseFloat(a[1].difference as string)),
  );

  const firstEntries = entries.slice(0, 5);

  let stories: Story[] = [];
  firstEntries.forEach(item => {
    let company = item[0];
    let change = item[1];
    const stock = stocks.find(stock => stock.ticker === company);
    if (stock) {
      let obj = {
        company: company,
        change: change.difference,
        logo: {uri: stock.image},
        name: stock.companyName,
        percentage: ((change.difference as number) * 100) / stock.openPrice,
        date: change.date,
        id: stock.id,
      };
      stories.push(obj);
    }
  });

  const handleOpenModal = (story: Story) => {
    setShowModal(true);

    setStoryState({
      title: story.name,
      logo: story.logo,
      totalDifference: story.change as unknown as number,
      percentage: story.percentage.toFixed(2) as unknown as number,
      date: story.date,
      id: story.id,
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNavigate = (companyId: string) => {
    navigation.navigate('Company', {id: companyId});
    setShowModal(false);
  };

  const currencyPosition = height < 500 ? 0 : 0;
  const storiesAllignment = height < 500 ? 'flex-start' : 'center';
  const orientation = height < 500 ? 'row' : 'column';
  const chartWidth = height < 500 ? '55%' : '100%';
  const chartHeight = height < 500 ? '100%' : '55%';

  return (
    <GradientBackground>
      <View style={styles.homeWrapper}>
        <View style={styles.topHeader}>
          <CustomText style={styles.title}>Market Matrix</CustomText>
          <View style={styles.buttonContainer}>
            <Pressable onPress={logout}>
              <Image
                style={styles.image}
                source={require('../assets/icons/logout.png')}
              />
            </Pressable>
          </View>
        </View>
        <View style={{flexDirection: orientation, gap: 20}}>
          <View>
            {portfolioValue === 0 ? (
              <View style={styles.welcomeContainer}>
                <CustomText style={styles.welcome}>
                  Welcome to MarketMatrix!
                </CustomText>
                <CustomText style={styles.instructions}>
                  Start investing now to grow your portfolio!
                </CustomText>
              </View>
            ) : (
              <View style={styles.header}>
                <View>
                  <CustomText style={styles.text}>Your total value:</CustomText>

                  <View style={styles.valueContainer}>
                    <CustomText style={styles.value}>
                      {currency === 'USD'
                        ? currencyFormat.format(Number(portfolioValue))
                        : currencyFormat.format(Number(portfolioValue * 1.06))}
                    </CustomText>
                  </View>
                  <CustomText
                    style={{
                      fontSize: 20,
                      color: totalDifference > 0 ? Colors.green : Colors.pink,
                    }}>
                    {totalDifference.toFixed(2)} ({percentage}%)
                  </CustomText>
                </View>
                <View style={[styles.dropdown, {right: currencyPosition}]}>
                  <CurrencyDropdown
                    selected={currency}
                    setSelected={setCurrency}
                  />
                </View>
              </View>
            )}

            <View
              style={[
                styles.storiesContaner,
                {justifyContent: storiesAllignment},
              ]}>
              {stories.map((story, index) => (
                <View key={index}>
                  <StoryModal
                    showModal={showModal}
                    closeModal={handleCloseModal}
                    title={storyState.title}
                    logo={storyState.logo}
                    totalDifference={storyState.totalDifference}
                    percentage={storyState.percentage}
                    date={storyState.date}
                    navigateToCompany={handleNavigate}
                    id={storyState.id}
                  />
                  <Pressable onPress={() => handleOpenModal(story)}>
                    <Story
                      logo={story.logo}
                      title={story.company}
                      value={
                        currency === 'USD'
                          ? (story.change as number)
                          : Number((Number(story.change) * 1.06).toFixed(2))
                      }
                      percentage={
                        story.percentage.toFixed(2) as never as number
                      }
                      color={(story.change as number) >= 0 ? 'green' : 'pink'}
                    />
                  </Pressable>
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              width: chartWidth,
              height: chartHeight,
              marginTop: 15,
            }}>
            {portfolioValue === 0 ? (
              <EmptyPortfolio />
            ) : (
              <TotalValueLineChart currency={currency} />
            )}
          </View>
        </View>
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  title: {
    color: Colors.text500,
    fontSize: 20,
    alignSelf: 'center',
  },
  homeWrapper: {
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
    position: 'relative',
  },
  text: {
    color: Colors.text500,
    fontSize: 16,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    color: Colors.text500,
    fontSize: 32,
  },
  value: {
    color: Colors.text500,
    fontSize: 44,
  },
  storiesContaner: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  dropdown: {
    position: 'absolute',
  },
  chart: {
    width: '100%',
    height: '55%',
  },
  topHeader: {
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
  },
  image: {
    width: 20,
    height: 20,
  },
  welcomeContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  welcome: {
    color: Colors.text500,
    fontSize: 20,
    fontWeight: 'bold',
  },
  instructionsContainer: {
    width: 0.8 * deviceWidth,
  },
  instructions: {
    color: Colors.text500,
    fontSize: 14,
    fontWeight: '600',
  },
});
