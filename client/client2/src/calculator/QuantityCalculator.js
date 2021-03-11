module.exports.calculate = (price, discount) => {
  return price - discount;
};

module.exports.inverseCalculate = (price, discount) => {
  return price + discount;
};
