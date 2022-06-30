function solution(input) {
  let [cost, num, money] = input.toString().trim().split(' ');
  let answer = cost * num - money
  console.log(answer);
}

solution(['20 6 120'])