"use strict";

/*alert("Hello world!");

confirm("Yes or No");*/
// promt("enter your name");
// var a = 5;
//  - не делаем
// const Pi = Math.PI;
// Pi = 3;
// let a = 5,
//     b = 6,
//     s = a+b;
// a = 3;
// alert(s);
// const func = ()=>{return false;};
// let num = 1,
//     float = 1.2,
//     str = 'Hello',
//     is_check = true,
//     n = null,
//     u,
//     unf = undefined,
//     arr = [],
//     obj = {};
//     // let myArr = new Array();
// console.log(typeof num);
// console.log(typeof float);
// console.log(typeof str);
// console.log(typeof is_check);
// console.log(typeof n);
// console.log(typeof u);
// console.log(typeof unf);
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof func);
// const answer = confirm("Yes or No");
// console.log(answer);
// const userName = prompt("Enter Your Name");
// console.log(userName, typeof userName);
// функции
//  function myFunc(){
//      alert("Hello");
//  }
//  myFunc();
// function mySum(a, b){
//     const s = a + b;
//     alert(s);
// }
// практика
function myPow() {
  var number = parseInt(prompt("Enter number")),
      // rez = number*number;
  rez = Math.pow(number, 2);
  alert(rez);
}

function myAvg() {
  var number1 = parseInt(prompt("Enter number"));
  var number2 = parseInt(prompt("Enter number"));
  rez = (number1 + number2) / 2;
  alert(rez);
}

function myConv() {
  var k = 0.621371;
  var number = parseFloat(prompt("Enter number")),
      rez = k * number;
  alert(rez);
}

function myCalc() {
  var number1 = parseInt(prompt("Enter number"));
  var number2 = parseInt(prompt("Enter number"));
  var mn = number1 * number2,
      slp = number1 / number2,
      slg = number1 + number2,
      mns = number1 - number2;
  alert("Умножение = " + mn + "; деление = " + slp + "; Сложение = " + slg + "; Вычесление = " + mns);
}

function findX() {
  var a = parseInt(prompt("Enter number"));
  var b = parseInt(prompt("Enter number")),
      x = -1 * b / a;
  alert("a * x + b = 0, a = ".concat(a, ", b = ").concat(b, ", x = ").concat(x));
}

function timeToMidn() {
  var hours = parseInt(prompt("Enter hours"));
  var minutes = parseInt(prompt("Enter minutes")),
      toMidn = 24 - (hours + 1) + ":" + (60 - minutes);
  alert("\u0414\u043E \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u0433\u043E \u0434\u043D\u044F \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C : ".concat(toMidn));
}

function midleNum() {
  var number1 = parseInt(prompt("Enter first number"));
  rez = parseInt(number1 % 100 / 10);
  alert("".concat(number1, " midle char ").concat(rez));
}

function lastToFirst() {
  var a = parseInt(prompt("Enter number")),
      rez = a % 10 * 10000 + parseInt(a / 10);
  alert("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E : ".concat(a, ", \u041C\u043E\u0435 \u0447\u0438\u0441\u043B\u043E : ").concat(rez));
}

function lastToFirstalt() {
  var a = prompt("Enter number"),
      arr_number = number.split('');
  alert(arr_number[4] + arr_number[0] + arr_number[1] + arr_number[2] + arr_number[3]);
}

function mySalary() {
  var number = parseFloat(prompt("Enter sale's sum"));
  var slry = 250,
      perc = 0.1;
  var rez = number * perc + slry;
  alert("\u0412\u0430\u0448\u0430 \u0437\u043F : ".concat(rez));
}