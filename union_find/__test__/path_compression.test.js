const QuickUnionUF = require("../path_compression");
const tinyUF = require("./test_case");

const uf = new QuickUnionUF(10);

test("weighted union with path compression initializa", () => {
  expect(uf.id).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.each(tinyUF)(
  "quick union connectivity of (%i, %i) should be %s",
  (p, q, expected) => {
    let connected = uf.connected(p, q);
    expect(connected).toBe(expected);
    if (!connected) {
      uf.union(p, q);
    }
  }
);
