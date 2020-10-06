function gcd(p, q) {
  console.log(p, q);
  if (q === 0) return q;
  return gcd(q, p % q);
}

gcd(216, 192);
