module.exports = function bouncer (arr) {
  return arr.filter(function (item) {
    return !!item;
  });
};