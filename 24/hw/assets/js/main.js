
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

// function twoNmbrs(){
//     const a=document.getElementById("first_nmbr1").value,
//         b=document.getElementById("first_nmbr2").value;
//         let firstTask;
//         if (a>b){
//             firstTask='1';
//         }else if(a<b){
//             firstTask='-1';
//         }else{
//             firstTask='0'
//         }
//     document.getElementById("firstTask").innerHTML = firstTask;
// }

function twoNmbrs2 (a, b){
    // debugger;
    if(a===b){
        return 0;
    }else{
        return a>b?1:-1;
    }
    // if(a>b){
    //     return -1;
    // }else if(a<b){
    //     return 1;
    // }else{
    //     return 0;
    // }
}
function twoNmbrs(firstNum, secNum){
    firstNum = document.getElementById("first_nmbr1").value,
    secNum = document.getElementById("first_nmbr2").value;
    let n = twoNmbrs2(firstNum, secNum);
    document.getElementById("firstTask").innerHTML = n;
}
//gotov

// Написать функцию, которая вычисляет факториал переданного ей числа.

// function fucktorial(){
//     debugger;
//     const n=parseInt(document.getElementById("sec_nmbr1").value);
//     if(n!=0 && !isNaN(n)){
//         let secondTask = 1,
//             i = 1;
//         while(i<=n){
//             secondTask *=i;
//             i++;
//         }
//         document.getElementById("secondTask").innerHTML = secondTask;
//     }else if(n==0){
//         secondTask = 1;
//         document.getElementById("secondTask").innerHTML = secondTask;
//     }else{
//         alert("Enter number!");
//     }
// }
function fucktorial2(sNmbr){
    let i = 1,
        factRez = 1;
        if(sNmbr ===0){
            return 1
        }else{    
            while(i<=sNmbr){
                factRez *=i;
            i++;
        }
    }
    return factRez;
}
function fucktorial (cusNmbr){
    cusNmbr = parseInt(document.getElementById("sec_nmbr1").value);
    secondTask = !isNaN(cusNmbr)?fucktorial2(cusNmbr):'Enter number!';
    document.getElementById("secondTask").innerHTML = secondTask;
}
    // if(!isNaN(cusNmbr)){
    //     secondTask = fucktorial2(cusNmbr);
    // }else if(cusNmbr===0){
    //     secondTask = 1;
    // }else{
    //     secondTask = 'Enter number!';
    // }

//gotov


// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. 
// Например: цифры 1, 4, 9 превратятся в число 149.
// function oneNmbr(){
//     let k,l,m,thirdTask;
//     k=document.getElementById("thi_nmbr1").value;
//     l=document.getElementById("thi_nmbr2").value;
//     m=document.getElementById("thi_nmbr3").value;
//     thirdTask=parseInt(k+l+m);
//     document.getElementById("thirdTask").innerHTML = thirdTask;
// }

function oneNmbr2(frst, sec, thir){
    return +(frst+sec+thir);
}
function oneNmbr(k,l,m){
    k=document.getElementById("thi_nmbr1").value;
    l=document.getElementById("thi_nmbr2").value;
    m=document.getElementById("thi_nmbr3").value;
    let thirdTask = oneNmbr2(k,l,m);
    // console.log(typeof(thirdTask));
    document.getElementById("thirdTask").innerHTML = thirdTask;
}


//gotov

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. 
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function squre(){
    // debugger;
//     let a=parseInt(document.getElementById("fourth_nmbr1").value),
//         b=parseInt(document.getElementById("fourth_nmbr2").value),
//         fourthTask;
//     if(a>=0&b>=0){
//         fourthTask= a*b;
//     }else if(a>0&isNaN(b)){
//         fourthTask=Math.pow(a,2);
//     }else if(isNaN(a)&b>0){
//         fourthTask=Math.pow(b,2);
//     }else{
//         alert("Wrong Data!");
//     }
//     document.getElementById("fourthTask").innerHTML = fourthTask;
// }

function squre2(dlina, shir){
    shir = typeof shir!=='undefined'? shir:dlina;
    dlina = typeof dlina!=='undefined'? dlina:shir;
    return dlina*shir;
}
function provSqr (a,b){
    let fourthTask;
    if(a>=0&&b>=0){
        fourthTask = squre2(a, b);
    }else if(a>0&isNaN(b)){
        fourthTask = squre2(a);
    }else{
        fourthTask = squre2(b);
    }
    return fourthTask;
}
function squre(a, b){
    debugger;
    a=parseInt(document.getElementById("fourth_nmbr1").value);
    b=parseInt(document.getElementById("fourth_nmbr2").value);
    let rezSqr = provSqr(a,b);
    document.getElementById("fourthTask").innerHTML = rezSqr + ' квадратных единиц';
}
//gotov

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.
// Запросить у пользователя число узнать все делители этого числа, потом их сумму и сравнить с этим числом


// function sumDel(){
//     debugger;
//     const custom_nmbr = parseInt(document.getElementById("fifth_nmbr1").value);
//     let rez = 0,//зделать массивом и пушить туда все делители с фора
//         itog;
//     for(let i=1;i<custom_nmbr;i++){
//         if(custom_nmbr%i==0){
//             rez+=i;
//         }
//     }
//     if(custom_nmbr===rez){
//         itog = `Yes, Your number is Perfect!`
//     }else{
//         itog = `NO!!!`
//     }
//     document.getElementById("fifthTask").innerText = itog;
// }
function isPerfect(someNmbr, suma_deliteley){
    return someNmbr===suma_deliteley?true:false;
}
function sumDel(chislo){
    let rezDel = 0;
    for(let i=1;i<chislo;i++){
        if(chislo%i===0){
            rezDel+=i;
        }
    }
    return rezDel;
}
function perfectNmbr (cstmrNmbr){
    cstmrNmbr = parseInt(document.getElementById("fifth_nmbr1").value);
    let suma_deliteley2 = sumDel(cstmrNmbr),
        itog = isPerfect(cstmrNmbr, suma_deliteley2);
    document.getElementById("fifthTask").innerText = itog;

}


// Написать функцию, которая принимает минимальное и максимальное значения для диапазона,
//  и выводит только те числа из диапазона, которые являются совершенными. 
//  Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 

function vyvozhyPerfectNmbrs(min, max){
    min = parseInt(document.getElementById("six_nmbr1").value);
    max = parseInt(document.getElementById("six_nmbr2").value);
    let a = [];
    for( let i=min; i<=max; i++){
        sumaD = sumDel(i);
        booleanAnsw = isPerfect(i, sumaD);
        if(booleanAnsw){
            a.push(i);
        }
    }
    document.getElementById("sixtTask").innerText = a;
}
// gotov


// Написать функцию, которая принимает время (часы, минуты, секунды) и 
// выводит его на экран в формате «чч:мм:сс».
// Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
// const addZero = n =>(n<10)?'0'+n:n;
// function menyayuNaVremya(n1,n2,n3){
//     debugger;
//     n1 = parseInt(isNaN(n1)?'0':n1);
//     n2 = parseInt(isNaN(n2)?'0':n2);
//     n3 = parseInt(isNaN(n3)?'0':n3);
//     const maxTime=59;
//     if(n3>maxTime){
//         n2+=Math.floor((n3/(maxTime+1)),0);
//         n3=parseInt(n3%(maxTime+1));
//     }
//     if(n2>maxTime){
//         n1+=Math.floor((n2/(maxTime+1)),0);
//         n2=parseInt(n2%(maxTime+1));
//     }
//     return `${addZero(n1)}:${addZero(n2)}:${addZero(n3)}`;
// }
// function parseTime(h, m ,s){
//     debugger;
//     h = parseInt(document.getElementById("seven_h").value);
//     m = parseInt(document.getElementById("seven_m").value);
//     s = parseInt(document.getElementById("seven_s").value);
//     let rez = menyayuNaVremya(h,m,s);
//     document.getElementById("sevenTask").innerText = rez;
// }
// gotov

const addZero = n =>(n<10)?'0'+n:n;
function menyayuNaVremya(arrN,maxTime=59){
    let n1=arrN[0],
        n2=arrN[1],
        n3=arrN[2];
    if(n3>maxTime){
        n2+=Math.floor((n3/(maxTime+1)),0);
        n3=parseInt(n3%(maxTime+1));
    }
    if(n2>maxTime){
        n1+=Math.floor((n2/(maxTime+1)),0);
        n2=parseInt(n2%(maxTime+1));
    }
    return `${addZero(n1)}:${addZero(n2)}:${addZero(n3)}`;
}
function isNumberNun(n1,n2,n3){
    debugger;
    n1 = parseInt(isNaN(n1)?'0':n1);
    n2 = parseInt(isNaN(n2)?'0':n2);
    n3 = parseInt(isNaN(n3)?'0':n3);
    return [n1,n2,n3];
}
function parseTime(h, m ,s){
    debugger;
    h = parseInt(document.getElementById("seven_h").value);
    m = parseInt(document.getElementById("seven_m").value);
    s = parseInt(document.getElementById("seven_s").value);
    let arrTime = isNumberNun(h,m,s); //arr
    let rez = menyayuNaVremya(arrTime);
    document.getElementById("sevenTask").innerText = rez;
}
// gotov

// Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.
function toSec(arrS){
    let h=arrS[0],
    m=arrS[1],
    s=arrS[2];
    return s+m*60+h*3600;  
}
function parseToSec(eight_h,eight_m,eight_s){
    eight_h = parseInt(document.getElementById("eight_h").value);
    eight_m = parseInt(document.getElementById("eight_m").value);
    eight_s = parseInt(document.getElementById("eight_s").value);
    let arrTime2 = isNumberNun(eight_h,eight_m,eight_s);
    let seconds = toSec(arrTime2);
    document.getElementById("eightTask").innerText = seconds;
}
//gotov


// Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
function printToFullTime(n){
    n = parseInt(document.getElementById("nine_nmbr1").value);
    const printTime = toFullTime(n);
    document.getElementById("nineTask").innerText = printTime;
}
function toFullTime(nineS){
    // nineS = parseInt(document.getElementById("nine_nmbr1").value);
    let newArr=[];
    let h=Math.floor(nineS/3600),
        m=Math.floor((nineS/60)-h*60),
        s=nineS%60;
    newArr.push(h,m,s);
        // console.log(newArr);
        // console.log(typeof s);
    const rezultat = menyayuNaVremya(newArr);
    return rezultat;
}
// gotov

// Написать функцию, которая считает разницу между датами. 
// Функция принимает 6 параметров, которые описывают 2 даты, 
// и возвращает результат в виде строки «чч:мм:сс». 
// При выполнении задания используйте функции из предыдущих 2-х заданий: 
// сначала обе даты переведите в секунды, 
// узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

function dateDiff(tenH,tenM,tenS,tenH2,tenM2,tenS2){
    debugger;
    tenH = parseInt(document.getElementById("ten_h").value);
    tenM = parseInt(document.getElementById("ten_m").value);
    tenS = parseInt(document.getElementById("ten_s").value);
    tenH2 = parseInt(document.getElementById("ten_h2").value);
    tenM2 = parseInt(document.getElementById("ten_m2").value);
    tenS2 = parseInt(document.getElementById("ten_s2").value);
    let arrTime1 = isNumberNun(tenH,tenM,tenS);
    let arrTime2 = isNumberNun(tenH2,tenM2,tenS2);
    const max = toSec(arrTime1)>toSec(arrTime2)?toSec(arrTime1):toSec(arrTime2);
    const min = toSec(arrTime1)<toSec(arrTime2)?toSec(arrTime1):toSec(arrTime2);
    let differ =max-min,
        rezultatTyt = toFullTime(differ);
    document.getElementById("tenTask").innerText = rezultatTyt;
}
//gotov