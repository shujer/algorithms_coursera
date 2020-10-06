class QuickFindUF {
  constructor(n = 0) {
    this.id = new Array(n)
      .fill(0)
      .map((_, index) => index);
    this.count = n;
  }
  /**
   * Returns the number of sets.
   *
   * @return the number of sets (between {@code 1} and {@code n})
   */
  count() {
    return this.count;
  }
  /**
   * Returns the canonical element of the set containing element {@code p}.
   *
   * @param  p an element
   * @return the canonical element of the set containing {@code p}
   * @throws IllegalArgumentException unless {@code 0 <= p < n}
   */
  find(p) {
    this.validate(p);
    return this.id[p];
  }
  // validate that p is a valid index
  validate(p) {
    let n = this.id.length;
    if (p < 0 || p >= n) {
      throw Error("index " + p + " is not between 0 and " + (n - 1));
    }
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
    this.validate(p);
    this.validate(q);
    return this.id[p] === this.id[q];
  }

  /**
   * Merges the set containing element {@code p} with the
   * the set containing element {@code q}.
   *
   * @param  p one element
   * @param  q the other element
   */
  union(p, q) {
    this.validate(p);
    this.validate(q);
    let pid = this.id[p];
    let qid = this.id[q];
    if (pid === qid) return;
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
    this.count--;
  }
}
module.exports = QuickFindUF;
