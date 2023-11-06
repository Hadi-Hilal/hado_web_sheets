/**
 * Created by hadi on 2020.
 */
 
 // ECMA SCRIPT SHEETS CHEAT  

 /**
 * new feauters in es 6 let and const 
 * var   
 *  we use this for function scope
 * can be redeclare
 * const 
 *  we use this for block scope and const value
 * can not be redeclare
 * let   
 *  we use this for block scope
 * can not be redeclare
 **/

 // new feature in es6 
 
 // 1- arrow function , ex:

 let newfunc = () => { // this in arrow function
     return 'some thing here';
 };

 var newfunc = function (){ // this a same function but in regular 
    return 'some thing here';
 }

  // 2- write string in multi line using ` ` , ex:
  const name = 'hadi' ; 
  let message  = `here is 
          message  
          multi line ${name}`;// here we print the const value ;

           
    // 3- you can add a defult value in function parameter ex;
    function test (param1 = 'here default value'){
        return 'some thing ';
    }

    let newfunc = () => { // this in arrow function
        return 'some thing here';
    };


 // important new functions in es6 
 Object.freeze('varible here') ;                                       // this make the object constant 
 String.startsWith('serch string' , 'position from the start')         // this function serach in string 
 String.endsWith('serch string' , 'position from the end')             // this function serach in string 
 String.includes('serch string' , 'position')                          // this function serach in string 
 String.repeat('count');                                               // this function repeat string 
 set = new set('string here');                                         // this function to set init aunique value 
 String.add('string here');                                            // this function add something to string 
 String.delete('string here');                                         // this function delete somthing fom string 
 String.clear();                                                       // this function claer  every thing in string 

