import {FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/UI/GradientBackground';
import {useStock} from '../../contexts/stocksContext';
import {Stock} from '../../constants/Interfaces';
import AssetItem from '../../components/DiscoverScreen/AssetItem';

const IndicesScreen = () => {
  const stockContext = useStock();
  const indices = stockContext
    ? stockContext.stocks.filter((asset: Stock) => asset.type === 'index')
    : [];

  const renderCrypto = (itemData: ListRenderItemInfo<Stock>) => {
    return <AssetItem stock={itemData.item} />;
  };
  return (
    <GradientBackground>
      <FlatList
        data={indices}
        keyExtractor={item => item.id}
        renderItem={renderCrypto}
      />
    </GradientBackground>
  );
};

export default IndicesScreen;
