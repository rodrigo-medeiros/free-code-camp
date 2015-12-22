var test = require("tape");
var destroyer = require("./seek-and-destroy");

test("Seed and Destroy test", function (t) {
  t.plan(5);

  t.deepEqual(destroyer([1, 2, 3, 1, 2, 3], 2, 3), [1, 1]);
  t.deepEqual(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3), [1, 5, 1]);
  t.deepEqual(destroyer([3, 5, 1, 2, 2], 2, 3, 5), [1]);
  t.deepEqual(destroyer([2, 3, 2, 3], 2, 3), []);
  t.deepEqual(destroyer(["tree", "hamburger", 53], "tree", 53), ["hamburger"]);
});