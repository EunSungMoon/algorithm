//삽입정렬
/*
장점 : 메모리가 절약된다
단점 : 자료의 개수가 많아질수록 성능이 떨어짐
stable 정렬 : 중복된 데이터는 위치 교환하지 않음
=> 중복데이터가 있는 경우 기존 중복 데이터의 순서가 정렬이 다 끝난 이후에도 유지되는 정렬
*/
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
// insertSort([2, 10, 5, 3, 6, 8, 4, 1, 7, 9])

//버블정렬
/*
  장점 : 메모리 절약, 구현 쉽다. 
  단점 : 자료가 많아질수록 성능이 떨어짐.
  stable 정렬 : 중복된 데이터는 위치 교환하지 않음
*/
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
// bubbleSort([5, 4, 3, 2, 1])

//선택 정렬
/*
  장점 : 메모리 절약
  단점 : 최선의 경우에도 최악의 경우에도 O(n^2)의 시간이 걸리는 만큼 성능이 떨어짐
  unstable 정렬 : 데이터가 중복된 경우 위치가 바뀔 수 있다

  리스트에서 최소값을 찾는다
  그 값을 맨 앞에 위치한 값과 바꾼다
  맨앞을 제외하고 다시 순회해서 최소값을 찾는다
  그값을 다시 맨앞이랑 바꿈
  반복
*/
function selectionSort(arr) {
  let len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    } 
    if(minIndex!==i){
      temp = arr[minIndex];
      arr[minIndex] = arr[i]
      arr[i] = temp;
      console.log(`${i}회전: ${arr}`);
    }
  }
  console.log(arr);
}
selectionSort([5, 4, 3, 2, 1])