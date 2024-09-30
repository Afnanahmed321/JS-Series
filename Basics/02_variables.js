/* const keyword is used to make a const variable,
because not to change the value, and accountId is variable name which stores the value
--- The value of const variable cannot be changed ---
*/
const accountID = 12345

// let key word is used because, the value of accountEmail can be changed 
let accountEmail = "afnan@gmail.com"

// var is also used to create a variable
var accountPassword = "123456"

/* 
Note: const and let is prefered to be used instead of var,
due to block scope issue in var
*/

// variable can be declared without any keyword, but bad programming practice
accountPlace = "Bangalore"

// An undeclared variable has undefined value
let accountState;

// To print the values
console.log(accountID)

// Another representation of output in the form of table
console.table([accountID, accountEmail, accountPassword, accountPlace, accountState])

