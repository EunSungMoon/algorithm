/*
reduce() : 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고, 하나의 결과값을 반환
parseInt() : 
- 문자열 인자를 파싱해서 특정 진수의 정수를 반환
ex. (n+'')
- 입력받은 숫자를 정수로 변환
ex. parseInt('101',2) => 2진법을 정수로 변환

charCodeAt() : index에 해당하는 문자의 아스키코드 번호를 반환
fromCharCode() : 아스키코드 번호를 문자열로 반환
32 : 공백
65~90 : 대문자
97~122 : 소문자
26: 알파벳 개수

slice() : arr.slice(start, end): start 인덱스부터 end를 제외한 인덱스까지 요소를 복사해 새로운 배열로 반환
splice() : let arr=[a,b,c,]; arr.splice(1,1) => [a,b] 인덱스 1부터 1개의 요소 삭제
replace() : 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
localeCompare() : 참조 문자열이 정렬 순서에서 지정된 문자열의 앞이나 뒤에 오는지 또는 뒤에 오는지 또는 지정된 문자열과 동일한지 여부를 나타내는 숫자
splice() : 배열의 요소 제거, 추가, 교체 가능한 메소드
indexOf : 배열에서 지정된 요소를 찾을 수 있는 첫번째 인덱스를 반환, 존재하지 않으면 return -1
Math.min() : 주어진 숫자들 중 가장 작은 값을 반환 
split(구분자) : 구분자를 중심으로 문자열을 쪼개줌
join(구분자) : split와 반대 역할 함 구분자를 기준으로 문자열을 합쳐줌

map : 요소 대신 새로운 값을 반환
ex. 
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
alert(lengths); // 5,7,6
*/