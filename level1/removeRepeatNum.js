function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

/*
arr의 인덱스 +1 하면서 인덱스의 값과 비교!
*/