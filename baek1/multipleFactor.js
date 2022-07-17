function solution(num) {
  const input =num.toString().split(',').map(v=>v.split(' ').map(Number))
  input.forEach(v=>{
    if(v[1]%v[0]==0){
      console.log('factor');
    } else if(v[0]%v[1]==0){
      console.log('multiple');
    } else{
      console.log('neither');
    }
  })
  console.log(input);
}
solution(['8 16', '32 4', '17 5'])