const QuickFindUF = require("./quick_find");

// test case
const tinyUF = [
  [4, 3, false],
  [3, 8, false],
  [6, 5, false],
  [9, 4, false],
  [2, 1, false],
  [8, 9, true],
  [5, 0, false],
  [7, 2, false],
  [6, 1, false],
  [1, 0, true],
  [6, 7, true],
];

const uf = new QuickFindUF(10);

test("quick find initializa", () => {
  expect(uf.id).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.each(tinyUF)("quick find connectivity of (%i, %i) should be %s", (p, q, expected) => {
  let connected = uf.connected(p, q);
  expect(connected).toBe(expected);
  if (!connected) {
    uf.union(p, q);
  }
});
