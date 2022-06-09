function solution(n, left, right) {
  var answer = [];

  for (let i = left; i <= right; i++) {
    answer.push(Math.max(i % n, parseInt(i / n)) + 1)
  }

  return answer;
}



const solution = (n, left, right) => {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const share = parseInt(i / n);	// 행축(y)
    const reminder = i % n;	// 열축(x)
    answer.push(Math.max(share, reminder) + 1)
  }
  return answer;
}