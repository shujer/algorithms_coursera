const QuickFindUF = require("../quick_find");
const tinyUF = require("./test_case");

const uf = new QuickFindUF(10);

test("quick find initializa", () => {
  expect(uf.id).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.each(tinyUF)(
  "quick find connectivity of (%i, %i) should be %s",
  (p, q, expected) => {
    let connected = uf.connected(p, q);
    expect(connected).toBe(expected);
    if (!connected) {
      uf.union(p, q);
    }
  }
);
