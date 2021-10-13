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
