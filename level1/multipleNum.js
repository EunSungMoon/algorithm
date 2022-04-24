function solution(x, n) {
  return Array(n).fill(x).map((curVal, index) => (index + 1) * curVal)
}

solution(2,5)

/*
1. 입력한 값을 받아 Array 길이로 지정
2. map 으로 인덱스값과 입력값을 1씩 증가시키면서 계산
3. 만든 배열에 값을 계산해서 넣기 => fill() 
*/