/**
 * @description leetcode 224
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let lastOp = "+";
  let num = 0;
  let ops = [];
  let vals = [];
  for (let i = 0; i <= s.length; i++) {
    if (s[i] === " ") continue;
    if (s[i] >= 0 && s[i] <= 9) {
      num = num * 10 + parseInt(s[i]);
      continue;
    }
    if (s[i] === "(") {
      vals.push("(");
      ops.push(lastOp);
      lastOp = "+";
      continue;
    }
    if (lastOp === "+") {
      vals.push(num);
    } else if (lastOp === "-") {
      vals.push(-num);
    } else if (lastOp === "*") {
      vals.push(vals.pop() * num);
    } else if (lastOp === "/") {
      let val = vals.pop();
      let md = val % num;
      vals.push((val - md) / num);// ~~(val / num)
    }
    if (s[i] === ")") {
      let op = vals.pop();
      let sum = 0;
      while (op !== "(") {
        sum += op;
        op = vals.pop();
      }
      num = sum;
      lastOp = ops.pop();
    } else {
      lastOp = s[i];
      num = 0;
    }
  }
  return vals.reduce((sum, n) => sum + n, 0);
};

module.exports = calculate;
