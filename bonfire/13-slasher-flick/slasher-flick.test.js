var test = require("tape");
var slasher = require("./slasher-flick");

test("Slasher Flick test", function (t) {
  t.plan(4);

  t.deepEqual(slasher([1, 2, 3], 2), [3]);
  t.deepEqual(slasher([1, 2, 3], 0), [1, 2, 3]);
  t.deepEqual(slasher([1, 2, 3], 9), []);
  t.deepEqual(slasher([1, 2, 3], 4), []);
});