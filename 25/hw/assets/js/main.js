// 1. Создать объект, описывающий автомобиль 
// (производитель, модель, год выпуска, средняя скорость),
//  и следующие функции для работы с этим объектом:
//         Функция для вывода на экран информации об автомобиле;
//         Функция для подсчета необходимого времени для преодоления 
//         переданного расстояния со средней скоростью. 
//         Учтите, что через каждые 4 часа дороги водителю необходимо 
//         делать перерыв на 1 час.

// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель 
// дроби, и следующие функции для работы с этим объектом: 
//         Функция сложения 2-х объектов-дробей;
//         Функция вычитания 2-х объектов-дробей;
//         Функция умножения 2-х объектов-дробей;
//         Функция деления 2-х объектов-дробей;
//         Функция сокращения объекта-дроби.

// 3. Создать объект, описывающий время (часы, минуты, секунды), 
// и следующие функции для работы с этим объектом: 
//         Функция вывода времени на экран;
//         Функция изменения времени на переданное количество секунд;
//         Функция изменения времени на переданное количество минут;
//         Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части 
// времени, может измениться и другая. 
// Например, если ко времени «20:30:45» добавить 30 секунд, 
// то должно получиться «20:31:15», а не «20:30:75».
const CARS = [];
let Car = new Object(buildCar);
function buildCar(manufacturer,model,yearOfIssue,avarSpeed){
    this.manufacturer=manufacturer;
    this.model=model;
    this.yearOfIssue=yearOfIssue;
    this.avarSpeed=avarSpeed;
}
// Object.defineProperty(Car, "b", {set:function(x){
//     this.yearOfIssue = x;
//     }
function kakayaToFunc (a,b){
    //a - avSp, b - km s polya
    let k = 0,
        m = (b/a)%4;
    if(b/a<4){
        k = b/a;
    }else{
        for(let i =0; i<m; i++){
            k = b/a+i;
        }
    }
    console.log(k);
}
let porsche = new Car('Porsche AG','Porsche 918',2015,'250 km/h'),
    nissan = new Car('Nissan','Nissan 350Z',2008,'200 km/h'),
    audi = new Car('Audi','Audi Q8',2018,'245 km/h');
CARS.push(porsche,nissan,audi);
function func(n){
    let msg = '';
    switch (n){
        case '':
            msg = 'Выберите авто';
            document.getElementById("firstBtn").disabled = true;
        break;
        case 'Porsche':
            msg = `<ul><li>Производитель - ${CARS[0].manufacturer}</li><li>Модель авто - ${CARS[0].model}</li><li>Год выпуска - ${CARS[0].yearOfIssue}</li><li>Средняя скорость авто - ${CARS[0].avarSpeed}</li>`;
            document.getElementById("firstBtn").disabled = false;
        break;
        case 'Nissan':
            msg = `<ul><li>Производитель - ${CARS[1].manufacturer}</li><li>Модель авто - ${CARS[1].model}</li><li>Год выпуска - ${CARS[1].yearOfIssue}</li><li>Средняя скорость авто - ${CARS[1].avarSpeed}</li>`;
            document.getElementById("firstBtn").disabled = false;
        break;
        case 'Audi':
            msg = `<ul><li>Производитель - ${CARS[2].manufacturer}</li><li>Модель авто - ${CARS[2].model}</li><li>Год выпуска - ${CARS[2].yearOfIssue}</li><li>Средняя скорость авто - ${CARS[2].avarSpeed}</li>`;
            document.getElementById("firstBtn").disabled = false;
        break;
    }
    document.getElementById("firstTask").innerHTML = msg;
}

// const car = {
//     "manufacturer":'Porsche AG',
//     "model":'Porsche 918',
//     "yearOfIssue":2015,
//     "avarSpeed":'200 km/h'
// } попробовать запушить этот объект в масив машин


// let myCart = {
//     "Bread":{
//         "price":12.5,
//         "qty":1
//     },
//     "Milk":{
//         "price":22.00,
//         "qty":2
//     },
//     get(k){
//         console.log(k+': '+this[k].qty)
//         return this[k].qty;
//     },
//     set(k, new_qty){
//         this[k].qty = new_qty;
//         this.get(k);
//     }
// }//не клонируются, рарзве что обджектассайн, но не все правильно копирует - общие числа для обоих обьектов
// console.log(myCart.set("Milk", 10));
//console.log(myCart.get("Milk"));