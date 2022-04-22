function solution(s) {
  let arr = s.split(' ');
  let answer = arr.map(a => {
    let word = a.split('');
    return word.map((w, j) => {
      if (j % 2) {
        return w.toLowerCase();
      } else {
        return w.toUpperCase();
      }
    }).join('');
  }).join(' ');
  console.log(answer)
  return answer;
}

solution('try hello world')

/*
뛰어쓰기 포함 하나씩 짤라서 짝홀수일때 조건 걸기
split(구분자) : 구분자를 중심으로 문자열을 쪼개줌
join(구분자) : split와 반대 역할 함 구분자를 기준으로 문자열을 합쳐줌

ex.
```
const str='The quick brown fox jumps over the lazy dog.'
const word =str.split(' ');
console.log(word)=> ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']
```
띄어쓰기 부분이 단어별로 문장을 쪼갰을때 인덱스 번호가 '0'
1. 띄어쓰기를 기준으로 문자열 쪼개기 
2. map=>문자열을 하나씩 한번 더 쪼개기
3. 짝홀수 대로 대소문자 만들어주기
4. join으로 문자열 합치고
5. 합쳐진 문자열을 한 덩어리로 띄어쓰기 포함해서 합쳐주기


*/ 