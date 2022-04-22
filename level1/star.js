process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);
  const row = '*'.repeat(a)
  for (let i = 0; i < b; i++) {
    console.log(row)
  }

});

/*
a : 가로 한줄 채우기
b : 세로 줄 채우기
*/