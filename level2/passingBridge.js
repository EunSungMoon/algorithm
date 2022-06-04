function solution(bridge_length, weight, truck_weights) {
  // ex.Array.from({length: 5}, (v, i) => i);
  // Array.from({length: num}, callback) 을 통해 원하는 만큼 배열을 초기화 할 수 있다.
  // [0, 1, 2, 3, 4]
  let bridge = Array.from({ length: bridge_length }, () => 0);
  // let bridge = new Array(bridge_length).fill(0);
  let time = 0;

  while (bridge.length) {
    bridge.shift();

    if (truck_weights.length) {
      const sum = bridge.reduce((a, b) => a + b, 0);

      if (sum + truck_weights[0] <= weight) {
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
    time++
  }
  return time;
}

solution(2, 10, [7, 4, 5, 6])

/*
bridge_length : 다리에 올라갈 수 있는 트럭의 최대 대수
weight : 다리에 올라갈 수 있는 최대무게
truck_weights : 트럭의 무게 (배열)
*/