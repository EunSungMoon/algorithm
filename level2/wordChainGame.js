function solution(n, words) {
  var answer = [0, 0];    // 기본값 설정

  words.some((item, index, array) => {
    // 현재 단어가 이전에 등장했던 단어인 경우
    if (array.slice(0, index).includes(item) || index > 0 && array[index - 1].slice(-1) !== array[index].slice(0, 1)) {
      answer = [index % n + 1, Math.floor(index / n) + 1];
      return true;

      // 앞단어의 끝자리와 현재 단어의 첫자리가 다른 경우  
    }
  });

  return answer;
}