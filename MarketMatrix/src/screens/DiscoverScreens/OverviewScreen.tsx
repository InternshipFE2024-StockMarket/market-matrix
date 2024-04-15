/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
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
        <FlatList
          data={stocks}
          keyExtractor={item => item.id}
          renderItem={renderAsset}
          contentContainerStyle={{gap: 5}}
        />
      </View>
    </GradientBackground>
  );
};

export default OverviewScreen;
