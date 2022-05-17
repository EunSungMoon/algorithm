function solution(numbers) {
  const temp = []

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j])
    }
  }
  const answer = [...new Set(temp)]
  console.log(answer);
  return answer.sort((a, b) => a - b)
}

solution([2,1,3,4,1])
/*
Set : 중복값을 허용하지 않음

*/