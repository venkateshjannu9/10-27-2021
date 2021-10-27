// Create a function that takes an array containing only numbers and return the first element.
function getFirstValue(arr) {
	
     let firstElement = arr[0];
       return firstElement;
   }
   console.log (getFirstValue([1, 2, 3]));
   console.log(getFirstValue([80, 5, 100]));
   console.log(getFirstValue([-500, 0, 50]));

//    Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) 
{
 let array= [num1,num2];
 return array;
}
console.log(makePair(1, 2));
console.log(makePair(51, 21));
console.log(makePair(512124, 215));

// upvotes vs down votes 
function getVoteCount(upVotes,downVotes) 
{
	let VoteCounts = (upVotes+(-downVotes));
    return VoteCounts;
}
console.log(getVoteCount(13,0));
console.log(getVoteCount(2,33));
console.log(getVoteCount(132,132));

// Reverse an Array

function reverse (arr)
{
    return arr.reverse();
}
console.log(reverse([1,2,3,4]));

// Simple array manipulation

function incrementItems(arr) 
{
    let array1=[];
	for (let i = 0; i < arr.length; i++)
    {
     array1[i] = arr[i] + 1
    
    }
    return array1;
    
}
console.log(incrementItems([0,1,2,3]));

// can assign variables from arrays.
const arr = [1, 2, 3, 4, 5, 6];
let a= arr[0];
let b = arr[1];
console.log(a);
console.log(b);

// return last element
function getLastItem(arr) 
{
    let lastEl = arr[arr.length-1];
    return lastEl;
}
console.log(getLastItem([1,2,3]));
console.log(getLastItem(["cat","dog","duck"]));
console.log(getLastItem([true,false,true]));

// array indexing 
function valueAt(arr, i) 
{
    if (i >= arr.length)
    {
    return "Index >= Array length, therefore arr[i] is undefined.";
    } 
    else
    {
      return arr[Math.floor(i)];
    }
      
  };
  console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));
  console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));
  console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));
//   convert an array to string 

function arrayToString(arr) 
{
	const Array2 = [arr.toString()];
    return Array2;
}
console.log(arrayToString([1, 2, 3, 4, 5, 6]));
console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));

// concating two integer arrays
function concat(arr1, arr2) 
{
    let array3 = arr1.concat(arr2);
    return array3;
}
console.log (concat([1, 3, 5], [2, 6, 8]));
console.log(concat([7, 8], [10, 9, 1, 1, 2]));
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));

// _.drop, Drop the First Elements of an Array
function drop(arr, val) 
{
	let Elements1 = (arr.slice(val));
    return Elements1;
}
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3], 0));
//  find the index
function findIndex(arr, str) 
{
    let position =indexOf(str);
    return position;
}
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));