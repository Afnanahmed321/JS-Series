// converting the type.

// --- Case 1 - number to number ---
let score = 33
console.log(typeof score)
// output: number

// --- Case 2 - string to number ---
let score1 = "33"
let rscore1 = Number(score) // TO CONVERT WE USE FIRST LETTER AS CAPITAL LETTER
console.log(typeof rscore1)
//output: number

// --- Case 3 - NaN case ---
let score2 = "33abc"
let rscore2 = Number(score2)
console.log(typeof rscore2)
// output: number --- it is converted to number, but not correct as there are letters too!---
console.log(rscore2)
// output: NaN --- the actual output

// --- Case 4 - null case
let score3 = null
let rscore3 = Number(score3)
console.log(rscore3)
console.log(typeof score3)
// output: 0

// --- Case 5 - undefined case
let score4 = undefined
let rscore4 = Number(score4)
console.log(rscore4)
// output: NaN

// --- Case 5 - Boolean case
let score5 = true
let rscore5 = Number(score5)
console.log(rscore5)
// output: 1 for true and 0 for false

// ---------------------

// Number to Boolean case
let loggedIn = 1
let loggedInBoolean = Boolean(loggedIn)
console.log(loggedInBoolean)

/* 
if 1=>true; 0=>false
if empty string: "" => false
if valued string: "any value" => true
*/

