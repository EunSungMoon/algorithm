function solution(minute, hour) {
  minute -= 45;

  if (minute < 0) {
    minute += 60;
    hour--;
    if (hour === -1) {
      hour = 23;
    }
  }
  console.log(hour + ' ' + minute);
}
solution(10,10)