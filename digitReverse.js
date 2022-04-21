function solution(n) {
  console.log((n + '').split('').reverse().map(a => parseInt(a)))
  return (n + '').split('').reverse().map(a => parseInt(a))
}
solution(124)

/*
1. 숫자를 문자로 바꾼다
2. 하나씩 쪼갠다
3. reverse()라는 함수로 순서를 바꾼다.
4. map 함수로 배열을 순회하면서 문자를 숫자로 parseInt라는 함수로 바꿔준다
*/