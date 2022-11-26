function solution(month, day) {
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

  let totalDate = 0;
  totalDate += day

  for (let i = 0; i < month - 1; i++) {
    totalDate += daysInMonth[i]
  }

  switch (totalDate % 7) {
    case 0:
      console.log('SUN')
      break;
    case 1:
      console.log('MON')
      break;
    case 2:
      console.log('TUE')
      break;
    case 3:
      console.log('WED')
      break;
    case 4:
      console.log('THU')
      break;
    case 5:
      console.log('FRI')
      break;
    case 6:
      console.log('SAT')
      break;
  }
  console.log(totalDate % 7)
}
solution(3, 14)