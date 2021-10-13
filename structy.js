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

  const results = [];
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
        results.push(char);
      }
      j++;
      i = j;
    }
  }
  return results.join("");

  // n = number of groups
  // m = max num found in any group
  // Time: O(n * m)
  // Space: O(n * m)
};
