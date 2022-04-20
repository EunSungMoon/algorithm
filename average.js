function solution(arr) {
  var answer = 0;
  answer = arr.reduce((pre, cur) => pre + cur)
  console.log(answer)
  return answer / arr.length;
}

console.log(`결과 : ${solution([1, 2, 3, 4])}`)
/*
평균 구하는 공식
내가 생각하는 풀이 방식 : sum(arr)/arr.length

reduece() : 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환
1. 함수 최초 호출 시 배열의 첫번째 요소가 할당 => 결과 : 1
2. 두번째 호출 시 pre=1, 배열의 두번째 요소가 더해짐 => 결과 : 3
.... 배열의 마지막 요소까지 더해진 후 완료

평균 값은 배열의 길이만큼!
*/

