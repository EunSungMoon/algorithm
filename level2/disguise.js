function solution(clothes) {
  return Object.values(clothes.reduce((obj, t) => {
    obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
    return obj;
  }, {})).reduce((a, b) => {
    a * (b + 1);
  }, 1) - 1;
}

solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]])

/*
1. clothes.reduce(function,{}) 최초값을 빈 객체로 생성하여 clothes를 순차적으로 키값(t[1]) 검색
2. undefined는 논리연산에서 false이므로 해당 키의 값이 undefined이면 해당 키값에 1을 넣어줌.
3. 키의 값이 존재한다면 해당 값에 +1을 해줌.
4. 이렇게 생성된 Key와 Value를 Object.values를 통해 값만 불러오도록 함.
4. reduce(function,1) 최초 값을 1로 설정하고 배열을 순차적돌며 이전 값에 (해당 옷종류의 갯수)+1(옷을 입지않은 경우)를 곱함.
5. 모든 옷을 입지 않은 경우 제외 -1 후 return.

다시
*/