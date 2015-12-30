module.exports = function where (arr, num) {
  arr.push(num);
  return arr
    .sort(function (a, b) {
      return a - b;
    })
    .indexOf(num);
};