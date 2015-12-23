module.exports = function mutation (arr) {
  var first = arr[0].toLowerCase();
  var second = arr[1].toLowerCase().split("");

  return second
    .every(function (item) {
      return first.indexOf(item) > -1;
    });
};