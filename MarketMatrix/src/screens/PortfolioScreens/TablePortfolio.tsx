import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useUserInvestmentsDetails} from '../../utils/functions/getUserInvestmentsDetails';
import DynamicTable from '../../components/PortfolioScreen/DynamicTable';
import {useAuth} from '../../contexts/authContext';
import EmptyPortfolio from '../../components/PortfolioScreen/EmptyPortfolio';
import DepositContainer from '../../components/PortfolioScreen/DepositContainer';
import {DepositModal} from '../../components/PortfolioScreen/DepositModal';
import {addMoneyToUser} from '../../utils/http/addMoneyToUser';
import {fetchUserCash} from '../../utils/http/fetchUserCash';

const TablePortfolio = () => {
  const userCtx = useAuth();
  const userId = userCtx.userId;
  const userInvestmentsDetails = useUserInvestmentsDetails(userId);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [amount, setAmount] = useState(0);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleDeposit = (amount: number) => {
    console.log({amount});
    addMoneyToUser(userId, amount);
    fetchCash();
  };

  const fetchCash = async () => {
    const cash = await fetchUserCash(userId);
    setAmount(cash);
    console.log(cash);
  };

  useEffect(() => {
    fetchCash();
  }, []);

  return (
    <View style={styles.rootContainer}>
      {userInvestmentsDetails.length === 0 ? (
        <EmptyPortfolio />
      ) : (
        <DynamicTable data={userInvestmentsDetails} />
      )}
      <DepositModal
        showModal={showModal}
        closeModal={handleClose}
        handleDeposit={handleDeposit}
      />
      <DepositContainer setShowModal={setShowModal} availableAmount={amount} />
    </View>
  );
};

export default TablePortfolio;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
