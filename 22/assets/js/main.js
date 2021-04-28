// let n = 10;
//     n++;
//     alert(n);
    // ++n;
    // n--;
    // --n;
    // let a = '3';
    // if(a===3){
    // alert("is zero");
    // }
    // не выполнится
    // let a = '3';
    // if(a===){
    // alert("is zero");
    // }
    // выполнится
    // let a = true;
    // if(a){
    //     alert(a);
    // }
    // let a = false;
    // if(!a){
    //     alert(a); 
        // синтаксис не полного условия
    // }
    // let a = true;
    // if(!a){
    //     alert(a); 
    // }else{
    //     alert("Hello");
    // }


    // let a = 'adasd';
    // if(a>0){
    //     alert("Its positive"); 
    // }else if(a<0){
    //     alert("Its negative");
    // }else if(a==0){
    //     alert("zero");
    // }else{
    //     alert("Its not a number");
    // }

function checkNmbr(){
    let a = parseInt(prompt("Enter Your Number"));
    // несколько условий
    if(a>0){
        alert("Its positive"); 
    }else if(a<0){
        alert("Its negative");
    }else if(a==0){
        alert("zero");
    }else{
        // валидация
        alert("Its not a number");
        checkNmbr();
    }
}

function checkAge(){
    let a = parseInt(prompt("Enter Your Age"));
    // несколько условий
    if(a>=0 && a<=120){
        alert("valid number");
    }else{
        // валидация
        alert("invalid number");
    }
} 

function abs(){
    let m = parseFloat(prompt("Enter Your number"));
    if(m>=0){
        alert(m);
    }else if(m<0){
        m = Math.abs(m);
        alert(m);
    }else{
        alert("Invalid data");
    }
}

function ftrTime(){
    let t = prompt("Enter Time, format hh:mm:ss");
    if(t!=""){
        let arrT = t.split(":"),
        h = parseInt(arrT[0]),
        m = parseInt(arrT[1]),
        s = parseInt(arrT[2]);
        if(isNaN(h) || isNaN(m) || isNaN(s)){
            alert("Enter valid time");
        }else if((h>=0 && h<24) && (m>=0 && m<60) && (s>=0 && s<60)){
            alert ("Time valid");
        }else{
            alert ("Invalid Time");
        }
    }else{
        alert("Enter Time");
    }
}
function monthName(){
    const mNmbr = parseInt(prompt("Enter month number"));
    let mName = '';

    switch(mNmbr){
        case 1:
            mName = 'Yanvar';
            break;
            // обязательно проверить наличие
        case 2:
            mName = 'Fevral';
            break;
        case 3:
            mName = 'Mart';
            break;
        default:
            mName = 'Enter valid month number';
            break;
    }
    alert(mName);
}
   function maxNmbr(){
        const a = parseInt(prompt("enter number 1")),
            b = parseInt(prompt("enter number 1"));
        let rez = (a>b)?a:b;

        // [условие]?[если выполнилось]:[значение иначе]
        // if(a>b){
        //     rez = a;
        // }else{
        //     rez = b;
        // }
        alert(rez);
   }
function isFive(){
    const a = parseInt(prompt("enter number"));
    let rez = (a%5==0)?'kratno':'ne kratno';
    alert(rez);
}


    // primer - tak tozhe mozhno
    // if((a>0 && a==123) || (a>0 && a==1))
    // ninado tak - 
    // if(a>0){
    //     if(a==123 || a==1){
    //         alert("+")
    //     }
    // }
    // tak nado - 
    // if(a>0 && (a==123 || a==1)){
    //     alert("+")
    // }

