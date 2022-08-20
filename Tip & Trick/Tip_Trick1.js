
/*

// link: https://medium.com/@zac_heisey/objects-vs-arrays-42601ff79421#:~:text=Both%20objects%20and%20arrays%20are%20considered%20%E2%80%9Cspecial%E2%80%9D%20in%20JavaScript.,store%20a%20list%20of%20values.
// link: https://www.geeksforgeeks.org/difference-between-array-and-array-of-objects-in-javascript/

Array

1.	Arrays are best to use when the elements are numbers.	
2.	The data inside an array is known as Elements.	
3.	The elements can be manipulated using [].  	
4.	The elements can be popped out of an array using the pop() function.	
5.	Iterating through an array is possible using For loop, For..in, For..of, and ForEach().	


Array of objects

1. objects are best to use when the elements strings (text).
2. The data inside objects are known as Properties that consist of a key and a value.
3. The properties can be manipulated using both .DOT notation and [].
4. The keys or properties can be deleted by using the delete keyword.
5. Iterating through an array of objects is possible using For..in, For..of, and ForEach().



// Basic object syntax
var object = {
  key: 'value'
};
// Example 'person' object
var person = {
  name: 'Zac',
  age: 33,
  likesCoding: true
};



// Basic array syntax
var vacationSpots = ['Tokyo', 'Bali', 'Mexico City', 'Vancouver'];

*/


// Array
var myArr = [1, 2, 3, 4, 5];

// Iterating through loop
for (var i = 0; i < myArr.length; i++) {
	console.log(myArr[i]);
}

// Pop an element from array
myArr.pop();
console.log("after using pop() " + myArr);


/*

1
2
3
4
5
after using pop()1,2,3,4

*/





// Array of objects

console.log("\n\n\n")

// Array of objects
var myObject = {
    jhon: {
        name: 'jhon',
        age: 12,
        gender: 'male'
    },
    rita: {
        name: 'rita',
        age: 32,
        gender: 'male'
    }
};

// Using DOT notation
console.log('using DOT:' + myObject.jhon.gender);

// Using [] notation
console.log('using []:' + myObject.rita['age']);

// Using delete keyword
delete myObject.rita;

// Iterating using for..in loop
for (var key in myObject) {

    // logs values in myObject
    console.log(myObject[key]);
}


/*

using DOT:male
using []:32
{ name: 'jhon', age: 12, gender: 'male' }

*/