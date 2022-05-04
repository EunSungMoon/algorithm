function solution(s) {
  console.log(`s/1: ${s/1}`); //s
  console.log(typeof s/1); //NaN

  console.log(`+s: ${+s}`);
  console.log(typeof +s); //number
  return +s
}
solution('123')

/*
사칙연산을 하면 나온데...ㅎ
return s/1 => typeof : NaN이 나오던데
*/