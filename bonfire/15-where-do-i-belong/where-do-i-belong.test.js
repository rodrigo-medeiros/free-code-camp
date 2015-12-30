var test = require("tape");
var where = require("./where-do-i-belong");

test("Where Do I Belong test", function (t) {
  t.plan(7);

  t.equal(where([10, 20, 30, 40, 50], 35), 3);
  t.equal(where([10, 20, 30, 40, 50], 30), 2);
  t.equal(where([40, 50], 50), 1);
  t.equal(where([3, 10, 5], 3), 0);
  t.equal(where([5, 3, 20, 3], 5), 2);
  t.equal(where([2, 20, 10], 19), 2);
  t.equal(where([2, 5, 10], 15), 3);
});