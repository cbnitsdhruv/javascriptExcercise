console.log('array methods practice js');


// 1). simply print the array in string 
let fruits = ["Banana", "apple", "papya", "graps"];
let mixedArr = ["guava", "Rohan", 1, 5, 6,];
let nestedArr = ["guava", "Rohan", "apple", "papya", [1, 3, 9,]];


//print with toString method
//printFruit = fruits.toString();
console.log('print Fruits :', fruits.toString());

//print with spread oprator
console.log('spread oprator:', ...mixedArr)


/***************************************************************************************************************/

//2). flataan the nested array

console.log('Array.flat :', nestedArr.flat());
console.log('Array.flat next :', ...nestedArr.flat());

/***************************************************************************************************************/

//3). array slice method
console.log('orignal Array', fruits);
let arrSlice = fruits.slice(0, 3);
console.log("Array Slice : ", arrSlice);

// Array.slice method gives us selected elements from an array 




/***************************************************************************************************************/



//4). array splice methode

console.log('orignal Array', fruits);

let arrSplice = fruits.splice(2, 2);
console.log("Array Splice", arrSplice);

fruits.splice(2, 0, "orange", "litchi");
console.log('Adding in Array', fruits);

// Array Splice  methodes remove the element from given range and its accept addition of elemnts also in it's 2nd parameter , it modifies the orignal array


/***************************************************************************************************************/


//5). array pop method 
console.log('orignal mixed Array : ', mixedArr);
mixedArr.pop();
console.log('Array Pop', mixedArr);

// pop method Removes last element from array


/***************************************************************************************************************/


//6). array push method
mixedArr.push("orange");
console.log('array push : ', mixedArr);

//array.push method add a new element in end of an array

/***************************************************************************************************************/

//7). array shift method 
console.log('orignal mixed Array : ', mixedArr);
mixedArr.shift();
console.log('array shift : ', mixedArr);
//array.shift method removes an element in the start of an array


/***************************************************************************************************************/

//8). array unshift method   
mixedArr.unshift("berry");
console.log('Array unshift', mixedArr);
// array.unshift method add an element in start of array


/***************************************************************************************************************/

//9). array filter method 

const ages = [18, 28, 2, 13, 8, 9, 17, 122, 65, 96];

console.log("array filter", ages.filter(checkForVote));

function checkForVote(age) {
    return age >= 18;
}


/***************************************************************************************************************/

//10). array sort

//sorting in accending order
console.log("array sort accending", ages.sort( (a, b) => {
    return a - b;
}));

//sorting in decending order

console.log("array sort decending", ages.sort(descShort))

function descShort(a, b) {
    return b - a
}

/***************************************************************************************************************/

//11). array concate

let concateArr = ages.concat(fruits, mixedArr);
console.log("concate Array :", concateArr);

//array.concate joins the multiple array in single array

/***************************************************************************************************************/
//12). delete method 
// delete concateArr[8];
// console.log('delete array : ', concateArr)

//13). find array length , length is a property of array its not method 

console.log("array length", concateArr.length);

/***************************************************************************************************************/
//14). find the duplicate in array 

const duplicatedArray = [1, 2, 5, 4, 7, 2, 5, 4, 3, 6,];

const findDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] == sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}


console.log(`The duplicates in ${duplicatedArray} are ${findDuplicates(duplicatedArray)}`);

// 2nd method to find the duplicate elements from array
let duplicateArr = duplicatedArray.filter((value, index) => {
    return duplicatedArray.indexOf(value) !== index;
});

console.log("these are the duplicate elements", duplicateArr);

/***************************************************************************************************************/


//15). remove dupliacte array and print unique array 

let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

//method 2nd to find the unique elements from array
let uniqueArray = chars.filter((value, index) => {
    return chars.indexOf(value) === index;
});

console.log("method 1",uniqueChars);
console.log("method 2",uniqueArray);


/***************************************************************************************************************/



//16). find the 2nd min and 2nd max an array

let secondMax = (arr) => {
    let max = Math.max.apply(null, arr); // get the max of the array
    arr.splice(arr.indexOf(max), 1); // remove max from the array
    return Math.max.apply(null, arr); // get the 2nd max
};

let arr = [20, 120, 111, 215, 54, 78]; // use int arrays 
let max2 = secondMax(arr);
console.log(`2nd largest number in ${arr} => is ${max2}`);



let secondMin = function (arr) {
    let min = Math.min.apply(null, arr); // get the min of the array
    arr.splice(arr.indexOf(min), 1); // remove max from the array
    return Math.min.apply(null, arr); // get the 2nd min
};

let arr2 = [20, 120, 111, 215, 54, 78]; // use int arrays 
let min2 = secondMin(arr2);
console.log(`2nd lowest number in ${arr2} => is ${min2}`);



/***************************************************************************************************************/




