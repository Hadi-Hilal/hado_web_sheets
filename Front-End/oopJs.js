/**
 * oop js sheet cheat
 * Created by hadi .
 */

/*
formating object 
1- literal 
*/

let user = {
  firstName: "hadi",

  lastName: "ali",

  adresess: {
    all: () => ` eg and ksa`,
  },
  fullName() {
    return ` hello ${user.firstName} ${user.lastName}`;
  },
};

// acessing to element

console.log(user.firstName);
console.log(user.fullName());
console.log(user.adresess.all()); // dot notation
console.log(user.['firstName']);  // bracket notation


/*
define object  
*/

let user = new Object();

user.name = "hadi";

user.defo = function () {
  return ` hello  ${user.name} `;
};

console.log(user.name);


/*
 create object  
*/

let sellobj = new Object();

sellobj = {
  discount: true,
  defo: function () {
    return ` you ${this.discount ? "" : "dont"} have discount`;
  },
};

console.log(sellobj.defo());

/*
  assign  object  
*/

let src = {
  prop1: "val1",
  prop2: "val2",
};

let target = {
  prop3: "val3",
};

Object.assign(target, src);

console.log(target);

/*
  delete val from object  
  =?note : we cant delete object or any variable 
*/

let src = {
  prop1: "val1",
  prop2: "val2",
};

delete src.prop2;
console.log(src);

/*
  for in loop
*/

let src = {
  prop1: "val1",
  prop2: "val2",
};

for( let info in src){
  console.log(info);
}

/*
   building constructor
*/

function Phone(serial , color){
  this.serial = serial ;
  this.color = color ;
}

let phone1 = new Phone(123 , 'red')

console.log(phone1)

/*
   adding new prottype
*/
function User () {
  this.name = 'hadi' ;
  this.age = 40
}


User.prototype.addTitle = function (){
  return 'hello'
}

console.log(User.prototype)

/*
   create error in js
*/

throw new Error ('its error')

/*
   create constructor class
*/
class User {
  constructor() { // here property
    this.name = 'hadi';
    this.age = 40;
  }
  addTitle() { // here method
    return 'hello';
  }
}

/*
   getters and setters
*/
class User {
  constructor() { // here property
    this.name = 'hadi';
    this.age = 40;
  }
  get addTitle() { // here method
    return 'hello';
  }
  set addTitle(newName) { // here method
    this.name = newName;
  }
}



