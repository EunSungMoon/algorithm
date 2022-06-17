function solution(a) {
  let star = '';
  for (let i = 0; i < a; i++) {
    star += '*';
    console.log(star);
  }
}

function solution1(a){
  for (let i = 1; i <=a; i++) {
    console.log(" ".repeat(a-i)+"*".repeat(i))
  }
}
solution1(5)