const maxValue = (nums) => {
  // use a loop
  // create a variable to keep track of the max
  // update the max throughout the loop
  // return the max

  let max = -Infinity;
  for (const el of nums) {
    if (el > max) {
      max = el;
    }
  }

  return max;

  // n = length of array
  // Time: O(n)
  // Space: O(1)
};

const isPrime = (n) => {
  // return boolean if prime
  // divide the given number by a range of numbers between 2 and itself
  // 1 is not prime
  // 2 is prime
  // input: positive number

  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;

  // n = input number
  // Time: O(square_root(n))
  // Space: O(1)
};

const uncompress = (s) => {
  // create 2 pointer i, j
  // have j increment as long as the char at the j index is a number
  // create a string of numbers to check for this
  // create a results array to keep track of the letters
  // return the results array converted to a string

  const result = [];
  const numbers = "0123456789";
  let i = 0;
  let j = 0;

  while (j < s.length) {
    let char = s[j];
    if (numbers.includes(char)) {
      j++;
    } else {
      let num = Number(s.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(char);
      }
      j++;
      i = j;
    }
  }
  return result.join("");

  // n = number of groups
  // m = max num found in any group
  // Time: O(n * m)
  // Space: O(n * m)
};

const compress = (s) => {
  // loop through the string
  // find current value and check if equal to the next char
  // create a count variable to keep track of the num chars
  // if not equal then add the count to an array and then add the char to the array
  // return the array

  const result = [];
  let i = 0;
  let j = 0;

  while (j <= s.length) {
    let curr = s[i];
    let next = s[j];

    if (curr === next) {
      j++;
    } else {
      const num = j - i;
      if (num === 1) {
        result.push(curr);
      } else {
        result.push(String(num), curr);
      }
      i = j;
    }
  }

  return result.join("");

  // n = length of string
  // Time: O(n)
  // Space: O(n)
};

const anagrams = (s1, s2) => {
  // create an object to store the frequency of each char in the first string
  // then remove the frequency of each char in the second string from that same object
  // retun true if all of the values in that obj are 0

  const counter = {};

  for (const char of s1) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (const char of s2) {
    counter[char] = (counter[char] || 0) - 1;
  }

  return Object.values(counter).every((el) => el === 0);

  // n = length of s1
  // m = length of s2
  // Time: O(n + m)
  // Space: O(n)
};

const mostFrequentChar = (s) => {
  // create a counter object to keep track of the freq of each char
  // then loop thru string figuring out which char has the highest freq
  // update the best char only if the freq is great in order to maintain order in case of a tie

  const counter = {};
  let best = s[0];

  for (const char of s) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (const char of s) {
    if (counter[char] > counter[best]) {
      best = char;
    }
  }

  return best;

  // n = length of input string
  // Time: O(n)
  // Space: O(n)
};

const pairSum = (numbers, targetSum) => {
  // use an object to keep track of numbers visited

  const previousNums = {};

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    const complement = targetSum - num;
    if (complement in previousNums) {
      return [previousNums[complement], i];
    }
    previousNums[num] = i;
  }

  // n = length of input array
  // Time: O(n)
  // Space: O(n)
};
