/**
 * OOP JavaScript Cheat Sheet
 * Created by Hadi
 */

// -----------------------------------------------------------------------------
// Object Creation Methods
// -----------------------------------------------------------------------------

/**
 * 1. Object Literal Syntax
 */
const user = {
  firstName: "Hadi",
  lastName: "Ali",
  addresses: {
    all: () => "Egypt and KSA",
  },
  fullName() {
    return `Hello, ${this.firstName} ${this.lastName}`;
  },
};

// Accessing properties and methods
console.log(user.firstName); // "Hadi"
console.log(user.fullName()); // "Hello, Hadi Ali"
console.log(user.addresses.all()); // "Egypt and KSA"
console.log(user["firstName"]); // "Hadi" (Bracket notation)

// -----------------------------------------------------------------------------

/**
 * 2. Creating Objects with `new Object`
 */
const user2 = new Object();
user2.name = "Hadi";
user2.greet = function () {
  return `Hello, ${this.name}`;
};

console.log(user2.name); // "Hadi"
console.log(user2.greet()); // "Hello, Hadi"

// -----------------------------------------------------------------------------

/**
 * 3. Assigning Properties to Objects
 */
const source = {
  prop1: "Value1",
  prop2: "Value2",
};

const target = {
  prop3: "Value3",
};

// Merge source properties into target
Object.assign(target, source);

console.log(target);
// Output: { prop3: "Value3", prop1: "Value1", prop2: "Value2" }

// -----------------------------------------------------------------------------

/**
 * 4. Deleting Properties from Objects
 * Note: Variables or entire objects cannot be deleted.
 */
const obj = {
  prop1: "Value1",
  prop2: "Value2",
};

delete obj.prop2; // Deletes the property
console.log(obj); // { prop1: "Value1" }

// -----------------------------------------------------------------------------

/**
 * 5. Looping Over Object Properties
 */
const loopObj = {
  prop1: "Value1",
  prop2: "Value2",
};

for (let key in loopObj) {
  console.log(`${key}: ${loopObj[key]}`);
}
// Output:
// prop1: Value1
// prop2: Value2

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Constructors and Classes
// -----------------------------------------------------------------------------

/**
 * 6. Creating Objects Using Constructors
 */
function Phone(serial, color) {
  this.serial = serial;
  this.color = color;
}

const phone1 = new Phone(123, "Red");
console.log(phone1);
// Output: Phone { serial: 123, color: 'Red' }

// -----------------------------------------------------------------------------

/**
 * 7. Adding Prototypes to Constructor Functions
 */
function User() {
  this.name = "Hadi";
  this.age = 40;
}

User.prototype.addTitle = function () {
  return "Hello";
};

console.log(User.prototype);
// Output: { addTitle: [Function (anonymous)] }

// -----------------------------------------------------------------------------

/**
 * 8. Creating Objects Using Classes
 */
class UserClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const user3 = new UserClass("Hadi", 27);
console.log(user3.greet());
// Output: "Hello, my name is Hadi and I am 27 years old."

// -----------------------------------------------------------------------------

/**
 * 9. Getters and Setters in Classes
 */
class UserWithGetters {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get age() {
    return this._age;
  }

  set age(newAge) {
    if (newAge > 0) this._age = newAge;
  }
}

const user4 = new UserWithGetters("Hadi", 27);
console.log(user4.name); // "Hadi"
user4.name = "Ali";
console.log(user4.name); // "Ali"

// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Error Handling
// -----------------------------------------------------------------------------

/**
 * 10. Creating Errors in JavaScript
 */
try {
  throw new Error("This is a custom error!");
} catch (error) {
  console.error(error.message); // "This is a custom error!"
}

// -----------------------------------------------------------------------------
