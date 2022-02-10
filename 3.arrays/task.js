function compareArrays(arr1, arr2) {
  let result;

  if (arr1.length === arr2.length && arr1.every((numb, i) => numb === arr2[i])) {
      result = true;
  } else {
    result = false;
  }

  return result;
}

function advancedFilter(arr) {
  let resultArr;

   resultArr = arr.filter((positiveNumbers) => positiveNumbers > 0).filter((positiveNumbers) => positiveNumbers % 3 === 0).map((positiveNumbers) => positiveNumbers * 10);

  return resultArr; // array
}
