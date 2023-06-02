// Write a `String.prototype.symmetricSubstrings` method that returns an array
// of substrings which are palindromes in alphabetical order. Only include
// substrings of length > 1.
// e.g. "cool".symmetricSubstrings() => ["oo"]

String.prototype.symmetricSubstrings = function () {
  let arr = [];

  for (i = 0; i < this.length; i++) {
    for (j = i; j < this.length; j++) {
      arr.push(this.slice(i, j + 1));
    }
  }

  let newArr = [];

  arr.forEach((word) => {
    let reversedWord = word.split("").reverse().join("");
    if (reversedWord === word && word.length > 1) {
      newArr.push(word);
    }
  });

  return newArr.sort();
};

// Write a function, `anagrams(str1, str2)`, that takes in two words and returns
// a boolean indicating whether or not the words are anagrams. Anagrams are
// words that contain the same characters but not necessarily in the same order.
// Solve this without using Array.prototype.sort.
//
// Examples:
// anagrams('listen', 'silent') => true
// anagrams('listen', 'potato') => false

function anagrams(str1, str2) {
  let hash = {};
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  arr1.forEach((char) => {
    hash[char] ||= 0;
    hash[char] += 1;
  });

  arr2.forEach((char) => {
    hash[char] ||= 0;
    hash[char] -= 1;
  });

  return Object.values(hash).every((el) => el === 0);
}

// Write a function `titleize(str)` that capitalizes each word in a string like
// a book title.
// Do not capitalize the following words (unless they are the first word in the
// string): ["a", "and", "of", "over", "the"]

function titleize(str) {
  let smallWords = ["a", "and", "of", "over", "the"];

  let capWord = "";

  let arr = str.split(" ");

  let newArr = [];

  arr.forEach((word) => {
    if (smallWords.includes(word)) {
      newArr.push(word.toLowerCase());
    } else {
      capWord = word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
      newArr.push(capWord);
    }
  });

  newArr[0] = newArr[0].slice(0, 1).toUpperCase() + newArr[0].slice(1);

  return newArr.join(" ");
}

// Write a `String.prototype.realWordsInString(dictionary)` method, that returns
// an array containing the substrings of `string` that appear in `dictionary`.
// sorted alphabetically. This method does NOT return any duplicates.

String.prototype.realWordsInString = function (dictionary) {
  let subStrings = [];

  for (i = 0; i < this.length; i++) {
    for (j = i; j < this.length; j++) {
      subStrings.push(this.slice(i, j + 1));
    }
  }

  finalArr = [];

  dictionary.forEach((word) => {
    if (subStrings.includes(word)) {
      finalArr.push(word);
    }
  });

  return finalArr.sort();
};

// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array.
// It should take an optional callback that compares two elements, returning -1
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the
// remaining elements on to the appropriate side of the pivot. Recursively quick
// sort each side of the array until a base case is reached.

Array.prototype.quickSort = function (cb) {
  cb ||= function (x, y) {
    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
  };

  if (this.length < 2) return this;

  let pivot = this[0];
  let left = this.slice(1).filter((el) => cb(el, pivot) === -1);
  let right = this.slice(1).filter((el) => cb(el, pivot) !== -1);

  let leftSorted = left.quickSort(cb);
  let rightSorted = right.quickSort(cb);

  return [...leftSorted, pivot, ...rightSorted];
};

// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in `Array.prototype.sort` method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.

Array.prototype.bubbleSort = function (cb) {
  cb ||= function (x, y) {
    if (x > y) return 1;
    else if (x < y) return -1;
    else return 0;
  };

  let arr = this.slice(0);

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (i = 0; i < arr.length - 1; i++) {
      let current = arr[i];
      let next = arr[i + 1];
      if (cb(current, next) === 1) {
        arr[i] = next;
        arr[i + 1] = current;
        sorted = false;
      }
    }
  }
  return arr;
};

// Write a function `jumbleSort(string, alphabet)`.
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// The English alphabet, in order, is 'abcdefghijklmnopqrstuvwxyz'
//
// **Do NOT use the built-in `Array.prototype.sort` in your implementation.**
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e']) => 'ollhe'

function jumbleSort(str, alphabet) {
  alphabet ||= "abcdefghijklmnopqrstuvwxyz";

  let arr = str.split("");

  let sorted = false;

  while (!sorted) {
    sorted = true;

    for (let i = 0; i < arr.length - 1; i++) {
      if (alphabet.indexOf(arr[i]) > alphabet.indexOf(arr[i + 1])) {
        let current = arr[i];
        let next = arr[i + 1];
        arr[i] = next;
        arr[i + 1] = current;
        sorted = false;
      }
    }
  }

  return arr.join("");
}

// Write an `Array.prototype.mergeSort` method that merge sorts an array. It
// should take an optional callback that compares two elements, returning -1 if
// the first element should appear before the second, 0 if they are equal, and 1
// if the first element should appear after the second. Define and use a helper
// method, `merge(left, right, comparator)`, to merge the halves.
//
// **IMPORTANT: Make sure to use a function declaration (`function merge`) as
// opposed to a function expression (`const merge = function`) for `merge`. Do
// NOT use the built-in `Array.prototype.sort` method in your implementation.**
//
// Here's a summary of the merge sort algorithm:
//
// Split the array into left and right halves, then merge sort them recursively
// until a base case is reached. Use a helper method, merge, to combine the
// halves in sorted order, and return the merged array.

Array.prototype.mergeSort = function (cb) {
  cb ||= function (x, y) {
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
  };

  if (this.length < 2) return this;

  let midIdx = Math.floor(this.length / 2);

  let left = this.slice(0, midIdx);
  let right = this.slice(midIdx);

  let leftSorted = left.mergeSort(cb);
  let rightSorted = right.mergeSort(cb);

  return merge(leftSorted, rightSorted, cb);
};

function merge(left, right, cb) {
  let mergedArr = [];

  while (left.length !== 0 && right.length !== 0) {
    switch (cb(left[0], right[0])) {
      case -1:
        mergedArr.push(left.shift());
        break;
      case 1:
        mergedArr.push(right.shift());
        break;
      case 0:
        mergedArr.push(right.shift());
        break;
    }
  }

  return mergedArr.concat(left, right);
}

// Write a recursive function, `binarySearch(sortedArray, target)`, that returns
// the index of `target` in `sortedArray`, or -1 if it is not found. Do NOT use
// the built-in `Array.prototype.indexOf` or `Array.prototype.includes` methods
// in your implementation.
//
// Here's a quick summary of the binary search algorithm:
//
// Start by looking at the middle item of the array. If it matches the target,
// return its index. Otherwise, recursively search either the left or the right
// half of the array until the target is found or the base case (empty array) is
// reached.

function binarySearch(arr, target) {
  if (arr.length === 0) return -1;

  let probeIdx = Math.floor(arr.length / 2);
  let left = arr.slice(0, probeIdx);
  let right = arr.slice(probeIdx + 1);

  switch (helper(target, arr[probeIdx])) {
    case -1:
      return binarySearch(left, target);
    case 0:
      return probeIdx;
    case 1:
      let subAnswer = binarySearch(right, target);
      if (subAnswer === -1) {
        return -1;
      } else {
        return probeIdx + 1 + subAnswer;
      }
  }
}

function helper(x, y) {
  if (x < y) return -1;
  else if (x > y) return 1;
  else return 0;
}

// Write a function, `deepDup(arr)`, that will perform a "deep" duplication of
// the array and any interior arrays. A deep duplication means that the array
// itself, as well as any nested arrays (no matter how deeply nested) are duped
// and are completely different objects in memory than those in the original
// array.

function deepDup(arr) {
  let newArr = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      newArr.push(deepDup(el));
    } else {
      newArr.push(el);
    }
  });

  return newArr;
}

// Write a function, `exponent(b, n)`, that calculates b^n recursively.
// Your solution should accept negative values for n. Do NOT use ** or Math.pow

function exponent(b, n) {
  if (n === 0) return 1;

  if (n > 0) {
    return exponent(b, n - 1) * b;
  } else {
    return (1 / b) * exponent(b, n + 1);
  }
}

// Write a recursive function `stringIncludeKey(string, key)` that takes in
// a string to search and a key string. Return true if the string contains all
// of the characters in the key in the same order that they appear in the key.
//
// stringIncludeKey("cadbpc", "abc") => true
// stringIncludeKey("cba", "abc") => false

function stringIncludeKey(string, key) {
  if (key.length === 0) return true;

  let nextKeyChar = key[0];
  let keyIdx = string.indexOf(nextKeyChar);

  if (keyIdx === -1) return false;
  return stringIncludeKey(
    string.slice(keyIdx + 1, string.length),
    key.slice(1)
  );
}

// Write a function, `fibsSum(n)`, that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0.
// Note that for this problem, the fibonacci sequence starts with [1, 1].

function fibsSum(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

// Write a recursive function, `factorialsRec(num)`, that returns the first
// `num` factorial numbers. Note that the 1st factorial number is 0!, which
// equals 1. The 2nd factorial is 1!, the 3rd factorial is 2!, etc.

function factorialsRec(num) {
  if (num === 1) return [1];

  let facArr = factorialsRec(num - 1);
  facArr.push(facArr[facArr.length - 1] * (num - 1));
  return facArr;
}

// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 9 (i.e. more than one digit), sum the
// digits of the resulting number. Keep repeating until there is only one digit
// in the result, called the "digital root".
// **Do not use string conversion within your method.**
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.

function digitalRoot(num) {
  while (num > 9) {
    num = digitalRootStep(num);
  }

  return num;
}

function digitalRootStep(num) {
  // should sum the digits and return the result
  let count = 0;

  while (num > 0) {
    count += num % 10;
    num = Math.floor(num / 10);
  }

  return count;
}

// Write a recursive function `recSum(numArr)` that returns the sum of all
// elements in an array. Assume all elements are numbers.

function recSum(numArr) {
  if (numArr.length === 0) return 0;

  return recSum(numArr.slice(1)) + numArr[0];
}

// Write a function `firstEvenNumbersSum(n)` that returns the sum of the
// first n even numbers recursively. Assume n > 0

function firstEvenNumbersSum(n) {
  if (n === 1) return 2; // 2 + 4 + 6 = 2 * 1 + 2 * 2 + 2 * 3

  return firstEvenNumbersSum(n - 1) + 2 * n;
}

// Write a `String.prototype.mySlice(startIdx, endIdx)` method. It should take
// a start index and an (optional) end index and return a new string. Do NOT
// use the built-in string methods `slice`, `substr`, or `substring`.
// ex.
// `abcde`.mySlice(2) => `cde`
// `abcde`.mySlice(1, 3) => `bc`

String.prototype.mySlice = function (startIdx, endIdx) {
  if (startIdx > endIdx) return "";

  endIdx ||= this.length;

  let arr = [];

  for (i = startIdx; i < endIdx; i++) {
    arr.push(this[i]);
  }

  return arr.join("");
};

// Write an `Array.prototype.twoSum` method, that finds all pairs of positions
// where the elements at those positions sum to zero.
// NB: ordering matters. Each pair must be sorted with the smaller index
// before bigger index. The array of pairs must be sorted
// "dictionary-wise":
// [0, 2] before [1, 2] (smaller first elements come first)
// [0, 1] before [0, 2] (then smaller second elements come first)

Array.prototype.twoSum = function () {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length; j++) {
      if (i < j && this[i] + this[j] === 0) {
        arr.push([i, j]);
      }
    }
  }

  return arr;
};

// Write a function `transpose(arr)` that returns a 2d array transposed.
// e.g. transpose([[1,2],[3,4],[5,6]]) => [[1,3,5],[2,4,6]]

function transpose(arr) {
  let subArr = [];
  let finalArr = [];

  for (i = 0; i < arr[0].length; i++) {
    for (j = 0; j < arr.length; j++) {
      subArr.push(arr[j][i]);
    }
    finalArr.push(subArr);
    subArr = [];
  }

  return finalArr;
}

// Write an `Array.prototype.median` method that returns the median of elements
// in an array. If the length is even, return the average of the middle two
// elements.

Array.prototype.median = function () {
  let arr = this.sort();

  let midIdx = Math.floor(arr.length / 2);

  if (arr.length % 2 !== 0) {
    return arr[midIdx];
  } else if (arr.length === 0) {
    return null;
  } else {
    return (arr[midIdx] + arr[midIdx - 1]) / 2;
  }
};

// Write an `Array.prototype.myJoin(separator)` method, which joins the elements
// of an array into a string. If an argument is provided to `myJoin`, use that
// between each element. Otherwise, use an empty string.
// Do NOT call the built-in `Array.prototype.join` method.
// ex.
// [1, 2, 3].myJoin() => '123'
// [1, 2, 3].myJoin('$') => '1$2$3'

Array.prototype.myJoin = function (separator) {
  separator ||= "";

  let str = "";

  this.forEach((el) => {
    str += el + separator;
  });

  if (separator !== "") {
    return str.slice(0, str.length - 1);
  } else {
    return str;
  }
};

// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.

function primes(num) {
  let arr = [];

  let i = 2;
  while (arr.length < num) {
    if (isPrime(i)) {
      arr.push(i);
    }
    i++;
  }

  return arr;
}

function isPrime(num) {
  if (num < 2) return false;

  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.

function factors(num) {
  if (num < 1) return null;

  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr;
}

// Write an `Array.prototype.dups` method that will return an object containing
// the indices of all duplicate elements. The keys are the duplicate elements;
// the values are arrays of their indices in ascending order
//
// Example:
// [1, 3, 4, 3, 0, 3, 0].dups => { 3: [1, 3, 5], 0: [4, 6] }

// find the duplicate elements and make them a key to a hash map
// find the indices of the duplicate elements and store them in an array

Array.prototype.dups = function () {
  let hash = {};
  let finalHash = {};

  this.forEach((el, idx) => {
    hash[el] ||= [];
    hash[el].push(idx);
  });

  let keysArr = Object.keys(hash).filter((el) => hash[el].length > 1);

  keysArr.forEach((el) => {
    finalHash[el] = hash[el];
  });

  return finalHash;
};

// Write an `Array.prototype.myFlatten()` method which flattens a
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]

Array.prototype.myFlatten = function () {
  let flattenedArr = [];

  this.forEach((el) => {
    if (Array.isArray(el)) {
      flattenedArr = flattenedArr.concat(el.myFlatten());
    } else {
      flattenedArr.push(el);
    }
  });

  return flattenedArr;
};

// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]

function myReverse(array) {
  let reversedArr = [];

  array.forEach((el) => {
    reversedArr.unshift(el);
  });

  return reversedArr;
}

// Write a function `myFind(array, callback)` that returns the first
// element for which the callback returns true. If none is found, the
// function should return `undefined`
// Do not use the built-in `Array.prototype.find` method.

function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      return arr[i];
    }
  }
}

// Write an `Array.prototype.myRotate(times)` method which rotates the array by
// the given argument. If no argument is given, rotate the array by one position.
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]

Array.prototype.myRotate = function (times) {
  times ||= 1;

  while (times < 0) {
    times += this.length;
  }

  for (let i = 0; i < times; i++) {
    let el = this.shift();
    this.push(el);
  }

  return this;
};

// Write a function, `doubler(arr)`, that returns a copy of the input array
// with all elements doubled. You do not need to worry about invalid input.
//
// Example:
// doubler([1, 2, 3]) => [2, 4, 6]

function doubler(arr) {
  return arr.map((el) => el * 2);
}

// Write a `Function.prototype.myBind(context)` method. It should return a copy
// of the original function, where `this` is set to `context`. It should allow
// arguments to the function to be passed both at bind-time and call-time.
// Note that you are NOT allowed to use ES6 arrow syntax for this problem.

Function.prototype.myBind = function (context, ...bindArgs) {
  let that = this;
  return function (...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  };
};

// Write a `Function.prototype.myCall(context)` method, that accepts an object,
// and any number of additional arguments. It should call the function with the
// passed-in object as `this`, also passing the remaining arguments. Do NOT use
// the built-in `Function.prototype.call` or `Function.prototype.apply` methods
// in your implementation.

// Write a `Function.prototype.inherits(ParentClass)` method. It should extend
// the methods of `ParentClass.prototype` to `ChildClass.prototype`.
//
// **Do NOT use `Object.create`, `Object.assign`, `Object.setPrototypeOf`, or
// modify the `__proto__` property of any object directly.**

// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an
// object and an array of additional arguments. It should call the function with
// the passed-in object as `this`, also passing the arguments array. Do NOT use
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods
// in your implementation.

// Write a `Function.prototype.myCurry(numArgs)` method that collects arguments
// until the number of arguments collected is equal to the original `numArgs`
// value and then invokes the curried function.

// Write an `Array.prototype.myEvery(callback)` method that returns true
// if the callback returns true for every element in the array, and otherwise
// returns false. Use the `Array.prototype.myEach` method you defined above. Do
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach`
// methods.

// Write an `Array.prototype.myReject(callback)` method. Return a new array,
// which contains only the elements for which the callback returns false.
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.filter` or `Array.prototype.forEach` methods.
// ex.
// [1,2,3].myReject( (el) => el > 2 ) => [1, 2]

// Write an `Array.prototype.myFilter(callback)` that takes a callback and
// returns a new array which includes every element for which the callback
// returned true. Use the `Array.prototype.myEach` method you defined above. Do
// NOT call the built-in `Array.prototype.filter` or `Array.prototype.forEach`
// methods.

// Write an `Array.prototype.mySome(callback)` method which takes a callback
// and returns true if the callback returns true for ANY element in the array.
// Otherwise, return false.
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.

// Write an `Array.prototype.myReduce(callback, acc)` method which takes a
// callback and an optional argument of a default accumulator. If myReduce only
// receives one argument, then use the first element of the array as the default
// accumulator. Use the `Array.prototype.myEach` method you defined above. Do
// NOT call in the built-in `Array.prototype.reduce` or `Array.prototype.forEach`
// methods.

// Write an `Array.prototype.myEach(callback)` method that invokes a callback
// for every element in an array and returns undefined. Do NOT use the built-in
// `Array.prototype.forEach`.
