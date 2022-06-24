function solution(num) {
  const origin = [1, 1, 2, 2, 2, 8];

  let answer = [];

  let result = origin.map((el, idx) => el - num[idx]);

  console.log(result.join(' '))
}

solution([0, 1, 2, 2, 2, 7])