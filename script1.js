// 'use strict';

// function calcAge(birthYear){
//     const age = 2021- birthYear;
//     console.log(firstName);

//     function printAge(){
//         const output = `${firstName}, your are ${age}, born in ${birthYear}`;
//         console.log(output);
//         if(birthYear>= 1981 && birthYear<=1996)
//         {
//             var millinear = true;
//             //  creating the New variable with same name as outer scope's variable
//             const firstName='jannu';
//             // REassingning outer scope's variable 
//             output= 'NEW OUTPUT!';
//             const str = `Oh, and your a millinear,${firstName}`;
//             console.log(str);

//             function add(a,b){
//                 return a+b;
//             }
           
//         }
//         console.log(millinear);
//         //  console.log (add(2,3));
        console.log(output);
    }
    printAge();

    return age;
}

const firstName = 'venkatesh';
calcAge(1991);


//  HOisting and TDZ 

//  variables

console.log(me);

// console.log(job);
// console.log(year);

var me = 'venkatesh';
let job = 'trainee';
const year= 1998;

//  functions
console.log(addDecl(2,3));
// console.log(addExpr(2,3));
console.log(addArrow);
// console.log(addArrow(2,3));

function addDecl(a,b){
    return a+b;
};
const  addExpr= function(a,b){
    return a+b;
};
var addArrow =(a, b)=>a+b;

//  example
console.log(undefined);

if(numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart(){
    console.log ('All products detailed');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// this keyword

console.log(this);

const calcAge = function(birthYear){
    console.log(2021-birthYear);
    console.log(this);
};
calcAge(1998);
const calcAge = (birthYear)=>{
    console.log(2021-birthYear);
    console.log(this);
};
calcAgeArrow(1980);

const venkatesh = {
    year:1998,
    calcAge:function () {
         console.log(this);
         console.log(2021-this.year);
    },
};
venkatesh.calcAge();

const matlida ={
    year:2017,
}; 

matlida.calcAge= venkatesh.calcAge;
matlida.calcAge();

const f = venkatesh.calcAge;
f();

//  Regular Functions Vs.Arrow Functions

var firstName = 'Matilda';

const venkatesh = {
    firstName : 'jannu',
    year:1998,
    calcAge:function () {
        console.log(this);
        console.log(2037-this.year);
        // solutiion 1
        const self = this;
        const isMillenar = function () {
            console.log(self.year >= 1981 && self.year <= 1996 );
            
        };
        //  solution 2
        const isMillenar = () =>{
            console.log(this);
            console.log(this.year >= 1981 && this.year <= 1996);
        };


        isMillenar();
        
    },

    greet: ()=> {
        console.log(this);
        console.log(`Hey ${this.firstName}`);

    },
};
venkatesh.greet();
venkatesh.calcAge();

//  arguments keyword

const addExpr = function(a,b){
    console.log(arguments);
    return a+b;
};
addExpr(2,5);
addExpr(2,5,8,12);

var addArrow= (a,b) => {
    console.log(arguments);
    return a+b;
}
addArrow(2,5,8);


//  primitive 

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(old.Age);


// reference typs (object) 
const me ={
    name:'venkatesh',
    age:23,
};
const friend = me;
friend.age = 27;
console.log('friend:', friend);
console.log('Me', me);



