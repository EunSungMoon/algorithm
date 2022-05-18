function solution(n) {
  let answer = 0
  let tmp = n.toString(3).split('').reverse().join('');
  return answer = parseInt(tmp, 3)
}

/*
parseInt : 입력받은 숫자를 정수로 변환
ex. parseInt('101',2) => 2진법을 정수로 변환

좋은 풀이
const solution = n => {
  return parseInt([...n.toString(3)].reverse().join(''),3)
}
*/