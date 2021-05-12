
// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными. 
//  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в 
// формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, 
// то выводить их как 00.
// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
// Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и
//  возвращает в виде строки «чч:мм:сс».
// Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, 
// которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
//  При выполнении задания используйте функции из предыдущих 2-х заданий:
// переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// Написать функцию, которая принимает 2 числа и возвращает -1,
// если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function twoNmbrs(){
    const a=document.getElementById("first_nmbr1").value,
        b=document.getElementById("first_nmbr2").value;
        let firstTask;
        if (a>b){
            firstTask='1';
        }else if(a<b){
            firstTask='-1';
        }else{
            firstTask='0'
        }
    document.getElementById("firstTask").innerHTML = firstTask;
}
//gotov

// Написать функцию, которая вычисляет факториал переданного ей числа.
function fucktorial(){
    // debugger;
    const n=parseInt(document.getElementById("sec_nmbr1").value);
    if(n!=0 && !isNaN(n)){
        let secondTask = 1,
            i = 1;
        while(i<=n){
            secondTask = i * secondTask;
            i++;
        }
        document.getElementById("secondTask").innerHTML = secondTask;
    }else if(n==0){
        secondTask = 1;
        document.getElementById("secondTask").innerHTML = secondTask;
    }else{
        alert("Enter number!");
    }
}
//gotov

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.

function oneNmbr(){
    let k,l,m,thirdTask;
    k=document.getElementById("thi_nmbr1").value;
    l=document.getElementById("thi_nmbr2").value;
    m=document.getElementById("thi_nmbr3").value;
    thirdTask=parseInt(k+l+m);
    document.getElementById("thirdTask").innerHTML = thirdTask;
}
//gotov

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function squre(){
    debugger;
    let a=parseInt(document.getElementById("fourth_nmbr1").value),
        b=parseInt(document.getElementById("fourth_nmbr2").value),
        fourthTask;
    if(a>=0&b>=0){
        fourthTask= a*b;
    }else if(a>0&isNaN(b)){
        fourthTask=Math.pow(a,2);
    }else if(isNaN(a)&b>0){
        fourthTask=Math.pow(b,2);
    }else{
        alert("Wrong Data!");
    }
    document.getElementById("fourthTask").innerHTML = fourthTask;
}
//gotov

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.
// Запросить у пользователя число и вывести все делители этого числа.
function allDel(){
    // debugger;
    const custom_nmbr = parseInt(document.getElementById("fifth_nmbr1").value);
    let rez = '';//зделать массивом и пушить туда все делители с фора
    for(let i=1;i<custom_nmbr;i++){
        if(custom_nmbr%i==0){
            rez += i+'; ';
        }
    }
    document.getElementById("fifthTask").innerText = rez;
}
//написать функцию, которая вызывает функцию поиска всех делителей