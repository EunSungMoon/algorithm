function solution(price, money, count) {
  const tmp = (count * (count + 1) * price) / 2 - money

  return tmp > 0 ? tmp : 0;
}

/*
1. 가우스 법칙
총 이용료 = (1+2+3...+count)*price
=> ((count+1)*count/2)*price
*/