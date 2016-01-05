module.exports = function rot13 (encodedStr) {
  var codeArr = encodedStr.split("");
  var decodedArr = [];

  decodedArr = codeArr.map(function (item) {
    var decoded = item;

    if (item.match(/[A-Z]/gi)) {
      var charCode = item.charCodeAt(0) - 13;
      if (charCode < 65) {
        charCode = 90 - (13 - (item.charCodeAt(0) - 65) - 1);
      }
      decoded = String.fromCharCode(charCode);
    }

    return decoded;
  });

  return decodedArr.join("");
};