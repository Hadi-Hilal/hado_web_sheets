<?php

/*
================
 math methods  
================
*/
$arr = [100 , 2 , 200 , 4 , 33];

pow(base, exp) 
pow (10 , 2)  //output : 100

min(values)
min($arr)     //output : 2

max(values)
max($arr)     //output : 200

round(val)
round(3.4)    //output : 3

ceil(value)
ceil(3.4)     //output : 4

floor(value)
floor(3.4)    // output : 3



/*
================
 array methods  
================
*/

$lang = ['ar' , 'en' , 'tr'];

count(var) // this print count element in array 
count($lang) // output : 3

in_array(needle /*the word we want*/, haystack /*the array name */ , type /*this mean case insenstive or not */ )  
// this method search in array like ex;
in_array('ar' , $lang)

array_search(needle /*the word we want*/, haystack /*the array name */ , type /*this mean case insenstive or not */ )  
// this method search in array and print the index like ex;
array_search('ar' , $lang) // output : 1

array_key_exist(needle /*the key we want*/, haystack /*the array name */ )  
// this method search in assoiative array for key ex;
array_key_exist('ar' , $lang) // output : nothing

array_push(array /*the array name */, var /*the value */ ) // this method add value to array but in last index

array_push($lang , 'sp')  // output : $lang = ['ar' , 'en' , 'tr' , 'sp'];

array_unshift(array /*the array name */, var /*the value */ ) // this method add value to array but in first index

array_unshift($lang , 'sp')  // output : $lang= ['sp' ,'ar' , 'en' , 'tr'];

array_pop(array /*the array name */ ) // this method remove last value in array 

array__pop($lang)  // output : $lang= ['ar' , 'en' ];

array_shift(array /*the array name */ ) // this method remove first value in array 

array_shift($lang )  // output : $lang= ['en' , 'tr'];

sort(array /*the array name */ , type /*the type sort */) // this method sort index array 

sort($lang )  // output : $lang= ['ar' , 'en' , 'tr'];

rsort(array /*the array name */ , type /*the type sort */) // this method reverse sort index array 

rsort($lang )  // output : $lang= ['tr' , 'en' , 'ar'];

asort(array /*the array name */ , type /*the type sort */) // this method sort assoiatve array 

asort($lang ) 

arsort(array /*the array name */ , type /*the type sort */) // this method reverse assoiatve array 

ksort(array /*the array name */ , type /*the type sort */) // this method sort key assoiatve array 

krsort(array /*the array name */ , type /*the type sort */) // this method reverse key assoiatve array 

shuffle(array/*the array name */ ) // this method make a random  array 
shuffle($lang ) // output : $lang= ['en' , 'tr'  ,'ar'];

array_sum(array /*the array name */ ) // this method sum the values in  array 

array_rand(array /*the array name */ , number /*the number element we want to print it */  ) // this method show a random index from our array 

array_rand($lang ,  2) // output : $lang= [ 'tr'  ,'ar'];

array_unique(array /*the array name */ ) // this method make our array  a unique


/*
================
 string methods  
================
*/

$str = 'hello am hadi';
$arr = ['el1' , 'el2' , 'el3']


explode(delimiter/* here sperator */, string /* here the string */ , limit  /* how many element in array we want */) 
// this method convert string to array ex:
explode(" " , $str) // outpout array :[ hello , am , hadi]


implode(delimiter/* here sperator */, string /* here the array */ , limit  /* how many element in array we want */) 
// this method convert array to  string ex:
implode("-" , $arr) // outpout string :el1-el2-el3

join(delimiter/* here sperator */, string /* here the array */ , limit  /* how many element in array we want */) 
// this method same to implode convert array to  string ex:
join("-" , $arr) // outpout string :el1-el2-el3

str_split(search /* here the string */, replace /* here starting  */, subject)) 
// this method convert string yo array ex:
str_split($str , 3) // outpout array :['hel' , 'lo ' , 'am ' , 'had' , 'i']

str_replace(search /* here the word we want to search it */, replace /* here the word we want to rplace it  */, subject /* here the string */ , count /* here how many time we want */)
// this method to search in string on word and replace it 
str_replace('hadi' , 'ahmad' , $str) //output: hello am ahmad


str_repeat(input /* here the string we want to repeat it */, multiplier /* here is the nuber */) 
// this method repeat string
str_repeat($str, 2) //output :'hello am hadi helo am hadi'

str_shuffle(str /* here the string we want to mix the capital in it */) // this method mix the elemnts in string every load
str_shuffle($str) // output : eomildhaalh

strlen(str /* here the string we want to know length it */) // this method calc the length of string
strlen($str) // output : 13
$str[6] // output : a

addslashes(str /* here the string we want to add black slashe */) // this method to add black slashe
strip_tags(str) // this method fillter the string frommany php or html elements

strtolower(str)  // this method make all the string lowercase
strtoupper(str)  // this method make all the string capitalcase

/* char using 

\0 NULL
\t Tab
\n New Line
\r Carriage Return
\x0B vertical Tab
" " space 

 */

trim(str , charlist) // this method can remove any thing fom string 
 
rtrim(str , charlist) // this method remove any thing fom string from right 

ltrim(str , charlist) // this method remove any thing fom string  fom string from left

str_word_count(string) // this method calc words in string 

parse_str(str)  // this method analayze the string and give us the result as variable

nl2br(string)   // this method break the line

strrev(string) // this reverse the string

substr(string, start , length) // this functionn get piece from our string

substr_count(haystack/*the string we want to search in it */, needle /* the word we want to search about it */)
// we use this method to know how many times this word founded in the string 


/*
===================
 file system method 
===================
*/

filename = 'index.html'

file_exists(filename)              // this method check if file found or not
file_put_contents(filename, data , FILE_APPEND /* we use this to keep old data and dom=nt wate it*/ | LOCK_EX ) 
 // this method add data to our file and if didnot found the file it will create it 
file_get_contents(filename)        // this method show content from any page or path
is_writable(filename)              // this method check if the file writable or not 
mkdir(pathname)                    // this method make directory 
rmdir(pathname)                    // this method remove directory 
is_dir(filename)                   // this method check if we have dir or not 
dirname(path)                      // this method print the directory name to to the path
basename(path)                     // this method print the directory name to to the path
pathinfo(path)                     // this method print the path info like dirname and base name ....
copy(oldfile, newfile)             // this method copy the file 
rename(oldfile, newfile)           // this method rename the file 
unlink(filename)                   // this method delete the file 
chmod(filename, mode)              // this method change file permission
rmdir(dirname)                     // this method remove the directory 
scandir(directory)                 // this method show what the dir contain
fopen(filename, mode)              /* this method open the files and edit of them
modes: 
 r : read only start from the first line in file [file must be exist]
 r+: read and write and write from the first line in file [file must be exist]
 w : write only [open + clean the file (delete the content) + create the file if dose not exist]
 w+: read and write and delete the content [open + clean the file + create the file if dosenot exist]
 a : write only [open and write from the end file + create the file + create the file if dosenot exist]
 a+: read and write [open + create the file if dosenot exist]
 x : write only [open and write from the end file + the file should dose not exist]
 x+: read and write [open + create the file + the file should dose not exist]
*/
fread(fopen, filesize)              // this method read the file                          
filesize(filename)                  // this method print file size any file
fwrite(handle, string)              // this method write in the file   
fclose(handle)                      // this method close the file 


/*
===============
 supper globals  
===============
*/

$globals['variable_name'] = 'variable _ value';    // this way make the variablr global in any page 
$_SERVER                                           // this variable print server info in array
// ex : if we want to print any element from server array $_SERVER['the eelment here ex : HTTP_HOST']
$_GET                                              // this variable use for get  method
$_post                                             // this variable use for post method
$_request                                          // this variable use with any request 

/*
===============
  cookies 
===============
*/

setcookie(name , value , expire , path , domain , secure , httponly)

/*
 name    : the name of the cookie
 value   : content of the cookie 
 expire  : time the cookie 
 path    ; where the path want coojie work 
 domain  : the name of domain
 secure  : IF IT TRUE thats mean just wiil send cookie with http 
 httponly: if true thats mean its dwill dont work with js files
 ex :
*/

setcookie('school' ,  'chanel' , time() + 1000 ,  '/' , localhost , TRUE , TRUE)


/*
===========
   Date 
===========
*/

date_default_timezone_set(timezone_identifier)                 // this function set a time zone
date_default_timezone_get(timezone_identifier)                 // this function get a time zone
date(format , timestamp)                                       // this function make format date
/*
   Date format 
   Y year   ex 2015
   y year   ex 15
   M month  ex 10
   m month  ex Oct
   D day    ex Thu
   d day    ex 23
   Js       ex 23th
   to learn more about format we have this link https://www.php.net/manual/en/function.date.php
*/



/*
===========
 functions  
===========
*/
gettype($var)                          // this func get type of the element
htmlspecialchars($param);              // this function convert html element to text
die();                                 // this destroy the every thing after this code
var_dump();                            // this print the assivtive array 
ucwords();                             // this function make the text uppercase                 
count();                               // sum count elements in array or object
print_r()                              // this function print the array          
sleep(seconds)                         // make delay to server before execute the code but take second parmeter
usleep(micro_seconds)                  // make delay to server before execute the code but take micro second parmeter
time_sleep_until(timestamp)            // make delay to server before execute the code but take timestamp 
uniqid(prefix)                         // this function make random number for making id key
// ex uniqid('id_')                      output: id_5f831da95b804
error_reporting(0)                     // this function disable the errors 
filter_var(variable , filter type)     // this function make afilter on variable 
/*
filter type
1- FILTER_VALIDATE_EMAIL             this filter check if the variable EMAIL
2- FILTER_VALIDATE_INT               this filter check if the variable INT
3- FILTER_VALIDATE_IP                this filter check if the variable IP
4- FILTER_VALIDATE_URL               this filter check if the variable URL        
*/
exit();                                // this function stop exceute the code
die()                                  // this function like exit php stop exceute the code
