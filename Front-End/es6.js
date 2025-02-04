/**
 * 📝 ECMAScript 6+ (ES6+) Cheat Sheet
 * Created by Hadi on 2020.
 * For more details: https://quickref.me/es6
 */

/** 🌟 New Features in ES6: let, const, and var */

// ✅ var:
// - Function-scoped
// - Can be redeclared
// - Hoisted but initialized as undefined
// - Creates a property on the global `window` object (in browsers)

// ✅ let & const:
// - Block-scoped
// - Cannot be redeclared within the same scope
// - ReferenceError when accessed before declaration
// - Does NOT create a global `window` property

/** 🔧 1. Arrow Functions */

const newFunc = () => "something here";
const oldFunc = function () {
  return "something here";
};

/** 📜 2. Multiline Strings with Template Literals (`) */

const name = "Hadi";
const message = `This is
a multiline message
for ${name}.`;

/** 📦 3. Default Parameter Values */

function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
const arrowGreet = (name = "Guest") => `Hello, ${name}!`;

/** 🔀 4. Spread Operator (...) */

const numbers = [1, 2, 3];
console.log(...numbers); // Output: 1 2 3

/** 🧩 5. Object Destructuring */

const user = {
  username: "Omar",
  age: 23,
  role: "Admin",
  theme: "Dark",
  langs: { ar: "100%", en: "75%" },
};

const { username, age, role, color = "red", langs: { ar, en } } = user;

/** 🔧 6. Object Literals */

// ✅ Property Shorthand
const myName = "Hadi";
const myAge = 27;

const person = { myName, myAge };

// ✅ Method Shorthand
const greeting = {
  sayHello() {
    console.log("Hello!");
  },
};

// ✅ Computed Property Names
const propName = "age";
const personClass = {
  name: "Hadi",
  [propName]: 27,
};

/** 📚 7. Sets (Unique Collections) */

const mySet = new Set([1, 2, 2, 3, "Hello", { name: "John" }]);
mySet.add(5);
mySet.delete(2);
console.log(mySet.size); // 4
mySet.clear();

/** 🗺️ 8. Maps (Key-Value Pairs) */

const myMap = new Map();
myMap.set("name", "Hadi").set(42, "The Answer").set(true, "Boolean Key");
console.log(myMap.get("name")); // Hadi

/** 🔑 9. Symbols (Unique, Immutable Identifiers) */

const mySymbol = Symbol("myUniqueIdentifier");
console.log(mySymbol); // Output: Symbol(myUniqueIdentifier)

/** 🚫 10. Object.freeze() (Immutable Objects) */

const obj = { key: "value" };
Object.freeze(obj);
// obj.key = "newValue"; // Error: Cannot modify a frozen object

/** ✂️ String Methods (New in ES6) */

const str = "Hello, world!";
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("world!")); // true
console.log(str.includes("world")); // true
console.log("abc".repeat(3)); // 'abcabcabc'

/** 🔄 11. Iterators */

function createIterator(array) {
  let index = 0;
  return {
    next() {
      return index < array.length
        ? { value: array[index++], done: false }
        : { done: true };
    },
  };
}

const iterator = createIterator(["Hadi", "Hilal", "Developer"]);
console.log(iterator.next()); // { value: 'Hadi', done: false }

/** 🔄 12. Generators (Special Iterators) */

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 1, done: false }

/** 🧮 13. New Array Methods */

// ✅ Array.of()
console.log(Array.of(100)); // [100]

// ✅ Array.from()
const myNumbers = [10, 20, 30];
const minusTen = Array.from(myNumbers, (num) => num - 10);
console.log(minusTen); // [0, 10, 20]

// ✅ Array.fill()
const numbersArr = [1, 2, 3];
numbersArr.fill(100, 1, 3);
console.log(numbersArr); // [1, 100, 100]

/** 🧱 14. Classes */

class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
}

const userClass = new User("Hadi");
userClass.sayHello(); // Hello, Hadi!

/** 🤝 15. Promises */

// ✅ A Promise Example
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data fetched!"), 2000);
});

myPromise
  .then((data) => console.log(data)) // "Data fetched!"
  .catch((error) => console.error(error));

/** 🔄 16. Async/Await (ES8 Feature) */

async function fetchData() {
  try {
    const data = await myPromise;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

/** 🚀 17. Summary of Key ES6+ Features */

// ✅ let and const
// ✅ Arrow Functions
// ✅ Template Literals
// ✅ Default Parameters
// ✅ Spread & Rest Operators
// ✅ Object Destructuring
// ✅ Object Literals
// ✅ Sets & Maps
// ✅ Symbols
// ✅ Iterators & Generators
// ✅ Classes
// ✅ Promises
// ✅ Async/Await
