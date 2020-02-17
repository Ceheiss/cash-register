const getDeductValue = coinType => {
  switch (coinType) {
    case "PENNY":
      return 0.01;
    case "NICKEL":
      return 0.05;
    case "DIME":
      return 0.1;
    case "QUARTER":
      return 0.25;
    case "ONE":
      return 1;
    case "FIVE":
      return 5;
    case "TEN":
      return 10;
    case "TWENTY":
      return 20;
    case "ONE HUNDRED":
      return 100;
    default:
      return 0;
  }
};

const getCuratedList = (cointTypes, dueChange) => cointTypes.filter(
  coinType => getDeductValue(coinType[0]) < dueChange && coinType[1] > 0
);

const checkCashRegister = (price, cash, cid) => {
  let status;
  let change;
  if (cash < price) {
    return "NOT ENOUGH MONEY!"
  }
  const dueChange = Math.abs(price - cash);
  if (cid < dueChange) {
    status = "INSUFFICIENT_FUNDS";
    change = [];
  }
  if (cid === dueChange) {
    status = "CLOSED";
    change = [cid];
  }
  return {
    status,
    change
  };
};

module.exports = { checkCashRegister, getDeductValue, getCuratedList };
