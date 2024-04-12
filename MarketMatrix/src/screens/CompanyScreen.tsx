import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';

export const CompanyScreen = ({navigation}: any) => {
  return (
    <GradientBackground>
      <View>
        <View style={styles.rootContainer}>
          <View style={styles.companyDetaildContainer}>
            <View style={styles.mainDetails}>
              <Image
                style={styles.companyImage}
                source={require('../assets/images/Tesla_logo.png')}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <View>
                  <Text style={styles.companyName}>Tesla Inc.</Text>
                  <Text style={styles.compantIndex}>NASDAQ: TSLA</Text>
                </View>
                <View>
                  <Text style={styles.companyCapital}>$538.30B</Text>
                  <Text style={styles.marketText}>Market capitalization</Text>
                </View>
              </View>
            </View>
            <View style={styles.secondaryDetails}>
              <View style={styles.detailColumn}>
                <Text style={styles.detailsText}>CEO: Elon Musk</Text>
                <Text style={styles.detailsText}>
                  Industry: Automotive and Energy
                </Text>
                <Text style={styles.detailsText}>Sector: Automotive</Text>
              </View>
              <View style={styles.priceColumn}>
                <Text style={styles.companyCapital}>$171.76</Text>
                <Text style={styles.fluctuationText}>-5.12 (2.89%)</Text>
              </View>
            </View>
          </View>
        </View>
        {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      </View>
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
    height: '35%',
    borderBottomColor: 'rgba(177, 188, 222, 0.3)',
    borderBottomWidth: 1,
  },
  mainDetails: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
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
    width: 100,
    height: 100,
    borderRadius: 15,
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
  fluctuationText: {
    color: Colors.pink,
    fontSize: 16,
  },
});
