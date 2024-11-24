<?php

/* 1. Union Types (PHP 8.0) */

// In PHP 7, we could determine the data type of a class.
// In PHP 8, we can add multiple types to a class.

class FetchData {
    public function data(int|string $data) {
        return $data;
    }
}

$getData = new FetchData();
echo $getData->data('hi'); // Output: hi

// Example with optional and return type
class FetchData2 {
    public function data(?int $data): int {
        return $data;
    }
}

$getData = new FetchData2();
echo $getData->data(5); // Output: 5


/* 2. Named Parameters (PHP 8.0) */

class Animals {
    public function dogs(string $dogName) {
        return $dogName;
    }

    public $dogTypes = ['axo', 'resx', 'dsk'];
}

$newAnimal = new Animals();
echo $newAnimal->dogs(dogName: 'kit'); // Output: kit

// Accessing directly from the function object
class Animals2 {
    public function dogs($dogName) {
        return $dogName;
    }
}

echo (new Animals2())->dogs('rex'); // Output: rex


/* 3. Match Expressions (PHP 8.0) */

// In PHP 7, we used switch. In PHP 8, we use match expressions.

$name = 'hadi';
$message = match($name) {
    "hadi", "ahmad" => "male",
    20 => "age",
    "sara" => "female",
    default => "the name is strange",
};

echo $message; // Output: male


/* 4. Constructor Property Promotion (PHP 8.0) */

// In PHP 7:
class Phone2 {
    private $ip;
    private $mac;

    public function __construct($ip, $mac) {
        $this->ip = $ip;
        $this->mac = $mac;
    }
}

// In PHP 8:
class Phone {
    public function __construct(private $ip, private $mac) {}
}


/* 5. Mixed Type (PHP 8.0) */

// PHP 8 introduces a new data type called "mixed," which can contain any data type.

class FetchData3 {
    public function data(mixed $data) {
        return $data;
    }
}

$getData = new FetchData3();
echo $getData->data('hi');  // Output: hi
echo $getData->data(1);     // Output: 1


/* 6. Null Safe Operator (PHP 8.0) */

// In PHP 8, we don't need to write if ($condition !== null). We use the null safe operator (?).

class FetchData4 {
    public function data(mixed $data) {
        return $data;
    }
}

$getData = new FetchData4();
echo $getData?->data(null); // Output: null


/* 7. Create DateTime Objects from Interface (PHP 8.0) */

// PHP 8 allows you to create DateTime objects directly from the DateTimeInterface interface.
$dateTime = DateTime::createFromInterface($dateTimeInterface);


/* 8. Stringable Interface (PHP 8.0) */

// In PHP 8, we can make an object convertible to a string.

class FetchData5 {
    public function __toString(): string {
        return 'hii';
    }
}

$getData = new FetchData5();
echo $getData; // Output: hii

function test(string|stringable $data) {
    return $data;
}

test($getData);


/* 9. str_contains (PHP 8.0) */

// PHP 8 introduces the str_contains function to check if a word exists in a string.

$phrase = "i love php";
$word = "php";
echo str_contains($phrase, $word); // Output: 1


/* 10. str_starts_with (PHP 8.0) */

// PHP 8 introduces the str_starts_with function to check if a string starts with a word.

$phrase = "i love php";
$word1 = "i";
$word2 = "I";
echo str_starts_with($phrase, $word1); // Output: 1
echo str_starts_with($phrase, $word2); // Output: 0


/* 11. str_ends_with (PHP 8.0) */

// PHP 8 introduces the str_ends_with function to check if a string ends with a word.

$phrase = "i love php";
$word = "php";
echo str_ends_with($phrase, $word); // Output: 1


/* 12. str_contains (PHP 8.0) */

// Another example of str_contains usage.
$phrase = "i love php";
$word = "php";
echo str_contains($phrase, $word); // Output: 1


// For more information, read the article: https://stitcher.io/blog/new-in-php-8


/* PHP 8.1 Features */

/* 1. Fibers (PHP 8.1) */

// Fibers allow for green threading and can help with asynchronous programming.

$fiber = new Fiber(function (): void {
    echo 'Fiber started!';
    Fiber::suspend();
    echo 'Fiber resumed!';
});

echo 'Before Fiber';
$fiber->start();
echo 'After Fiber';
$fiber->resume(); // Output: Before Fiber Fiber started! After Fiber Fiber resumed!


/* 2. Array unpacking with string keys (PHP 8.1) */

// In PHP 8.1, array unpacking with string keys is now supported.

$array1 = ['a' => 1, 'b' => 2];
$array2 = ['c' => 3];
$array3 = [...$array1, ...$array2];

print_r($array3); // Output: Array ( [a] => 1 [b] => 2 [c] => 3 )


/* PHP 8.2 Features */

/* 1. Disjunctive Normal Form (DNF) Types (PHP 8.2) */

// PHP 8.2 introduces DNF types, allowing for more complex type declarations.

function checkValue(int|string|null $value): void {
    if (is_int($value)) {
        echo "Integer value: $value";
    } elseif (is_string($value)) {
        echo "String value: $value";
    }
}

checkValue('Hello'); // Output: String value: Hello


/* PHP 8.3 Features */

/* 1. Performance improvements (PHP 8.3) */

// PHP 8.3 brings performance improvements, including optimizations for array operations.

$array = [1, 2, 3];
foreach ($array as $item) {
    echo $item; // Output: 123
}

/* PHP 8.4 Features */

/* 1. Readonly Classes (PHP 8.4) */

// PHP 8.4 introduces readonly classes, allowing the entire class's properties to be read-only.

readonly class Product {
    public string $name;
    public float $price;

    public function __construct(string $name, float $price) {
        $this->name = $name;
        $this->price = $price;
    }
}

$product = new Product('Laptop', 999.99);
echo $product->name; // Output: Laptop


