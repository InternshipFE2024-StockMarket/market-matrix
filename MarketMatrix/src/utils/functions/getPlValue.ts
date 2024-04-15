export const getPlValue = (
  currentPrice: number,
  boughtPrice: number,
  shares: number,
): number => {
  if (isNaN(currentPrice) || isNaN(boughtPrice) || isNaN(shares)) {
    console.error('One or more values are not numeric.');
    return NaN;
  }

  if (shares === 0) {
    console.error('Shares cannot be zero.');
    return NaN;
  }
  console.log({currentPrice}, {boughtPrice}, {shares});

  return (currentPrice - boughtPrice) * shares;
};
