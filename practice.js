const areThereDuplicates = (...args) => {
  // appr: use a freq counter and return true if every value is 1

  // loop thru iterable
  // change each el into a string
  // create obj
  // check obj vals

  const counter = {};

  for (let el of args) {
    let arg = el.toString();
    counter[arg] = (counter[arg] || 0) + 1;
  }

  return !Object.values(counter).every((val) => val === 1);
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
