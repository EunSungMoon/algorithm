function solution(numbers) {
  const input = numbers.toString().split(' ').map(el => Number(el))
  const result1 = input.reduce((acc, cur) => acc + cur, 0) / input.length
  const sortedNumber = input.sort((a, b) => a - b)
  const sortedNumberIndex = Math.floor(sortedNumber.length / 2)
  const result2 = sortedNumber[sortedNumberIndex]

  console.log(result1);
  console.log(result2);
  console.log(input)
}

solution(['10 40 30 60 30'])