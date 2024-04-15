import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import GradientBackground from '../../components/UI/GradientBackground';
import {useStock} from '../../contexts/stocksContext';
import {Stock} from '../../constants/Interfaces';
import AssetItem from '../../components/DiscoverScreen/AssetItem';

const OverviewScreen = () => {
  const stockContext = useStock();
  const stocks = stockContext?.stocks;
  console.log({stocks});

  const renderAsset = (itemData: ListRenderItemInfo<Stock>) => {
    return <AssetItem stock={itemData.item} />;
  };

  return (
    <GradientBackground>
      <FlatList
        data={stocks}
        keyExtractor={item => item.id}
        renderItem={renderAsset}
      />
    </GradientBackground>
  );
};

export default OverviewScreen;
