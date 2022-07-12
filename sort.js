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
    if (minIndex !== i) {
      temp = arr[minIndex];
      arr[minIndex] = arr[i]
      arr[i] = temp;
      console.log(`${i}회전: ${arr}`);
    }
  }
  console.log(arr);
}
// selectionSort([5, 4, 3, 2, 1])

//병합 정렬
/*
데이터들을 쪼갠 후 하나로 합치는 과정에서 정렬
장점 : 최악의 경우에도 O(nlog₂n)의 시간이 소요, 데이터 분포에 영향을 덜 받는다. 좋은 성능
단점 : 별도의 메모리 공간이 필요
stable 정렬 : 중복 시 데이터 순서 안바뀜
*/
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  // console.log(`left ${left}`);
  // console.log(`right ${right}`);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]); leftIndex++;
      } else {
        resultArray.push(right[rightIndex]); rightIndex++;
      }
    }
    return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
}

console.log(mergeSort([5, 4, 3, 2, 1]));

//퀵 정렬
/*
기준 원소를 고른다. 배열의 첫번째 원소
배열을 기준 원소보다 작은 원소의 배열과 큰 원소배열 => 2개의 하위배열로 분할
하위배열에 대해 재귀적으로 퀵 정렬을 호출한다

*/
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }
  const pivot = [array[0]];
  const left = []; const right = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      pivot.push(array[i]);
    }
  }
  console.log(`left: ${left}, pivot: ${pivot}, right: ${right}`);
  return quickSort(left).concat(pivot, quickSort(right));
}
const sorted = quickSort([5, 3, 7, 1, 9]);
console.log(sorted);