function solution(n) {
  let double = n.map(v => v * v)
  let addNum = double.reduce((pre, cur) => pre + cur, 0)
  let result = addNum%10
  console.log(result);
}
solution([0, 4, 2, 5, 6])