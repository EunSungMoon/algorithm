function solution(numbers) {

  var answer = numbers.map(c => c + '').
    sort((a, b) => (b + a) - (a + b)).join('');

  return answer[0] === '0' ? '0' : answer;
}
solution([3, 30, 34, 5, 9])

/*
1. 비교하는 문자를 앞뒤로 바꿔서 더 큰수를 만들 수 있는 순서대로 분류 시키는 방법 

ex) 6, 2 ,10에서 62 26를 비교, 210 102 비교, 더 큰 수를 만들 수 있는 순서대로 sorting

*/