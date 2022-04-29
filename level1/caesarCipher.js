function solution(s, n) {
  return s.split("").map((c) => {
    if (c === " ") return " "
    const isUpletter = c.toUpperCase() === c
    let code = c.charCodeAt() + n
    if ((isUpletter && code > 90) || (!isUpletter && code > 122)) {
      code -= 26
    }
    console.log(String.fromCharCode(code))
    return String.fromCharCode(code)
  }).join("")
}

solution("ab", 1)

/*
charCodeAt() : index에 해당하는 문자의 아스키코드 번호를 반환
fromCharCode() : 아스키코드 번호를 문자열로 반환
32 : 공백
65~90 : 대문자
97~122 : 소문자
26: 알파벳 개수

1. 입력받은 문자 하나씩 쪼개기, map 돌자!
2. 대소문자 확인 로직
3. 공백을 제외한 대소문자 일때 
*/