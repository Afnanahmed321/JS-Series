/* 
--- A. Primitive ---
Some of the datatypes in js are:-
1. number
2. string
3. boolean
4. null=>standalone value - undefined aur null alag alag cheez hai
--- null sirf khaali hai ---
5. symbol - Will be seen in react. It is used for uniqueness
6. bigInt
7. undefined
*/

//  B. Non-primitive(reference)
// Arrays, objects and functions


console.log(typeof null) // null ka type "OBJECT" hai
console.log(typeof undefined) // undefined ka type "UNDEFINED" hi hai

let userID = symbol('123')
let anotherUserID = symbol('123')

// the above 2 lines are different even their values passed in symbol are same

// -------------- Non primitive

// Arrays
const myArray = ["hello","hi"]

// objects
const myObject = {
    Name : "afnan",
    age : 18, 
}

