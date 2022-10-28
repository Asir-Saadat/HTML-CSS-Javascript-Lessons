// Create boolean variable and set it true
const bool= true;

// Create a string variable called 'myString' and set it to true
const myString='hello World';

// Create a number variable and set it to 20, which is called FirstNumber
const FirstNumber=20;

// Create second variable and set it to 20
let second_var=20;

// Reassign the second_var
second_var=80;

//create an array and put bool at index 0 and mystring at index 1
const arr=[bool, myString];

//create an object called myobject and assign my array to property called first property and the sim of furstnumber and secondnumber toa property called sumproperty

const myobject=
{
    firstProperty:arr,
    sumproperty: FirstNumber+second_var,
}


//print myobjest to the console
console.log(myobject);

//print sumproperty of myobject
console.log(myobject.sumproperty)

console.log(myobject.firstProperty[0])

