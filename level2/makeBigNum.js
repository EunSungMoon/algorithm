function solution(number, k) {
  const arr = [];
  for (let i = 0; i < number.length; i++) {
    while (arr.length > 0 && arr[arr.length - 1] < number[i] && k > 0) {
      k -= 1;
      arr.pop();
    }
    arr.push(number[i]);
  }
  arr.splice(number.length - k, k);
  return arr.join('');
}

solution("1924", 3)

/*
무조건 push 하고 다음 for 문에서 이전인덱스 숫자와 나랑 비교해서 현재인덱스가 이전인덱스보다 크면 pop하고 넣어줌. 제거하는 숫자인 (k)를 1 감소
*/