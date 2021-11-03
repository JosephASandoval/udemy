// OOP in JavaScript lesson
// https://www.youtube.com/watch?v=aAAS9cEuFYI

// Solution 1 - bad because your creating a new function for every instance
const userCreator = (name, score) => {
  const newUser = {};
  newUser.name = name;
  newUser.score = score;
  newUser.increment = () => {
    newUser.score++;
  };
  return newUser;
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
user2.increment();

console.log(user1.score, user2.score);

// Solution 2 - good, but not industry standard
const userCreator = (name, score) => {
  const newUser = Object.create(functionStore);
  newUser.name = name;
  newUser.score = score;
  return newUser;
};

const functionStore = {
  increment: function () {
    this.score++;
  },
};

const user1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
user1.increment();
user2.increment();

console.log(user1.__proto__);

// Solution 3 - still not the best, but close
function UserCreator(name, score) {
  this.name = name;
  this.score = score;
}

UserCreator.prototype.increment = function () {
  this.score++;
};

const user1 = new UserCreator("Will", 3);
const user2 = new UserCreator("Tim", 5);
user1.increment();
user2.increment();

console.log(user1.__proto__);
console.log(UserCreator.prototype);
console.log(user1);

// Solution 4 - the best
class UserCreator {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  increment() {
    this.score++;
  }
}

const user1 = new UserCreator("Eva", 9);
user1.increment();

console.log(user1.score);
