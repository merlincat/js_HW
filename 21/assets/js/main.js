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
function myPow(){
    let number = parseInt(prompt("Enter number")),
        // rez = number*number;
        rez= Math.pow(number, 2);
    alert(rez);
}
function myAvg(){
    let number1 = parseInt(prompt("Enter number"));
    let number2 = parseInt(prompt("Enter number"));
    rez = (number1 + number2)/2;
    alert(rez);
}
function myConv(){
    const k = 0.621371;
    let number = parseFloat(prompt("Enter number")),
    rez = k*number;
    alert(rez);
}
function myCalc(){
    let number1 = parseInt(prompt("Enter number"));
    let number2 = parseInt(prompt("Enter number"));
    let mn = number1*number2,
        slp = number1/number2,
        slg = number1 + number2,
        mns = number1 - number2;
    alert("Умножение = " + mn + "; деление = " + slp + "; Сложение = " + slg + "; Вычесление = " + mns);
}
function findX(){
    let a = parseInt(prompt("Enter number"));
    let b = parseInt(prompt("Enter number")),
        x = (-1*b)/a;
    alert(`a * x + b = 0, a = ${a}, b = ${b}, x = ${x}`);
}
function timeToMidn(){
    let hours = parseInt(prompt("Enter hours"));
    let minutes = parseInt(prompt("Enter minutes")),
        toMidn = 24 - (hours + 1) + ":" + (60 - minutes);
    alert (`До следующего дня осталось : ${toMidn}`);
}
function midleNum(){
    let number1 = parseInt(prompt("Enter first number"));
        rez = parseInt((number1%100)/10);
    alert(`${number1} midle char ${rez}`);
}
function lastToFirst(){
    let a = parseInt(prompt("Enter number")),
        rez = ((a%10)*10000) + parseInt(a/10);
    alert (`Ваше число : ${a}, Мое число : ${rez}`);
}
function lastToFirstalt(){
    let a = prompt("Enter number"),
        arr_number = number.split('');
       alert (arr_number[4] + arr_number[0] + arr_number[1] + arr_number[2] + arr_number[3]);
}
function mySalary (){
    let number = parseFloat(prompt("Enter sale's sum"));
    const slry = 250,
        perc = 0.1;
    let rez = number*perc + slry;
    alert (`Ваша зп : ${rez}`);
}