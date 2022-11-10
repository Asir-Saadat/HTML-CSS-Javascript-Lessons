
const arr=[1,2,3,5,6];

// what if we want to add the 4 in the middle of the array

arr.pop()
arr.pop()

console.log(arr);

arr.push(4)

console.log(arr);
// We can add more than one numbers. 

arr.unshift(0)// Here we are adding an element in the first portion of the array. 


console.log(arr)


// Now we will be looking into the slicing method. 

const copyarr= arr.slice();
console.log(copyarr)

// if we do copyarr===arr , then we will get the result as false.

// Now we can get a particular part of the array. 

const copyarr2= arr.slice(3)

console.log(copyarr2) // This gives us the string starting from index 3. 

// Now we will look into the slice method. 
var arr_3= [1,2,3,4,"oopps", 6,7];

tmep = arr_3.splice(4, 1, 4.5) // So, the ffirst parameeter indicates the position, the second parameter indicates how mnay elemnts I want to remove, the the replaced number
console.log(arr_3)


// How to get the index of the array

console.log(arr_3.indexOf(3))

// We can sue the callback function for accesing the aelemtn of the array. 
// The normal way would be 
for (var i=0;i <arr.length;i++)
{
    console.log(arr[i]);

}
// We can do this using other way around by using a callback fucntion. 
arr.forEach( arritem=>{

    console.log(arritem);

} )

