// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// 10 - 15 => 10+11+12+13+14+15 
function diapazon(){
    let a = parseInt(document.getElementById("first_nmbr").value),
        b = parseInt(document.getElementById("sec_nmbr").value);
    let rez=0;
    if(!isNaN(a) && !isNaN(b)){
        while(a<=b){
            rez+=a;
            a++;
        }
        document.getElementById("d_rez").innerText = rez;
    }else{
        alert("Enter numbers!");
    }
}
// gotov
// Запросить 2 числа и найти только наибольший общий делитель.

// 36 32 4 
// запросить одно число, запросить другое число
// найти делители первого, найти делители второго, сравнить их, найти максимальное число

function max_del(){
    // debugger;
    const number1 = parseInt(document.getElementById("number1_del").value),
        number2 = parseInt(document.getElementById("number2_del").value);
    if(!isNaN(number1) && !isNaN(number2)){
        let max = (number1>number2)?number1:number2,
            min = (number1>number2)?number2:number1,
            r = max%min;
            while(r!=0){
                max=min;
                min=r;
                r=max%min;
            }
        document.getElementById("del_rez").innerText = min;
    }else{
        alert("Enter numbers!");
    }
}
//gotov

// Запросить у пользователя число и вывести все делители этого числа.
function allDel(){
    // debugger;
    const custom_nmbr = parseInt(document.getElementById("custom_nmbr").value);
    let rez = '';
    for(let i=1;i<custom_nmbr;i++){
        if(custom_nmbr%i==0){
            rez += i+'; ';
        }
    }
    document.getElementById("allDel_rez").innerText = rez;
}
//gotov

// Определить количество цифр в введенном числе.
// 
function countI(){
    const n = parseInt(document.getElementById("custom_nmbr2").value);
    if(n!=0 && !isNaN(n)){
        let i = 1,
            quantity=0;
            while (Math.abs(n/i) >= 1) {
                quantity++;
                i*= 10;
              }
        document.getElementById("countI_rez").innerText = quantity;
    }else{
        alert("Enter number!");
    }
}
// gotov

// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, 
// отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. 
// Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
function tenNmbrs(){
    // debugger;
    const allnmbrs=document.getElementById("allnmbrs").value;
    let arrN = allnmbrs.split(","),
    positiveN = [],
    negativeN = [],
    zeroN = [],
    chetN = [],
    nechetN = [];
    for(let i = 0; i < arrN.length; i++) {  
        if (arrN[i]>0) {
            positiveN.push(arrN[i]);
        }else if(arrN[i]<0) {
            negativeN.push(arrN[i]);
        }else{
            zeroN.push(arrN[i]);
        }
    }
    for(let j = 0; j<arrN.length; j++){
        if(arrN[j]%2===0){
            chetN.push(arrN[j]);
        }else{
            nechetN.push(arrN[j]);
        }
    }
    let result = 'Положительные числа: ' + positiveN.join(',') + 
   ' (количество: ' + positiveN.length + ')<br>' + 
   'Отрицательные числа: ' + negativeN.join(',') +
   ' (количество: ' + negativeN.length + ')<br>' +
   'Нули: ' + zeroN.join(',') +
   ' (количество: ' + zeroN.length + ')<br>'+
   'Четные: ' + chetN.join(',') +
   ' (количество: ' + chetN.length + ')<br>'+
   'Нечетные: ' + nechetN.join(',') +
   ' (количество: ' + nechetN.length + ')';
   document.getElementById("tenNmbrs_rez").innerHTML = result;
}
// gotov


// Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить, хочет ли он решить еще один пример. 
// И так до тех пор, пока пользователь не откажется.
function calc(){
    do {
        const a = parseInt(prompt('Введите первое число'));
        let action = prompt('Выберите знак - + / *');
        const b = parseInt(prompt('Введите второе число'));
            rez = 0;
        if(isNaN(a)||isNaN(b)){
            alert('incorrect data')
        }else{
            switch (action) {
                case '+':
                    alert(a + b);
                    break;
                case '-':
                    alert(a - b);
                    break;
                case '/':
                    alert(a / b);
                    break;
                case '*':
                    alert(a * b);
                default:
                    break;
            }
        }
    } while (confirm('Next example?'));
}
//gotov


// Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и 
// вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).

function castStep(){
    // debugger;
    let cas_nmbr = document.getElementById("cas_nmbr").value,
	    zdvig = parseInt(document.getElementById("zdvig").value),   
        arrSt=cas_nmbr.split('');
    for(let i = 0; i < zdvig; i++) //удаляем первый элемент и прикрепляем его в конец, пока не будет i равно числу сдвигов
    arrSt.push(arrSt.shift());
    document.getElementById("cStep").innerHTML = arrSt.join``;
}
//gotov

// Зациклить вывод дней недели таким образом: «День недели. 
// Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
//делать do while(confirm)

function nextDay(){
    // debugger;
    let nDate=new Date(),//берем всю дату
        n = nDate.getDay();//берем конкретный день недели, только он числом
        weekday=['Sun','Mon','Tue','Wen','Thu','Fri','Sut'];//присваиваем числу конкретный день
        while(confirm(`Now is ${weekday[n]}. Next?`)){//пока нажимаем ок - добавляем по дню
            n = (n+1) %weekday.length;//чтобы не выйти за предел массива дней
        };
}
//gotov

// Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

function tableMn(){
    // debugger;
    let tabl='',
        stroka='',
        obertka=`<div style="display: flex;
        width:900px;
        flex-direction: raw;
        justify-content: space-between;
        border: 1px solid #000;
        margin: 10px 10px;">`;
    for(let i = 2; i<=9;i++){
        tabl+=`<div style="width: 33.3333%;
            border: 1px solid #000;
            margin: 10px 10px;">`;
        for(let j=1;j<=10;j++){
           stroka+= `<div>${i} &times; ${j} = ${i*j}</div>`;
        };
        tabl = `${tabl}`+`${stroka}`+`</div>`;  
    }
    obertka=`${obertka}`+`${tabl}`+`</div>`;
    document.getElementById("tabl_umnozh").innerHTML = obertka;
}
//hz - непонятно, как зделать так, чтобы выводились только прявильные столбики
// пока оставляю так, мб что-то придумаю
// ne gotov

// Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 
// и отгадать его следующим способом: каждую итерацию цикла делите диапазон чисел пополам, 
// записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
// В зависимости от того, что указал пользователь, уменьшаете диапазон. 
// Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
// Если пользователь указал, что его число > 50, 
// то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.


// и так, что мы делаем
// 1. Просим загадать число пользователя
// 2. Задать , что числа будут от 1 до 100
// 3. узанем у пользователя, это число больше 50, меньше или 50?
//  4.1 Если больше, задаем вопрос это число больше 25, меньше или 25?
        // 4.1.1 Если меньше, задаем вопрос это число больше 12, меньше или 12?
        // 4.1.2 Если больше, задаем вопрос это число больше 37,меньше или 37?
        //  и тд
//  4.2 Если меньше, задаем вопрос это чиcло больше 75, меньше или 75(b,s,y)?
// и тд
//

function game() {
    // debugger;
    let max=100,
    min=0,
    num,
    answer;
	do {
		num = Math.floor(max - (max-min)/2);
		answer = prompt("Your number " + num + "? y/b/s : ");
		switch(answer) {
			case "b": min = num; break;
			case "s": max = num; break;
		};
	}
	while (answer != "y") {
		alert("Your number " + num + "!!!");
	};
}
// gotov
