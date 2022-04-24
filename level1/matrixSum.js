function solution(arr1, arr2) {
  return arr1.map((a, b) => arr2[b].map((x, y) => arr1[b][y] + arr2[b][y]))
}

/*
map(value, index, array) : 인자가 3개인 경우
=>  value : 현재요소 
index : 요소의 인덱스
array : map()을 호출한 원본 배열

arr1, arr2의 인덱스를 순회하면서 각각의 요소들의 합을 구함

arr1	        arr2	         return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	    [[3],[4]]	     [[4],[6]]

*/