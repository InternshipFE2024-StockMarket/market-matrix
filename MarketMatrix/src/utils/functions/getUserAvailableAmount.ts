import {fetchUserData} from '../http/fetchUserData';

export const getUserAvailableAmount = (userId: string) => {
  const userData = fetchUserData(userId);
  return userData?.availableAmount;
};
