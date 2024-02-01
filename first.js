// for-of loop
// let str="DipakDeshmukh";
// let size=0;

// for(let val of str){
//     console.log("val=",i);
//     size++;
// }
// console.log("size of string is : ",size);
//for in loop
// let student = {
//     name: "dipak deshmukh",
//     age: 23,
//     cgpa: 7.5,
//     isPass: true
// };
// for(let key in student){
//     console.log("key=",key, "value=", student[key]);
// }

//practice 1
// for(let num=0;num<=100;num++){
//     console.log("num=",num);
// }

//for even number 0 2 4 .....
// for(let num=0;num<=100;num++){
//     if(num%2===0){
//         console.log("num=",num);
//     }
// }
//for odd number

// for(let num=0;num<=100;num++){
//     if(num%2!==0){
//         console.log("num=",num);
//     }
// }
//Q.2 
// let gameNum=25;
// let userNum = prompt("Guess the game number : ");

// while(gameNum!==gameNum){
//    userNum=prompt("you entered wrong number, Guess again : ");
// }
// console.log("congratulation you entered the right number");
//strings in js
// let str="apna collage";
//console.log(str[8]);//

//template literals use 
// let obj={
//    item:"pen",
//    price:10,
// };
// let output= `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);
// let specialString =`this is a template literal ${1+2+3}`;
//console.log(specialString);
//...Que...
let fullName=prompt("enter your fullname without spaces");

let userName="@"+fullName+fullName.length;
console.log(userName);