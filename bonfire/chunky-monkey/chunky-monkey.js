module.exports = function chunk (arr, size) {
  if (arr.length <= size) return [arr];
  var output = [arr.splice(0, size)];
  return output.concat(chunk(arr, size));
};