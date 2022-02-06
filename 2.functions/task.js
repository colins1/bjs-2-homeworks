"use strict"
// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        max = arr[i];
        min = arr[i];
      }

      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
      sum = arr[i] + sum;
  }
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg)
  return { min: min, max: max, avg: avg };
}

/*
let [min, max, avg] = (function () {
  let count = 0;
  function showCounter() {
    console.log(count);
  }
  function increaseCounter() {
    count += 1;
  }
  return [min, max, avg];
})()
*/
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
  let max;
  let arr_int = [];
  let sum_test;
  let max_test;
  for (let i = 0; i < arrOfArr.length; i++) {
      arrOfArr[i].forEach((item, ind, array) => arr_int.push(item));
      max_test = func(arr_int);
      if (sum_test == undefined) {
        sum_test = max_test;
      } else {
        if (max_test > sum_test) {
          max = max_test;
        } else {
          max = sum_test
        }
      }
      arr_int = [];
  }

  return max;
}

makeWork(arrOfArr, worker);

// Задание 3
function worker2(arr) {
  let min, max, sum;
  for (let i = 0; i < arr.length; i++) {
      if (i == 0) {
        max = arr[i];
        min = arr[i];
      }

      if (arr[i] > max) {
        max = arr[i];
      }

      if (arr[i] < min) {
        min = arr[i];
      }
      sum = arr[i] + sum;
  }
  sum = max - min;
  sum = Math.abs(sum);
  return sum;
}

makeWork(arrOfArr, worker2);
