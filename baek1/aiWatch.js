function solution(now, cookTime) {
  let nowSeconds = now[0] * 3600 + now[1] * 60 + now[2] + cookTime;
  const finalSeconds = nowSeconds % (24 * 60 * 60); // 하루 지나는거 체크!
  console.log(nowSeconds);
  console.log(finalSeconds);

  const hour = Math.floor(finalSeconds / 3600)
  const minute = Math.floor((finalSeconds - hour * 3600) / 60);
  const second = Math.floor(finalSeconds - hour * 3600 - minute * 60);

  console.log(`${hour} ${minute} ${second}`);
}
solution([23, 48, 59], 2515)