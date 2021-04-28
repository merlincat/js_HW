// Запросить у пользователя его возраст и определить, 
// кем он является: ребенком (0–12), подростком (12–18), взрослым (18_60) 
// или пенсионером (60– ...).
function checkAge(){
    // debugger;
    let a = parseInt(prompt("Enter Your Age"));
    if(isNaN(a)){
        alert("Ener Your Age with numbers");
    }else if(a>=0 && a<=12){
        alert("You are child");
    }else if(a>12 && a<=18){
        alert("You are teenager");
    }else if(a>18 && a<=60){
        alert("You are adult");
    }else if(a>60 && a<=120){
        alert("You are pensioner");
    }else{
        alert("Maby You're Vampire? Or Enter correct Age")
    }
}
// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
function specSymbol(){
    let nmbr = parseInt(prompt("Enter number"));
    let symbol = '';
    switch(nmbr){
        case 0:
            symbol = ')';
            break;
        case 1:
            symbol = '!';
            break;
            // обязательно проверить наличие
        case 2:
            symbol = '@';
            break;
        case 3:
            symbol = '#';
            break;
        case 4:
            symbol = '$';
            break;
        case 5:
            symbol = '%';
            break;
        case 6:
            symbol = '^';
            break;
        case 7:
            symbol = '&';
            break;
        case 8:
            symbol = '*';
            break;
        case 9:
            symbol = '(';
            break;        
        default:
            symbol = 'Enter valid number from 0 to 9';
            break;
    }
    alert(symbol);
}
// Запросить у пользователя трехзначное и число 
// и проверить, есть ли в нем одинаковые цифры.
function sameNmbrs(){
    // debugger;
    let nmbr =prompt("Enter a three-digit number");
    if(nmbr!=""){
        let arrN = nmbr.split(""),
        a = parseInt(arrN[0]),
        b = parseInt(arrN[1]),
        c = parseInt(arrN[2]);
        if(isNaN(nmbr) || nmbr>999 || nmbr<100){
            alert("Enter a three-digit number!");
        }else if( a==b || b==c || a==c){
            alert("Your number has same points");
        }else{
            alert("Your number hasn't same points");
        }
    }else{
        alert("empty data");
    }
}
// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
function leap(){
    let userYear = parseInt(prompt("Enter a year"));
    if (isNaN(userYear)){
        alert("wrong data, enter a year by numbers")
    }else if(userYear%400==0 || (userYear%4==0 && userYear%100>0)){
        alert("This Year is Leap");
    }else{
        alert("This Year isn't Leap");
    }
}
// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function plndrm(){
    let userNmbr = parseInt(prompt("Enter your five-digit number"));
    if (isNaN(userNmbr) || userNmbr<10000){
        alert("wrong data, enter a five-digit number");
    }else{
        if(userNmbr<0 || userNmbr%10===0 ){
            alert("your number is not a palindrome"); 
        }else if ((userNmbr%10*10) + parseInt(userNmbr%100/10) == parseInt((userNmbr%100000)/1000)){
            alert("your number is a palindrome");
        }else{
            alert("your number is not a palindrome"); 
        }
    }
}


// Написать конвертор валют. Пользователь вводит количество USD, 
// выбирает, в какую валюту
// хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.

function cnvrtr(){
    // debugger;
    const dol = parseFloat(prompt("Enter value of USD")),
        keur = 0.83,
        kuah = 27,
        kazn = 1.7;
    let rez = dol,
        val = prompt("Enter currency: EUR, UAN or AZN");
    if(isNaN(dol) || dol<0){
        alert("wrong data, enter value of USD");
    }else{
        if(val=="EUR" || val=="eur" || val=="Eur"){
            rez = dol*keur;
            alert(`${dol}$ is ${rez} EUR`);
        }else if (val=="UAH" || val=="uah" || val=="Uah"){
            rez = dol*kuah;
            alert(`${dol}$ is ${rez} UAH`);
        }else if (val=="AZN" || val=="azn" || val=="Azn"){
            rez = dol*kazn;
            alert(`${dol}$ is ${rez} AZN`);
        }else{
            alert("wrong data, enter currency!");
        }
    }
}
// Запросить у пользователя сумму покупки и 
// вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, 
// от 300 до 500 – 5%, 
// от 500 и выше – 7%.
function discount(){
    const userSum = parseFloat(prompt("Enter purchase amount")),
        k3 = 0.03,
        k5 = 0.05,
        k7 = 0.07;
    let rez = (userSum).toFixed(2);
    if (!isNaN(userSum) || userSum>0){
        if(userSum>=500){
            rez = (userSum - userSum*k7).toFixed(2);
            alert(`Your Sum is ${rez} with discount 7%`);
        }else if(userSum>=300 && userSum<500){
            rez = (userSum - userSum*k5).toFixed(2);
            alert(`Your Sum is ${rez} with discount 5%`);
        }else if(userSum>=200 && userSum<300){
            rez = (userSum - userSum*k5).toFixed(2);
            alert(`Your Sum is ${rez} with discount 3%`);
        }else{
            alert(`Your sum is ${rez}UAH`);
        }
    }else{
        alert ("wrong data, enter purchase amount with numbers!")
    }
}
// Запросить у пользователя длину окружности и периметр квадрата. 
// Определить, может ли такая окружность поместиться в указанный квадрат.
// l = 2pr => r=l/(2p)
// per = 4a => a=per/4
// 2*r=a
function kvadrat(){
    const l = parseFloat(prompt("Enter the length of the circle")),
        per = parseFloat(prompt("Enter the perimeter of a square")),
        r=(l/(2*Math.PI)).toFixed(3),
        a=(per/4).toFixed(3);
        // при условии, что пользователь введет корректно данные
    let rez = (2*r)<=a?'pomestitsya':'ne pomestitsya';
    alert(rez);
}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
//  За каждый правильный ответ начисляется 2 балла.
//  После вопросов выведите пользователю количество набранных баллов.

// 1 = eto 1 ili net? 
    // 1) da, eto 1
    // 2)net, eto ne 1
    // 3)hz
// если правильно - возвращаем true в переменную, если нет - false, 
// если в переменной true то в score добавляем 2
// повторяем
// повторяем еще раз
// выводим конечный rez с суммой балов


function voprosnik(){
        // делала до урока, когда разбирали эту задачу, пока оставила так, как было
        // по разбору кстати не получилось
const a = prompt("Choose one corect answer and enter 1, 2 or 3\n2+2 = ?\n1  - 3\n2  - 2\n3  - 4"),
    b = prompt("Matroskin is a ...\n1  - Cow\n2  - Rat\n3  - Cat"),
    c = prompt("What was first egg or chicken?\n1  - Egg\n2  - Chicken\n3  - Beetroot");
    if(!isNaN(a,b,c), (a<4 && a>0) || (b<4 && b>0) || (c<4 && c>0)){
        if(a==3 && b==3 && c==3){
            alert("your score is 6. Gratz!");
        }else if((a==3 && b==3) || (a==3 && c==3) || (b==3 && c==3)){
            alert("your score is 4, you can be better");
        }else if (a==3 || b==3 || c==3){
            alert("your score is just 2 =(");
        }else{
            alert("Yoou have 0 points. It's pity");
        }
    }else{
        alert("enter correct answers from 1 to 3");
    } 
}

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.
// вводим 20.05.2020
// надо вывести 21.05.2020
// для начала нужно поделить на dates month years
// потом если дейс == 31 и монс == 12, следующий будет дейс = 1, монс = 1, еар = +1
// если дейс = от 1 до 30 то месяц не меняем, год не меняем, меняем только дату
// если дейс= 31, меняем дату, проверяем и меняем месяц, 
// не меняем год, если  не 12 месяц


function nextDate(){
    // делала до урока, когда разбирали эту задачу, пока оставила так, как было
    let date = prompt("Enter the date - dd-mm-yyyy"),//06-11-2021
    maxDays,
    ndate='',
    arrDate = date.split('-'),
    d = parseInt(arrDate[0]), //d=6 ==>d=7
    m = parseInt(arrDate[1]), //m=11 ==>m=12
    y = parseInt(arrDate[2]); //y=2021 ==>2021
    if(d>31 || d<1 || m>12 || m<1 || y<1){
        alert ("enter correct date - dd-mm-yyyy");
    }else{
        maxDays = 0;
        switch(m){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                maxDays = 31;
                break;
            case 2:
                if(y%400==0 || (y%4==0 && y%100>0)){
                    maxDays = 29;
                }else{
                    maxDays = 28;
                }
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                maxDays = 30;
                break;
            default:
                alert("Smt wrong with month");
                break;
            }
        if((d>0 && d<31 && maxDays == 31) || (d>0 && d<30 && maxDays==30) || (d>0 && d<29 && maxDays==29) ||(d>0 && d<28 && maxDays==28)){
            d+=1;
            d=addZero(d);
            m=addZero(m);
            ndate=`${d}-${m}-${y}`;
            alert(ndate);
        }else if((d=31 && maxDays == 31 && m!=12) ||(d=30 && maxDays == 30) || (d=29 && maxDays == 29) || (d=28 && maxDays == 28)){
            d=1;
            m+=1;
            d=addZero(d);
            m=addZero(m);
            ndate=`${d}-${m}-${y}`;
            alert(ndate);
        }else if(d=31 && maxDays == 31 && m==12){
            d=1;
            m=1;
            y+=1;
            d=addZero(d);
            m=addZero(m);
            ndate=`${d}-${m}-${y}`;
            alert(ndate);
        }else{
            alert("Please, try again");
        }
    }
}
function addZero(n){
    return(n<10)?'0'+n:n;
}