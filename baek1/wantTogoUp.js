function solution(up, down, meter) {
  return (Math.ceil((meter - down) / (up - down)))
}