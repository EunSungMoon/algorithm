function solution(n, m) {
  var answer = [];
  let greatest = (a, b) => {
    if (b === 0) return a;
    return greatest(b, a % b);
  }
  const least = (a, b) =>
    (a * b) / greatest(a, b)
  return [greatest(n, m), least(n, m)];
}
solution(3, 12)
console.log(solution(2,5))