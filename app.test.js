const { checkCashRegister, getDeductValue, getCuratedList} = require("./app.js");

const mockCid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 0],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

/*
Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/

it("should return an object with three properties: status and change", () => {
  const returnedObject = checkCashRegister();
  const hasStatus = returnedObject.hasOwnProperty("status");
  const hasChange = returnedObject.hasOwnProperty("change");
  expect(hasStatus && hasChange).toBe(true);
});

xit("should return {status: 'INSUFFICIENT_FUNDS', change: []} if cash-in-drawer is less than the change due", () => {
  const result = checkCashRegister(10, 15, 3);
  const expected = { status: "INSUFFICIENT_FUNDS", change: [] };
  expect(result).toEqual(expected);
});

xit("should return {status: 'CLOSED', change: [${cashInDrawer}]} if change due is same as cid", () => {
  const result = checkCashRegister(10, 15, 5);
  const expected = { status: "CLOSED", change: [5] };
  expect(result).toEqual(expected);
});

it("should map a coin type to a number value", () => {
  const result = getDeductValue("PENNY");
  const expected = 0.01;
  expect(result).toEqual(expected);
});

it("should filter out empty coin types or coin types that are larger than due change", () => {
  const dueChange = 15;
  const result = getCuratedList(mockCid, dueChange);
  const expected = [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20]
  ]
  expect(result).toEqual(expected);
});
