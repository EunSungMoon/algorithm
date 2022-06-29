function solution(arr) {
  let condition = arr.slice(0, 1);
  let participate = arr.slice(1, 2).toString().split(' ')
  let [people, area] = condition.toString().split(' ')
  
  let answer = participate.map(i => i - people * area)
  console.log(answer);
}
solution(['5 20', '99 101 1000 0 97'])