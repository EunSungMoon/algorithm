function solution(nums) {
  let input = nums.toString().split(' ').map(Number);
  let input1 = input.slice(0, 1)
  let input2 = input.slice(1)

  let number = parseInt(input1 / 100) * 100;
  let answer = 0

  while (true) {
    if (number % input2 == 0) {
      answer = number;
      break;
    } else {
      number += 1;
    }
  }
  console.log(("" + answer).slice(-2));
}
solution(['1000 3'])