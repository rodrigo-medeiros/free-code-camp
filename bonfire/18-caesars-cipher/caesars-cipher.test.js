var test = require("tape");
var rot13 = require("./caesars-cipher");

test("Caesar's Cipher test", function (t) {
  t.plan(4);

  t.equal(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
  t.equal(rot13("SERR CVMMN!"), "FREE PIZZA!");
  t.equal(rot13("SERR YBIR?"), "FREE LOVE?");
  t.equal(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."), "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
});