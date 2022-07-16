function solution(score) {
  let input = score.toString().split(',').map(el => el.split(' ').map(Number))
  let grade = input.map(el => el.reduce((acc, cur) => acc + cur, 0))
  grade.forEach((el,idx)=>{
    if(el===Math.max(...grade)){
      console.log(`${idx+1} ${el}`);
    }
  })
  // console.log(grade);
}
solution(['5 4 4 5', '5 4 4 4', '5 5 4 4', '5 5 5 4', '4 4 4 5'])