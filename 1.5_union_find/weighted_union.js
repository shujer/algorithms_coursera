class WeightedQuickUnionUF {
  constructor(n = 0) {
    this.parent = new Array(n).fill(0).map((_, index) => index);
    this.size = new Array(n).fill(1);
  }

  /**
   * Returns the number of sets.
   *
   * @return the number of sets (between {@code 1} and {@code n})
   */
  count() {
    return this.count;
  }

  // validate that p is a valid index
  validate(p) {
    let n = this.parent.length;
    if (p < 0 || p >= n) {
      throw Error("index " + p + " is not between 0 and " + (n - 1));
    }
  }

  /**
   * Returns the canonical element of the set containing element {@code p}.
   *
   * @param  p an element
   * @return the canonical element of the set containing {@code p}
   */
  find(p) {
    this.validate(p);
    while (p != this.parent[p]) p = this.parent[p];
    return p;
  }
  /**
   * Returns true if the two elements are in the same set.
   *
   * @param  p one element
   * @param  q the other element
   * @return {@code true} if {@code p} and {@code q} are in the same set;
   *         {@code false} otherwise
   */
  connected(p, q) {
    return this.find(p) === this.find(q);
  }
  /**
   * Merges the set containing element {@code p} with the
   * the set containing element {@code q}.
   *
   * @param  p one element
   * @param  q the other element
   */
  union(p, q) {
    let rootP = this.find(p);
    let rootQ = this.find(q);
    if (rootP === rootQ) return;
    if (this.size[rootP] < this.size[rootQ]) {
      this.parent[rootP] = rootQ;
      this.size[rootQ] += this.size[rootP];
    } else {
      this.parent[rootQ] = rootP;
      this.size[rootP] += this.size[rootQ];
    }
    this.count--;
  }
}

module.exports = WeightedQuickUnionUF;
