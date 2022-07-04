function solution(num) {
  let input = num.toString().split(' ').map(Number)
  let odd = input.filter(i => i % 2 === 1);
  if (odd.length === 0) {
    console.log(-1);
  } else {
    let sum = odd.reduce((acc, cur) => acc + cur, 0)
    console.log(sum);
    console.log(Math.min(...odd));
  }
}
solution(['12 77 38 41 53 92 85'])