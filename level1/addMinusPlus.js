function solution(absolutes, signs) {
  return absolutes.reduece((acc, val, i) =>
    acc + (val * (signs[i] ? 1 : -1), 0)
  )
}