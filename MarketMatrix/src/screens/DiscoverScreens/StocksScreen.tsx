import {FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/UI/GradientBackground';
import AssetItem from '../../components/DiscoverScreen/AssetItem';
import {Stock} from '../../constants/Interfaces';
import {useStock} from '../../contexts/stocksContext';

const StocksScreen = () => {
  const stockContext = useStock();
  const stocksData = stockContext
    ? stockContext.stocks.filter((asset: Stock) => asset.type === 'stock')
    : [];

  const renderStock = (itemData: ListRenderItemInfo<Stock>) => {
    return <AssetItem stock={itemData.item} />;
  };
  return (
    <GradientBackground>
      <FlatList
        data={stocksData}
        keyExtractor={item => item.id}
        renderItem={renderStock}
      />
    </GradientBackground>
  );
};

export default StocksScreen;
