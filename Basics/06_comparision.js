// console.log(2>3)
// console.log(2<3)
// console.log(2<=3)
// console.log(2>=3)
// console.log(2!=3)

// --- Interesting cases ---
// console.log("2">1) 
// console.log("2"<1)
// Here the comparison works differently. Comparison operator >,< first it converts to number and then compare

// Cases as above - null case
console.log(null>0) // here null is converted to 0
console.log(null<0)  // here null is converted to 0
console.log(null==0) // here null is not converted to 0
console.log(null<=0) // here null is converted to 0
console.log(null>=0) // here null is converted to 0

// undefined case 
console.log(undefined>0)
console.log(undefined<0)
console.log(undefined<=0)
console.log(undefined==0)
// above 3 outputs are false

// === strict check case
console.log("2"===2)
// Here === checks the value and the datatype as well

/*
Note: 
1. >,< comparision works differently
2. == and ==== comparision works differently from > and < operators
3. Avoid using the null and undefined cases
*/