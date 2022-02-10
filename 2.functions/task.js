"use strict"
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  max = arr[0];
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
      sum = arr[i] + sum;
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
let arrOfArr = [[1, 2, 3, 4], [10, 20, -10, -20]];
function worker(arr) {
  let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = 0;
  let arrInt = [];
  for (let i = 0; i < arrOfArr.length; i++) {
      if (max < func(arrOfArr[i])) {
        max = func(arrOfArr[i]);
      }
      arrInt = [];
  }
  return max;
}

makeWork(arrOfArr, worker);

// Задание 3
function worker2(arr) {
  let min, max, sum;
  max = arr[0];
  min = arr[0];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
      sum = arr[i] + sum;
  }
  return sum = Math.abs(max - min);
}

makeWork(arrOfArr, worker2);
