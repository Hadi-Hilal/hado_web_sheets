<?php

/*
================
Math Methods  
================
*/

$arr = [100, 2, 200, 4, 33];

echo pow(10, 2); // Output: 100

echo min($arr); // Output: 2
echo max($arr); // Output: 200

echo round(3.4); // Output: 3
echo ceil(3.4); // Output: 4
echo floor(3.4); // Output: 3

/*
================
Array Methods  
================
*/

$lang = ['ar', 'en', 'tr'];

echo count($lang); // Output: 3

echo in_array('ar', $lang) ? 'Found' : 'Not Found'; // Check if 'ar' exists

echo array_search('ar', $lang); // Output: 0

echo array_key_exists('ar', $lang) ? 'Exists' : 'Does not exist'; // Output: Does not exist for non-associative arrays

array_push($lang, 'sp'); // Adds 'sp' to the end
print_r($lang); // Output: ['ar', 'en', 'tr', 'sp']

array_unshift($lang, 'sp'); // Adds 'sp' to the beginning
print_r($lang); // Output: ['sp', 'ar', 'en', 'tr']

array_pop($lang); // Removes last element
print_r($lang); // Output: ['sp', 'ar', 'en']

array_shift($lang); // Removes first element
print_r($lang); // Output: ['ar', 'en']

sort($lang); // Sorts the array
print_r($lang); // Output: ['ar', 'en', 'sp', 'tr']

rsort($lang); // Reverse sort the array
print_r($lang); // Output: ['tr', 'sp', 'en', 'ar']

asort($lang); // Sort associative arrays by value (if associative)
arsort($lang); // Reverse sort associative arrays by value

ksort($lang); // Sort associative arrays by key
krsort($lang); // Reverse sort associative arrays by key

shuffle($lang); // Shuffle array randomly
print_r($lang);

echo array_sum($arr); // Output: 339

print_r(array_rand($lang, 2)); // Output: Random keys from the array

print_r(array_unique($lang)); // Removes duplicates

/*
================
String Methods  
================
*/

$str = 'hello am hadi';
$arr = ['el1', 'el2', 'el3'];

print_r(explode(" ", $str)); // Output: ['hello', 'am', 'hadi']

echo implode("-", $arr); // Output: el1-el2-el3

echo join("-", $arr); // Output: el1-el2-el3

print_r(str_split($str, 3)); // Output: ['hel', 'lo ', 'am ', 'had', 'i']

echo str_replace('hadi', 'ahmad', $str); // Output: hello am ahmad

echo str_repeat($str, 2); // Output: hello am hadihello am hadi

echo str_shuffle($str); // Randomizes the string

echo strlen($str); // Output: 13
echo $str[6]; // Output: a

echo addslashes($str); // Adds backslashes before special characters

echo strip_tags($str); // Removes HTML tags

echo strtolower($str); // Output: hello am hadi
echo strtoupper($str); // Output: HELLO AM HADI

trim($str); // Removes whitespace from both ends

rtrim($str); // Removes whitespace from the right end

ltrim($str); // Removes whitespace from the left end

echo str_word_count($str); // Output: 4

parse_str('a=1&b=2', $output); // Parses string into variables

echo nl2br("Line1\nLine2"); // Output: Line1<br>Line2

echo strrev($str); // Output: idah am olleh

echo substr($str, 0, 5); // Output: hello

echo substr_count($str, 'a'); // Output: 2

/*
===================
File System Methods
===================
*/

$filename = 'index.html';

echo file_exists($filename) ? 'File exists' : 'File does not exist';

file_put_contents($filename, 'Hello World!', FILE_APPEND | LOCK_EX);

echo file_get_contents($filename);

echo is_writable($filename) ? 'Writable' : 'Not writable';

mkdir('new_folder');

rmdir('new_folder');

echo is_dir($filename) ? 'Is directory' : 'Not a directory';

echo dirname($filename); // Output: directory name
echo basename($filename); // Output: index.html

print_r(pathinfo($filename));

copy('oldfile.html', 'newfile.html');
rename('oldfile.html', 'renamedfile.html');

unlink($filename);

chmod($filename, 0755);

scandir('folder_name');

$handle = fopen($filename, 'r');
echo fread($handle, filesize($filename));
fclose($handle);

echo filesize($filename);

fwrite($handle, 'Hello PHP');
fclose($handle);

/*
===============
Super Globals  
===============
*/

$globals['variable_name'] = 'variable_value';

echo $_SERVER['HTTP_HOST']; // Example of $_SERVER

echo $_GET['name']; // Example of $_GET

echo $_POST['name']; // Example of $_POST

/*
===============
Cookies 
===============
*/

setcookie('school', 'chanel', time() + 1000, '/', 'localhost', true, true);

/*
===============
Date 
===============
*/

date_default_timezone_set('America/New_York');
echo date('Y-m-d H:i:s'); // Output: Current date and time

/*
===============
Functions 
===============
*/

echo gettype($arr); // Output: array
echo htmlspecialchars('<b>Bold</b>'); // Output: &lt;b&gt;Bold&lt;/b&gt;
var_dump($arr); // Output: Detailed information about the array

echo ucwords($str); // Output: Hello Am Hadi
echo count($arr); // Output: 3
print_r($arr); // Output: Array ( [0] => el1 [1] => el2 [2] => el3 )

sleep(2); // Pauses the script for 2 seconds
usleep(500000); // Pauses the script for 500 milliseconds

echo uniqid('id_'); // Output: id_5f831da95b804

error_reporting(0); // Disables error reporting

// Filter example
if (filter_var('test@example.com', FILTER_VALIDATE_EMAIL)) {
    echo 'Valid Email';
} else {
    echo 'Invalid Email';
}

exit(); // Terminates the script


