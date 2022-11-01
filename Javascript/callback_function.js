function call_back(someNumber)
{
    return someNumber*2;

}



function main(randomNumber, shouldcall, callBack)
{
    let result= randomNumber;

    if( shouldcall)
    {
            result= call_back(randomNumber);

    }

    return result;


}


console.log(main( 20, true , call_back  ) )

// This is the example of callback function. So what we are doing is that, we are passing ddown the function. 
// The reason why we are doing is that there maybe in some case that we may need to use the function in some other page. 
// We can write this callback functions in many different ways. Some of the examples are given below-

console.log(main( 20, true, (num)=>{ return num*2 } ));

// The third argument is one of the ways we can declare a function. 
// We can write in a much simpler form. 

console.log(main( 20, true, num=>num*2 ));

// To write it in the functional form , we can do the following-
console.log(main( 20, true, function( num )
{
return num*2;

} ))


// This call back functions can be used during the map calls. 

const arr=[1,2,3,4];

const arr2=arr.map( (num)=>{  // This map funciton works as a duplicate of for loop. 
    return num*2;
} )

console.log(arr2)


