function solution(participant, completion) {
  participant.sort()
  completion.sort()
  return participant.find((el, index) => el !== completion[index])
}

// participants : 마라톤에 참여한 선수들의 명단 배열
// completion : 완주한 선수들의 이름이 담긴 배열
// 완주하지 못한 선수들의 이름 return
