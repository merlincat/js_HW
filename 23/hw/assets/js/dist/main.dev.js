"use strict";

// Задания, в которых необходимо использовать WHILE.
//  1) Вывести # столько раз, сколько указал пользователь.
function diez() {
  var n = parseInt(document.getElementById("diez_nmbr").value);

  if (n != 0 && !isNaN(n) && n > 0) {
    var rez = '',
        i = 0;

    while (i < n) {
      i++; // rez = rez + '#';

      rez += '#';
    }

    document.getElementById("diez_rez").innerText = rez;
  } else {
    alert("Enter diez number!");
  }
} // Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// 10 - 15 => 10+11+12+13+14+15 


function diapazon() {
  var a = parseInt(document.getElementById("first_nmbr").value);
  var b = parseInt(document.getElementById("sec_nmbr").value);
  var rez = 0;

  if (!isNaN(a) && !isNaN(b)) {
    while (a <= b) {
      rez += a;
      a++;
    }

    document.getElementById("d_rez").innerText = rez;
  } else {
    alert("Enter numbers!");
  }
} // gotov
// Запросить 2 числа и найти только наибольший общий делитель.
// 36 32 8 
// запросить одно число, запросить другое число
// найти делители первого, найти делители второго, сравнить их, найти максимальное число