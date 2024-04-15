export const getDynamicValue = (
  currentPrice: number,
  shares: number,
): number => {
  if (isNaN(currentPrice) || isNaN(shares)) {
    console.error('One or more values are not numeric.');
    return NaN;
  }

  if (shares === 0) {
    console.error('Shares cannot be zero.');
    return NaN;
  }

  return currentPrice * shares;
};
