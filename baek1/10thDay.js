function solution(day, week) {
  let answer=week.filter(i=> i===day).length;
  console.log(answer);
}
solution(3, [1,2,3,4,3])