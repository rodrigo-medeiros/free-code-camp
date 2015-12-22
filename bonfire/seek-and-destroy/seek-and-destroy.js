module.exports = function destroyer (arr) {
  var args = [].slice.call(arguments).reduce(function (acc, curr) {
    if (!acc[curr]) acc[curr] = true;
    return acc;
  }, {});

  return arr.filter(function (item) {
    return !args[item];
  });
};