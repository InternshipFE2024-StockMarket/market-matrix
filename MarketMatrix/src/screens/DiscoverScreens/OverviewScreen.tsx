import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import GradientBackground from '../../components/UI/GradientBackground';
import {useStock} from '../../contexts/stocksContext';
import {Stock} from '../../constants/Interfaces';
import AssetItem from '../../components/DiscoverScreen/AssetItem';

const OverviewScreen = () => {
  const {stocks} = useStock();
  console.log({stocks});

  const renderAsset = (itemData: ListRenderItemInfo<Stock>) => {
    return <AssetItem stock={itemData.item} />;
  };

  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>OverviewScreen</Text>
        <FlatList
          data={stocks}
          keyExtractor={item => item.id}
          renderItem={renderAsset}
        />
      </View>
    </GradientBackground>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
