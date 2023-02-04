function solution(numbers){
  const input1 = numbers[0].toString().split(' ').map(el=>Number(el))
  const input2 = numbers[1].toString().split(' ').map(el=>Number(el))

  let ranked=input2.sort((a,b)=>b-a)
  console.log(ranked.slice(0,input1[1]));

}

solution(['5 2', '100 76 85 93 98'])