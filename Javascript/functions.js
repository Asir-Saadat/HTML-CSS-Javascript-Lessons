// These are functions

function func(a, b)
{
    return a+b;

}


console.log(func(1,2));

// Whatever we pass in is called arguments and whatever we get in the function is called parameters.
// Now we can write function in two different ways. The one we just showed over and the new one, where we assign the function to some variable. 

const func2= function()
{
    console.log("This is a different type of function");

}

func2();

// There is another way to write functions . The details are given below. This is known as arrow function-
const arrowFunction = ()=>{

    console.log("This is an arrow function");
}

arrowFunction();

// We can also allow functions inside an object. 
function func3()
{

    console.log("This is a function inside an object");

}


let object ={

    param1:20,
    param2:func3(),

}


object.param2; // So we just assigned the function to a parameter of an object. 







