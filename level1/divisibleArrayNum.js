function solution(arr, divisor) {
  let answer = [];
  arr.map(v => v % divisor === 0 && answer.push(v))
  return answer.length > 0 ? answer.sort((a, b) => a - b) : [-1]
}

/*
1. map을 돌면서 divisor랑 나눈 후 나머지가 0인 값들만 새로운 배열에 담아 리턴
2. 나누어 떨어지는 값이 없는 경우 -1 리턴
*/