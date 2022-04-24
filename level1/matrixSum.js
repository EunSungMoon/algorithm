function solution(arr1, arr2) {
  return arr1.map((a, b) => arr2[b].map((x, y) => arr1[b][y] + arr2[b][y]))
}

/*
map(value, index, array) : 인자가 3개인 경우
=>  value : 현재요소 
index : 요소의 인덱스
array : map()을 호출한 원본 배열
*/