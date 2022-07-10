function solution(radius) {
  const pi = Math.PI;
  const r = parseInt(radius);

  console.log((pi * r * r).toFixed(6));
  console.log(((2 * r * r).toFixed(6)));
}
solution(21)