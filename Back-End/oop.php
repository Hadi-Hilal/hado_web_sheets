<?php
/*
----------------------------------------
-----------OOP PHP SHEETS CHEAT ----------
----------------------------------------
*/


/*
 Class    

 a classes is like arrays but dont have key and value , its have property and method 
 like ex :
*/


class Ship                          // this is class
{

    public $name ;                  // this is property

    public function sayhello(){     // this is method

    	echo "hello word";
    }

      public function getName(){     // this method 

        return $this->name;          // to get prooerty from the same class we use $this
    }


};

$ship = new Ship();                  // this is object

$ship_name =  $ship->name = 'hadi' ; // add to property value 

echo $ship_name ;                         // print value of property  : hadi

$ship_hello = $ship->sayhello();     // get the method 

echo $ship_hello;                    // print the method : hello word

$ship_name_class = $ship->getName(); // get the method 

echo $ship_name_class;               // print the method : hadi



// getters and setters 
// to know more about it we have this example 
class phone {
    private $ip ;
    private $mac ;

    public function getIp(){
        return $this->ip;
    }

    public function setIp($ip){
        $this->ip = $ip;
    }
}

$newPhone = new phone();
$newPhone->setIp(20);
echo $newPhone->getIp();

// note : the diffence between public and private is:
// the private we just can access to it from the class 
// the public we can access to it from any where 