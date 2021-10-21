const nonConstructibleChange = (coins) => {
  // Write your code here.
  // sort the array
  // iterate thru the array using a for loop
  // add each element to the change variable for every loop
  // check if the element being added is more or less than the current change value plus 1
  // if the next element is greater than, then break out of the for loop
  // if next element is less than, then update the change variable
  // at end of the for loop return the change variable plus 1

  coins.sort((a, b) => a - b); // [1, 2, 5]

  let change = 0;

  for (let coin of coins) {
    if (change + 1 < coin) break;
    change += coin;
  }
  return change + 1;

  // n = length of array
  // Time: O(nlog(n))
  // Space: O(1)
};

console.log(nonConstructibleChange([1, 2, 4, 5]));
