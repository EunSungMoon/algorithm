function solution(brown, red) {
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}

/*
카펫의 최소 높이 :3 => for문의 초기값도 3
가로 + 세로 = (brown/2)+2
red = (가로-2)(세로-2)
이건 규칙이 이해가 잘안되서...
*/