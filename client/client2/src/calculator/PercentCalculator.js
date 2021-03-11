module.exports.calculate = (price, discount) => {
  return price - (price * discount) / 100;
};

module.exports.inverseCalculate = (price, discount) => {
  return (price * 100) / (100 - discount);
};
