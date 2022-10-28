// We can decalre the variable and assign , or we can do both together. 
// To assign at once, we can use the following way-

const a=10;
let b= 20;
var c= 30;

// Here , we use const so that we do not have to change the value
// We use let so that we can re assign the values. 
// We use var , but this is actually old javascript. 

// If we wan to declare and assign , we do the following, we cannot use it for const.

let variable;
variable=10;

console.log(variable);

// Do declare list , we can do the following

const arr=[10, 'I am a boy', [2, 3]];


// I can get the type of any variables. 

console.log(typeof(arr));

// To convert any string to number-

const str='10';
const new_num= Number(str);


// How to declare Object

const objectVariable= {
prop1:10,
prop2:20,
}

console.log(objectVariable.prop1);


// How to declare a function 
const call= function()
{

    return 10;

}


console.log(call())




