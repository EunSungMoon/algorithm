function solution(arr) {
  let answer = 0;
  arr.map(i => answer += i);

  console.log(answer);
}
solution([1, 2, 3, 4, 5])