function solution(s) {
  s = s.split(' ')
  console.log(...s);

  return Math.min(...s) + " " + Math.max(...s)
}

solution("1 2 3 4")