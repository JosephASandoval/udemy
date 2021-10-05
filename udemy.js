// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[lowest]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }
//   return arr;
// }

// let arr = [2, 5, 1, 25, 7];
// console.log(selectionSort(arr)); // [ 1, 2, 5, 7, 25 ]

// function bubbleSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   let sorted = false;

//   while (!sorted) {
//     sorted = true;

//     for (let i = 0; i < arr.length - 1; i++) {
//       let curr = arr[i];
//       let next = arr[i + 1];
//       if (curr > next) {
//         swap(arr, i, i + 1);
//         sorted = false;
//       }
//     }
//   }
//   return arr
// }

// let arr = [2, 5, 1, 25, 7];
// console.log(bubbleSort(arr)); // [ 1, 2, 5, 7, 25 ]

// function naiveSearch(long, short) {
//   let count = 0;

//   for (let i = 0; i < long.length; i++) {
//     for (let j = 0; j < short.length; j++) {
//       if (short[j] !== long[i + j]) break;
//       if (j === short.length - 1) count++;
//     }
//   }
//   return count;
// }

// console.log(naiveSearch("hahalolhaha", "haha")); // 2

// function sameFrequency(num1, num2) {
//   // good luck. Add any arguments you deem necessary.
//   // inputs: 2 numbers
//   // outputs: 1 boolean
//   // approach: frequency counter

//   let counter = {};
//   let lastDigit = 0;

//   while (num1 > 0) {
//     lastDigit = num1 % 10;
//     counter[lastDigit] = (counter[lastDigit] || 0) + 1;
//     num1 = Math.floor(num1 / 10);
//   }

//   while (num2 > 0) {
//     lastDigit = num2 % 10;
//     counter[lastDigit] = (counter[lastDigit] || 0) - 1;
//     num2 = Math.floor(num2 / 10);
//   }

//   return Object.values(counter).every((value) => value === 0);
// }

// function areThereDuplicates(...args) {
//   // good luck. (supply any arguments you deem necessary.)
//   // inputs: variable number of elements either a string or a number
//   // outputs: boolean
//   // approach: frequency counter

//   let counter = {};

//   for (let el of args) {
//     counter[el] = (counter[el] || 0) + 1;
//   }

//   return Object.values(counter).some((value) => value !== 1);
// }

// function areThereDuplicates(...args) {
//   // good luck. (supply any arguments you deem necessary.)
//   // inputs: variable number of elements either a string or a number
//   // outputs: boolean
//   // approach: multiple pointers

//   args.sort();

//   for (let i = 0; i < args.length - 1; i++) {
//     if (args[i] === args[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// function averagePair(arr, targetAvg) {
//   // add whatever parameters you deem necessary - good luck!
//   // inputs: sorted array and a target average
//   // outputs: boolean
//   // approach: multiple pointers

//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let currAvg = (arr[left] + arr[right]) / 2;
//     if (currAvg === targetAvg) {
//       return true;
//     } else if (currAvg < targetAvg) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return false;
// }

// function isSubsequence(short, long) {
//   // good luck. Add any arguments you deem necessary.
//   // inputs: 2 strings
//   // outputs: 1 bool
//   // approach: multiple pointers

//   let shortIdx = 0;
//   let longIdx = 0;

//   while (shortIdx < short.length && longIdx < long.length) {
//     if (short[shortIdx] === long[longIdx]) {
//       shortIdx++;
//       longIdx++;
//     } else {
//       longIdx++;
//     }
//   }
//   return shortIdx === short.length;
// }

// function maxSubarraySum(arr, n) {
//   // add whatever parameters you deem necessary - good luck!
//   // inputs: array of integers and a number representing the length of contiguous numbers in the array
//   // outputs: 1 number rep the maxSubArraySum
//   // approach: sliding window

//   if (arr.length < n) return null;

//   let curr = 0;
//   for (let i = 0; i < n; i++) {
//     curr += arr[i];
//   }

//   let max = curr;
//   for (let i = n; i < arr.length; i++) {
//     curr += arr[i] - arr[i - n];
//     max = Math.max(max, curr);
//   }

//   return max;
// }

// function minSubArrayLen(arr, num) {
//   // inputs: 1 array, 1 number
//   // outputs: 1 number representing the max length of contiguous elements
//   // approach: sliding window

//   let lengthTracker = 1;

//   while (lengthTracker <= arr.length) {
//     let currSum = 0;
//     for (let i = 0; i < lengthTracker; i++) {
//       currSum += arr[i];
//     }

//     if (currSum >= num) return lengthTracker;

//     for (let i = lengthTracker; i < arr.length; i++) {
//       currSum += arr[i] - arr[i - lengthTracker];
//       if (currSum >= num) return lengthTracker;
//     }

//     lengthTracker++;
//   }

//   return 0;
// }

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currVal = arr[i];
//     let index = i;
//     for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
//       arr[j + 1] = arr[j];
//       index = j;
//     }
//     arr[index] = currVal;
//   }
//   return arr;
// }

// let arr = [2, 5, 1, 46, 23];
// console.log(insertionSort(arr)); // [1, 2, 5, 23, 46]

function mergeSort(arr) {
  if (arr.length === 1) return arr;

  const midIdx = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIdx);
  const right = arr.slice(midIdx);

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(sortedLeft, sortedRight) {
  const mergedArr = [];

  while (sortedLeft.length > 0 && sortedRight.length > 0) {
    if (sortedLeft[0] < sortedRight[0]) {
      mergedArr.push(sortedLeft.shift())
    } else if (sortedRight[0] < sortedLeft[0]) {
      mergedArr.push(sortedRight.shift())
    } else {
      mergedArr.push(sortedRight.shift());
    }
  }

  return mergedArr.concat(sortedLeft, sortedRight);
}

console.log(mergeSort([1, 5, 24, 76, 1, 3]))

