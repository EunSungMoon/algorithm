//삽입정렬
function insertSort(arr) {
  let len = arr.length;
  let temp, inner;

  //두번째 요소부터 선택해서 앞 요소와 비교해야되니까 1부터 시작
  for (let outer = 1; outer < len; outer++) {
    temp = arr[outer];
    inner = outer

    /*
    arr의 index가 0보다 크고, arr의 이전 값이 현재보다 클때 데이터를 교환!
    ex. arr[0]: 2, arr[1]: 10 => 비교
    arr[1]: 10, arr[2]: 5 => 비교
    arr[inner - 1] >= temp

    arr[inner-1]: arr[0] : 2
    temp : arr[1] : 10 변화 없음

    arr[inner-1]: arr[1] : 10
    temp : arr[2] : 5 => arr=[2,5,10...]
    ...
    inner가 1이 될때까지

    */
    while (inner > 0 && arr[inner - 1] >= temp) {
      arr[inner] = arr[inner - 1]
      inner--;
    }
    arr[inner] = temp
  }
  console.log(arr);
}
insertSort([2, 10, 5, 3, 6, 8, 4, 1, 7, 9])

//버블정렬
function bubbleSort(array) {
  //배열의 길이만큼 for문을 돌리고
  for (let i = 0; i < array.length; i++) {
    let swap;
    // 가장 큰 수를 배열의 마지막까지 swap을 시킨 후 
    // 마지막 요소는 없애기 위해 배열의 길이를 -1해줌
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    console.log(`${i}회전: ${array}`);
    if (!swap) {
      break;
    }
  }
  console.log(array);
}
bubbleSort([5, 4, 3, 2, 1])