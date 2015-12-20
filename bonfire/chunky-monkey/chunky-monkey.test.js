var test = require("tape");
var chunk = require("./chunky-monkey");

test("Chunk Monkey test", function (t) {
  t.plan(4);
  t.deepEqual(chunk(["a", "b", "c", "d", "e"], 2), [["a", "b"], ["c", "d"], ["e"]]);
  t.deepEqual(chunk([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]]);
  t.deepEqual(chunk([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]]);
  t.deepEqual(chunk([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]]);
});