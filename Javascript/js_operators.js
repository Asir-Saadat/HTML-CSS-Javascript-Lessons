const result = 20+10/2
console.log(result) // we can use this operations in a variable. 

// To use the power
const a= 10**2;

console.log(a);

// To use ++ and -- , this are increment operator and decrement operator.
let b=0;
b++;

let c=1;
c++;

console.log(b, c);
// This are arithmatic operators. 


// Now we are using assignment operators. 
// These are = , += , -= , *= , /= , we will not be needing most of it. 

//Now we wil talk about comparison operators. 

const wow= 10 // This is assigning a value

console.log(20==20);// This will give us True as a result. 

console.log(20=='20');// This will also give us true as a result. 

console.log(20===20);// But this will give us a false result. 

// The real difference is that, for triple equals, we are not only comparing values, but also the datadypes. 
// We can also do the same for != and !==


// But there are some weird aspects about operators. We cannot compare objects and arrays. 

const arr1=[1, 2,3];

const arr2=[1, 2,3];

// if we compare, it will return false. The same goes for obejects as well. 

// FOr ternary operator

const temp= 10===10?'values match':'values not match';// If ti is true, then left side, else it is right side. 


//Lastly, we use the operator && , || , which is and, or 
// we can use '!' to reverse the boolean value. 

