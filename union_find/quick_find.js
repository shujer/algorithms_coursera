class QuickFindUF {
  id = [];
  constructor(N = 0) {
    this.id = Array(N)
      .fill(0)
      .map((_, index) => index);
  }
  connected(p, q) {
    return this.id[p] === this.id[q];
  }
  union(p, q) {
    let pid = this.id[p];
    let qid = this.id[q];
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pid) {
        this.id[i] = qid;
      }
    }
  }
}
module.exports = QuickFindUF;
