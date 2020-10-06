const calculate = require("../dijkstra_two_stack");

test("calculate (1 + (2 + 3) * (4 * 5))", () => {
  expect(calculate("(1 + (2 + 3) * (4 * 5))")).toBe(101);
});

test("calculate (1+(4+5+2)-3)+(6+8)", () => {
  expect(calculate("(1+(4+5+2)-3)+(6+8)")).toBe(23);
});
