function solution(n, lost, reserve) {
  var answer = n - lost.length; // 체육복을 가지고 있는 학생 수
  let realLost = lost.filter(l => !reserve.includes(l)) //lost 배열에서 reserve가 있는지 확인해서 빼줌
  let realReserve = reserve.filter(r => !lost.includes(r)) //reserve 배열에서 lost가 있는지 확인해서 빼줌

  answer += lost.length - realLost.length

  realLost.sort((a, b) => a - b)

  realLost.forEach(l => {
    if (realReserve.length === 0) {
      return;
    }
    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter(r => r !== l - 1)
      answer++
    }
    else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter(r => r !== l + 1)
      answer++
    }
  });

  console.log(answer)
  return answer;
}

solution(4, [2,4], [])



/*
n: 전체 학생수
lost : 체육복을 도난당한 학생들의 번호가 담긴 배열
reserve : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
*/