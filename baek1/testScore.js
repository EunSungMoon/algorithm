function solution(input) {
  const [min, man] = input.slice();
  const minSum = min.toString().split(' ').map(Number).reduce((acc, cur) => acc + cur, 0);
  const manSum = man.toString().split(' ').map(Number).reduce((acc, cur) => acc + cur, 0);

  const answer = Math.max(minSum, manSum);
  console.log(minSum === manSum ? minSum : manSum);
}
solution(['100 80 70 60', '80 70 80 90'])