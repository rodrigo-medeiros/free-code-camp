var test = require("tape");
var mutation = require("./mutations");

test("Mutations test", function (t) {
  t.plan(8);

  t.false(mutation(["hello", "hey"]));
  t.true(mutation(["hello", "Hello"]));
  t.true(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
  t.true(mutation(["Mary", "Army"]));
  t.true(mutation(["Mary", "Aarmy"]));
  t.true(mutation(["Alien", "line"]));
  t.true(mutation(["floor", "for"]));
  t.false(mutation(["hello", "neo"]));
});