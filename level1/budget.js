function solution(d, budget) {
  d.sort((a, b) => a - b)
  while (d.reduce((a, b) => (a + b), 0) > budget) {
    d.pop()
  }
  return d.length
}
solution([1, 3, 2, 5, 4])

/*
1. 숫자 정렬
2. 하나씩 더해본다
3. budget 보다 크면 pop()을 이용해서 배열에서 삭제
4. 배열의 길이를 리턴
*/