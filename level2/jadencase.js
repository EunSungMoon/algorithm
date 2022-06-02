function solution(s) {
  return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(' ')
}

/*
charAt() : 문자열에서 특정 인덱스에 위치하는 유니코드 단일문자를 반환.
*/