function solution(num) {
  let input = num.toString().split(' ').map(Number)
  console.log(input[0] * (input[1] - 1) + 1);
}
solution(['38 24'])