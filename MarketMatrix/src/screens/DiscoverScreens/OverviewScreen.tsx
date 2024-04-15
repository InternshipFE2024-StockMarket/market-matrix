import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';
import GradientBackground from '../../components/UI/GradientBackground';
import {useStock} from '../../contexts/stocksContext';
import {Stock} from '../../constants/Interfaces';
import AssetItem from '../../components/DiscoverScreen/AssetItem';
import {useSearchContext} from '../../contexts/searchContext';

const OverviewScreen = () => {
  const stockContext = useStock();
  let assets = stockContext?.stocks;

  const {inputValue} = useSearchContext();
  const searchTerm = inputValue.trim().toLowerCase();

  if (inputValue) {
    assets = assets?.filter(
      asset =>
        asset.ticker === searchTerm || asset.companyName.includes(searchTerm),
    );
  }

  const renderAsset = (itemData: ListRenderItemInfo<Stock>) => {
    return <AssetItem stock={itemData.item} />;
  };

  return (
    <GradientBackground>
      <FlatList
        data={assets}
        keyExtractor={item => item.id}
        renderItem={renderAsset}
      />
    </GradientBackground>
  );
};

export default OverviewScreen;
