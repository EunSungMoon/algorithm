function solution(x) {
  let num = (x + "").split('').reduce((prev, cur) => prev + parseInt(cur), 0)
  let answer= x % num === 0 ? true: false
  return answer
}
solution(12)

/*
1. 입력된 값을 쪼갠 후 쪼갠 값끼리 더한다
2. 입력된 값 / 1번의 값 => 0: true 1:false
*/