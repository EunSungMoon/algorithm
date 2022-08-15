function solution(string) {
  let result = string.toString()
  while (result.length) {
    console.log(result.slice(0, 10));
    result = result.slice(10)
  }
}
solution(['BaekjoonOnlineJudge'])