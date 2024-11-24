<?php
/*
-----------------------------------------------
----------- PHP Essentials SHEET CHEAT ---------
-----------------------------------------------

=========== VARIABLES ===========
*/

$myvar  = "example";  // string variable
$mynum  = 123;         // number variable
$mynum .= 973;         // this . add concat means it will print 123973
$double = 3.5;         // double variable
$boo    = false;       // boolean data type
$null   = Null;        // null data type
$__name = 'hadi';      // variable name example

// Note: the variable should not start with a number but can start with an underscore (_)

echo $myvar; // printing variable

/*
=========== COMMENTS ===========
*/

// This is one-line comment
# This is another one-line comment
/* This is a multi-line comment */

/*
=========== CONSTANTS ===========
We have 2 ways to define constants in PHP:
1- define(name, value)
2- const name = value

Note: Why use define()?
1- It will be assigned globally.
2- It can't be reassigned.
*/

define('NAME', 'ahmad');
const NAME2 = 'SAEED';

// Magic Constants:
__LINE__;  // Print the current line number of the file.
__FILE__;  // Print the full path and filename of the file.
__DIR__;   // Print the directory of the file.
__FUNCTION__; // Print the function name.
__CLASS__;    // Print the class name.
__TRAIT__;    // Print the trait name.
__METHOD__;   // Print the class method name.
__NAMESPACE__; // Print the name of the current namespace.

echo PHP_VERSION; // Outputs the PHP version
echo PHP_OS;      // Outputs the operating system PHP is running on

/*
=========== DATA TYPES ===========
*/

$var  = "it is a string"; // [1] - string
$var1 = 5;                 // [2] - int
$var2 = true;              // [3] - boolean
$var3 = 10.3;              // [4] - float
$var4 = array(1, 3, 4);    // [5] - array
$var5 = new DateTime();    // [6] - object
$var4 = null;              // [7] - null

echo gettype($var); // This will return the data type

/*
=========== TYPE CASTING ===========
Means changing the data type

  = "boolean" or "bool"
  = "integer" or "int"
  = "float" or "double" or "real"
  = "string"
  = "array"
  = "object"
  = "null" or unset
*/

$number = "42";
settype($number, "int"); // Now $number is an integer

$floatNumber = 3.14;
settype($floatNumber, "string"); // Now $floatNumber is a string

$booleanVar = 1;
settype($booleanVar, "bool"); // Now $booleanVar is a boolean

$arrayVar = "hello";
settype($arrayVar, "array"); // Now $arrayVar is an array

$someVar = "value";
settype($someVar, "null"); // Now $someVar is null

/*
=========== CONDITIONS ===========
*/

$condition = 'here is the condition';

if ($condition) {
    // code...
} elseif ($condition) {
    // code...
} else {
    // code...
}

/*
=========== OPERATORS ===========
*/

/*
Arithmetic operators
--------------------
  [+]  addition       100 + 20 = 120
  [-]  subtraction    100 - 20 = 80
  [*]  multiplication 100 * 20 = 2000
  [/]  division       100 / 20 = 5
  [%]  modulus        100 % 20 = 0
  [**] exponentiation 10 ** 2 = 100 (10 raised to the power of 2)
*/

/*
Assignment operators
--------------------
  $var1   = 200
  $var1  += 100 => 200 + 100 = 300
  $var1   = 200
  $var1  -= 100 => 200 - 100 = 100
  $var1  = 200
  $var1  *= 100 => 200 * 100 = 20000
  $var1  = 200
  $var1  /= 100 => 200 / 100 = 2
*/

/*
Comparison operators
--------------------
  [==]   Equals           checks if the values are the same
  [!=]   Not equals       checks if the values are not the same
  [===]  Identical        checks if values and data types are the same
  [!==]  Not Identical    checks if values and data types are not the same
  [<]    Less than
  [<=]   Less than or equals
  [>]    Greater than
  [>=]   Greater than or equals
*/

/*
Increment operators
--------------------
  [++$a] pre-increment
  [$a++] post-increment
  [--$a] pre-decrement
  [$a--] post-decrement
*/

/*
Logical operators
--------------------
  [and]  All conditions must be true
  [&&]   All conditions must be true
  [xor]  Only one condition should be true
  [or]   At least one condition must be true
  [||]   At least one condition must be true
  [!]    Negates a condition
*/

/*
Error operator
--------------------
  [@]  Add it before a function to suppress errors

Examples:
  $file = @fopen('test.txt', "r") or die('this file is not found');
  (@include('index.php')) or die('no such file');
*/

/*
=========== LOOPING ===========
*/

for ($i = 1; $i <= 20; $i++) {
    // statement
}

$a = 1;
while ($a < 20) {
    // statement
}

$i = 1;
do {
    echo $i;
    $i++;
} while ($i <= 20);

/*
=========== FOREACH ===========
*/

# Syntax for indexed arrays
foreach ($array as $value) {
    // code here
}

# Syntax for associative arrays
foreach ($array as $key => $value) {
    // code here
}

/*
=========== FUNCTIONS ===========
*/

function sayHello($name)
{
    echo 'Hello ' . $name;
}

sayHello('hadi'); // Output: Hello hadi

/*
=========== SWITCH ===========
*/

switch ($expression) {
    case 'value1':
        // code here
        break;
    
    case 'value2':
        // code here
        break;

    default:
        // code here
        break;
}


