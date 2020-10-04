class QuickUnionUF {
  id = [];
  constructor(N = 0) {
    this.id = Array(N)
      .fill(0)
      .map((_, index) => index);
  }
  root(i) {
    while (i !== this.id[i]) i = this.id[i];
    return i;
  }
  connected(p, q) {
    return this.root(p) === this.root(q);
  }
  union(p, q) {
    let i = this.root(p);
    let j = this.root(q);
    this.id[i] = j;
  }
}

// test case
const tinyUF = [
  [4, 3],
  [3, 8],
  [6, 5],
  [9, 4],
  [2, 1],
  [8, 9],
  [5, 0],
  [7, 2],
  [6, 1],
  [1, 0],
  [6, 7],
];
// const uf = new QuickFindUF(10);
// const uf = new QuickUnionUF(10);
// let i = 0;
// while (i < tinyUF.length) {
//   let [p, q] = tinyUF[i];
//   if (uf.connected(p, q)) {
//     console.log("already connected: (", p, ",", q, ")");
//   } else {
//     uf.union(p, q);
//     console.log("union: (", p, ",", q, ")");
//   }
//   i++;
// }

module.exports = QuickUnionUF;
