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
    if (i !== j) this.id[i] = j;
  }
}

module.exports = QuickUnionUF;
