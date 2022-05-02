function solution(strings, n) {
  return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]))
}

/*
1. n번째 글자들을 비교했을때 같으면 사전대로 분류. 아니면 n번째 문자순대로 분류! =>localCompare()
2. localeCompare() : 참조 문자열이 정렬 순서에서 지정된 문자열의 앞이나 뒤에 오는지 또는 뒤에 오는지 또는 지정된 문자열과 동일한지 여부를 나타내는 숫자
*/