<?php

/* 1-union type */


// in php 7 we can determ the data type of class 
// in php 8 we can add multi type to class
class fetchdata {

    public function data(int|string  /* this mean the data type of param should be string or int */
     $data){
        return $data ;
    }
}

$getdata = new fetchdata();

echo $getdata->data('hi'); // output : hi

// explain more 
class fetchdata2 {

    public function data(? /* this mean the string type is optional*/ 
    int /* this mean the data type of param should be string */ $data)
     :int /* this mean the function should return int dat type  */
    // :void  note this new in php 8 mean the function dont return 
     {
        return $data ;
    }
}

$getdata = new fetchdata();

echo $getdata->data('ss');/* */



/* 2-named params  */

class animals {

    public function dogs(string $dogname){
        return $dogname;
    }

   public $dogstype = [
        'axo' , 'resx' , 'dsk'
   ];
}

$newanimal = new animals();

echo $newanimal->dogs(
 dogname : 'kit' // thsi new in php 8
);

// accessing direct to function from object

class animals2 {

    public function dogs($dogname){
        return $dogname;
    }
}

echo $newanimal = (new animals())->dogs('rex');


/* 3-Match Expressions  */

// in php 7 we was use switch but in php 8 we use match

$name = 'hadi' ;

$message = match($name){
    "hadi" , "ahmad" => "male ",
    20 => "age" ,
    "sara" => "femmale" ,
    default=> "the name strange"
};

echo $message ; // output : male



/* 4-Constructor property promotio  */


// in php 7 

class phone2 {
    private $ip ;
    private $mac ;

    public function __construct($ip , $mac){
        $this->ip = $ip ;
        $this->mac = $mac;

    }
}

// in php 8
class phone {
    // private $ip ;
    // private $mac ;

    public function __construct( 
    private  $ip ,
    private $mac){
      $this->ip = $ip ;
      $this->mac = $mac;
    }

}



/* 5-mixed type  */

// in php 8 we have a new dat type is (mixed) thats contain all the data type

class fetchdata3 {

    public function data(mixed $data){
        return $data ;
    }
}

$getdata = new fetchdata3();

echo $getdata->data('hi'); //  output : hi

echo $getdata->data(1);   //  output :  1

//note : but it should not be null because its null



/* 6-null safe operator  */

// in php 8 we dont need to write if ($condtion !== null ) we just write null safe operator (?)

class fetchdata4 {

    public function data(mixed $data){
        return $data ;
    }

    
}

$getdata = new fetchdata4();

echo $getdata?->data(null);



/* 7-Create DateTime Objects from Interface: 

PHP 8 allows you to create DateTime objects directly from the DateTimeInterface interface. 
This enhances interoperability and flexibility in working with date and time objects.

*/
$dateTime = DateTime::createFromInterface($dateTimeInterface);


/* 8-Stringable interface */

// in php 8 we can make the object to string

class fetchdata5 {

    public function __tostring():string{
        return 'hii';
    }
}

$getdata = new fetchdata5();

function test(string|stringable $data){
    return $data;
}

test($getdata);

/* 9-str_contains */

// in php 8 we have new function check if the word we want in string or not

$phrase = "i love php " ;
$word = "php";

echo str_contains($phrase , $word); // output 1 

/* 10-str_start_with */

// in php 8 we have new function check if the string start with word or not

$phrase = "i love php " ;
$word  = "php";
$word1 = "i";
$word2 = "I";

echo str_starts_with($phrase , $word); // output 0

echo str_starts_with($phrase , $word1); // output 1

echo str_starts_with($phrase , $word2); // output 0


/* 11-str_end_with */

// in php 8 we have new function check if the end start with word or not

$phrase = "i love php" ;
$word  = "php";
$word1 = "i";
$word2 = "I";

echo str_ends_with($phrase , $word); // output 1

echo str_ends_with($phrase , $word1); // output 0

echo str_ends_with($phrase , $word2); // output 0


/* 12-str_contains */

$phrase = "i love php" ;
$word  = "php";
$word1 = "i";
$word2 = "I";

echo str_contains($phrase , $word); // output 1


// for more info read this article https://stitcher.io/blog/new-in-php-8