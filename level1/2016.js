function solution(a, b) {
  console.log(new Date(2016,a-1,b).toString()); //Tue May 24 2016 00:00:00 GMT+0900 (한국 표준시)
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase()
}
solution(5,24)