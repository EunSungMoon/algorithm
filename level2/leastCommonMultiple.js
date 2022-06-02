function getGcd(a, b) {
  if (b === 0) return a;
  return getGcd(b, a % b);
}

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}
/*
<1 sycle>
(2 * 6) / getGcd(2,6) -> [getGcd(2,6)] return getGcd(6, 2 % 6)
-> [getGcd(6,2)] return getGcd(2, 6 % 2);
-> [getGcd(2,0)] if(b === 0) return 2;
-> [reduce] return (2 * 6) / 2; // 리턴 값 6을 a에 대입하게 된다.

<2 sycle>
-> (6 * 8) / getGcd(6,8) -> [getGcd(6,8)] return getGcd(8, 6 % 8);
-> [getGcd(8,6)] return getGcd(6, 8 % 6);
-> [getGcd(6,2)] return getGcd(2, 0);
-> [getGcd(2,0)] if(b === 0) return 2;
-> [reduce] return (6 * 8) / 2; // 리턴 값 24를 a에 대입하게 된다.
...

[2,6,8,14] -> [6,8,14] -> [24, 14] -> [168]
(2 * 6) / 2 = 6 -> (6 * 8) / 2 = 24 -> (24 * 14) / 2 = 168
*/