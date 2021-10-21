const ftoc = function (fah) {
  const cel = (fah - 32) * (5 / 9);
  return Math.round(cel * 10) / 10;
};

const ctof = function (cel) {
  const fah = (cel * 9) / 5 + 32;
  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
