function solution(doneHour, doneMin, cookTime) {
  doneMin += cookTime;

  while (doneMin >= 60) {
    doneMin -= 60;
    doneHour += 1;
  }
  doneHour % 24;
  console.log(doneHour, doneMin);
}
solution(14, 30, 20)