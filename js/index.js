// //practice
// let country = 'India';
// let continent = 'asia';
// let population = 110; 
// let isIsland = true;
// let language = 'English';
//     language='Hindi';
// const BirthYear =  1990;
//       //BirthYear = 2001;

// console.log(country,  continent, population);
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof language);
// console.log(typeof continent);
// console.log(language)
// console.log(BirthYear)

// console.log(population / 2); 
// population++;
// console.log(population);
// console.log(population > 60);
// console.log(population < 60);
// console.log(population + 60);
// console.log(population * 2);

// const description = country + ' is in ' + continent + " and it's " + population + ' million people speak ' + language;
// const descriptionnew = `${country} is in ${continent} and it's ${population} million people speak ${language}`
// console.log(description);
// console.log(descriptionnew)
// console.log(`we can write strings like this it's preety easier ... `);
// console.log('multiline \n\ string \n\ here');
// console.log(`but in ES6  
// we write multiple line 
// like this❤😍`)

// const age = 15;
// const YearLeft = 18 - age;

// if(age >= 18){
//  console.log(`you are eligible for voting`);
// }else{
//   console.log(`you have to wait more ${YearLeft} years 😒👍`); 

// }


// let century;
// if(BirthYear <= 2000) {
//     century = 20;
//     console.log(`person is born in ${century}th century`);
// }else{
//     century = 21;
//     console.log(`person is born in ${century}st century`);
// }

// const BirthDate = '25';
// console.log(BirthDate)
// console.log(Number(BirthDate));
// console.log(String(56));

// //truthy and falsy value

// console.log(Boolean(0))
// console.log(Boolean(NaN))
// console.log(Boolean('dhruv'))
// console.log(Boolean({}))
// console.log(Boolean(''))

// // prompt("whats your number");
// // alert("this is an alart");

// switch case
// const Day = 'tuesday';

// switch(Day) {
//     case 'monday':
//         console.log('hey its monday');
//     break;
//     case 'tuesday':
//     case 'wednesday':
//         console.log('we are going to plan for a weekend');
//     break;
//     default :
//     console.log('kindly enter valid input')
//     break;    
// }

// // similer in condition if else
// if(Day === 'monday'){
//     console.log('hey its monday');
// }else if (Day === 'tuesday' || Day === 'wednesday') {
//     console.log('we are going to plan for a weekend');
// }else {
//     console.log('kindly enter valid input')
// }


// // ?(ternary) oprator
// const Age = 25;

// Age >= 18 ? console.log('i am adult now') : console.log('play with toy');

//functions

// //function expression
// function calcAge(BirthYear, name){
//  const person = `${name} is ${2022 - BirthYear} years old`
//  return person;
// }

// const fullage = calcAge(1991, 'Dhruv');
// console.log(fullage);
// console.log(calcAge(1989, 'Rohan'));

// function fruitprocessor(apple, orange) {
//     const juice = `This juice is made with ${apple} Apple and ${orange} Oranges.`
//     return juice;
// }
// const juicedetails = fruitprocessor(15, 20);
// console.log(juicedetails);


// //function Declaration
// const AgeCalc = function(BirthYear) {
//     const Age = 2022 - BirthYear;
//     return Age;
// }
// console.log(AgeCalc(1978));


// //arrow function 
// const calcAge1 = BirthYear => 2022 - BirthYear ;

// const Age1 = calcAge1(1988);
// console.log(`fetching age by arrow fuction age is ${Age1}`);
// console.log( `this the other way to print the age ${calcAge1(1991)}`);

// //check how many years left for retaiment of dhiman  

// const RetaimentAge = (BirthYear, Name) =>{
//     const Age2 = 2022 - BirthYear ;
//     const Retirment = 65 - Age2;
//     return `${Name} has ${Retirment} years left for Retairment`;
// }

// console.log(RetaimentAge(1988, 'Dhiman'));
// console.log(RetaimentAge(1978, 'Rohan'));

// //check eligblity 

// function voteEligblity(BirthYear, Name){
//     const Age3 = 2022 - BirthYear;

//     if(Age3 >= 18){
//         return ` ${Name} is eligible for Voting`;
        
//         }else {
//             return `${Name} is not eligible for voting`;        
//     }
// }

// console.log(voteEligblity(1988, 'sayanti'))

// //array

// let friends = ['Ram', 'Mohan', 'Sohan'];

// console.log(friends);
// console.log(friends.length);

// //add an element in last array
// friends.push('jay');
// console.log(friends);

// let newlength = friends.push('ravi');
// console.log(friends);
// console.log(newlength);

// //add an element in start
// friends.unshift('sam');
// console.log(friends);

// //remove an element 
// friends.shift();
// friends.shift();
// friends.pop();
// friends.pop();
// console.log(friends);

// //find the index number
// console.log(friends.indexOf('sam'));
// console.log(friends.indexOf('Sohan'));

// //object 

// const student = {
//     FirstName:'Rohit',
//     LastName: 'Sharma',
//     RollNum: 25,
//     BirthDate : 25,
//     age: 2022 - 1991,
//     friends: ['jhon', 'jay', 'ajit'],
// }

// console.log(student);

// //use of .dot notaion
// console.log(student.FirstName);

// //use of [bracket notaion]
// console.log(student['age']);


// //  const intrestedIn = prompt('chhose your prefrences between RollNum and age');

// //  //use of [bracket notaion]  with expression
// // console.log(student[intrestedIn])

// // //use of .dot notaion with expression
// // console.log(student.intrestedIn)

// // add extra object properties 

// student.location = 'kolkata';
// student['state'] = 'west bengal';

// console.log(student);

// console.log(`${student.FirstName}, live in ${student.location}, and he has ${student.friends.length},friends and his best friend is ${student.friends[2]}  `)

//loop
for(let res = 1; res<=10; res++){
    console.log(`its response from loop and number is ${res}.`)
}

//loop inside loop

// for(let exercise = 1; exercise <5; exercise++){
//     document.write(`---Exercise ${exercise} <br />`);

//     for(let chapter = 1; chapter < 4; chapter++){
//         document.write(`--chapter ${chapter}  <br />`)
//     }
// }


// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){                
//         document.write( i + " ")
//     }
//     document.write("<br/>")
// };


function buttonToggle(){
    let pt = document.getElementById('para')
    pt.classList.toggle('parachange')
}



let promise = new Promise((resolve, reject) =>{
    const a = "250";
    const b = 250;
   setTimeout(() => {       
        if(a==b){
            resolve('yes its equal');
        }else{
            reject('no its not')
        }
   },1000)
  });
  promise
  .then(function(data){
    console.log(data)
   })
   .catch(function(err){
        console.log(err)
   })

   console.log('this will print first')

   setTimeout(()=>{
        console.log('i wil print in 2nd row')
   },1500)


   let secondMax = function (arr) {     
        let max = Math.max.apply(null, arr); // get the max of the array
        arr.splice(arr.indexOf(max), 1); // remove max from the array
        return Math.max.apply(null, arr); // get the 2nd max
    };

    let arr = [20, 120, 111, 215, 54, 78]; // use int arrays 
    let max2 = secondMax(arr);
    console.log('2nd largest number',max2);



    let secondMin = function (arr) {     
        let min = Math.min.apply(null, arr); // get the min of the array
        arr.splice(arr.indexOf(min), 1); // remove max from the array
        return Math.min.apply(null, arr); // get the 2nd min
    };

    let arr2 = [20, 120, 111, 215, 54, 78]; // use int arrays 
    let min2 = secondMin(arr);
    console.log('2nd lowest number',min2);



//    const getdata = () => {
//         let url = "";
//         fetch(url)
//         .then((data)=>{
//             return data.json;
//         }).then((item)=>{
            

//         })
//    }


function btnLInk() {
    let elem = document.getElementById('dropdown')
        elem.classList.toggle('show')
}

