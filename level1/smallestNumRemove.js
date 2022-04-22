function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)),1);
  if(arr.length<1)return[-1];
  return arr;
}

/*
splice() : 배열의 요소 제거, 추가, 교체 가능한 메소드
indexOf : 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환, 존재하지 않으면 return -1
Math.min() : 주어진 숫자들 중 가장 작은 값을 반환 

*/ 