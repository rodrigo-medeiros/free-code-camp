var test = require("tape");
var bouncer = require("./falsy-bouncer");

test("Falsy Bouncer test", function (t) {
  t.plan(3);

  t.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9]);
  t.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"]);
  t.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), []);
});