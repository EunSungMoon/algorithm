function solution(word){
  const result=[];

  for(let i=97; i<=122; i++){
    result.push(word.indexOf(String.fromCharCode(i)))
  }
  console.log(result.join(' '));
}
solution("baekjoon")