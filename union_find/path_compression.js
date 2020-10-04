class WeightedQuickUnionUF {
  id = [];
  sz = [];
  constructor(N = 0) {
    this.id = Array(N)
      .fill(0)
      .map((_, index) => index);
    this.sz = Array(N).fill(1);
  }
  root(i) {
    while (i !== this.id[i]) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }
  connected(p, q) {
    return this.root(p) === this.root(q);
  }
  union(p, q) {
    let i = this.root(p);
    let j = this.root(q);
    if (i === j) {
      return;
    }
    if (this.sz[i] < this.sz[j]) {
      this.id[i] = j;
      this.sz[j] += this.sz[i];
    } else {
      this.id[j] = i;
      this.sz[i] += this.sz[j];
    }
  }
}

module.exports = WeightedQuickUnionUF;
