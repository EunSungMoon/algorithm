function solution(nums) {
  const input = nums.toString().split(' ')
  const numbers = input.sort((a, b) => a - b)
  const firstNum = Number(numbers[0])
  const lastNum = Number(numbers[numbers.length - 1])
  const result = numbers.length >= 2 ? firstNum * lastNum : firstNum * firstNum
  console.log(result);
}

solution(['4 2'])