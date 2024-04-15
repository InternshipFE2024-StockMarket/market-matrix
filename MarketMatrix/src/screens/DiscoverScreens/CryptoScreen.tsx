import {FlatList, ListRenderItemInfo} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/UI/GradientBackground';
import {Stock} from '../../constants/Interfaces';
import {useStock} from '../../contexts/stocksContext';
import AssetItem from '../../components/DiscoverScreen/AssetItem';

const CryptoScreen = () => {
  const stockContext = useStock();
  const crypto = stockContext
    ? stockContext.stocks.filter((asset: Stock) => asset.type === 'crypto')
    : [];

  const renderCrypto = (itemData: ListRenderItemInfo<Stock>) => {
    return <AssetItem stock={itemData.item} />;
  };

  return (
    <GradientBackground>
      <FlatList
        data={crypto}
        keyExtractor={item => item.id}
        renderItem={renderCrypto}
      />
    </GradientBackground>
  );
};

export default CryptoScreen;
