function userName(){
    const userName = prompt("Enter Your Name");
alert (`Hello, dear ${userName}!`);
}
function userAge(){
    let byear = parseInt(prompt("Enter Your Year of Birth"));
    const curyear = new Date().getFullYear();
    let rez = curyear - byear,
        rez2 = (curyear -  1) - byear;

    alert (`Your Age : ${rez} if Your month of birth was in this year and ${rez2} if Your birth will be in this year`);
}
function userSqr(){
    let a = parseFloat(prompt("Enter Side of Square")),
        k = 4,
        rez = k*a;
    alert(`Perimeter of Square With Side in ${a} is ${rez}`);

}
function areaCrcl(){
    const Pi = Math.PI;
    let r = parseFloat(prompt("Enter Radius os Circle")),
        rez = Pi*(Math.pow(r, 2));
    alert(`Circle's Area is about ${rez.toFixed(2)}`);
}
function speed(){
    let l = parseFloat(prompt("Enter Distance ...")),
        t = parseFloat(prompt("How Much Time Does You Have?")),
        v = l/t;
    alert(`Distance - ${l}km, time - ${t}h. Your speed must be around ${v}km per hour`);
}
function cnvrt(){
    const k = 0.85;
    let doll = prompt("How Many Dollars Does You Have?"),
        eur = doll*k;
    alert(`You has ${eur} Euro from ${doll} Dollars`);
}
function userFiles(){
    const k = 1024,
        filevol = 820;
    // берем бинарную систему
    let datavol = prompt("Enter memory size in GB ..."),
        rez = (datavol*k)/filevol;
    alert (`Your Flash with ${datavol}GB can contain ${Math.floor(rez)} files ${filevol}MB each`);

}
function chbar(){
    let price = parseFloat(prompt("How much is chocolate bar?")),
        money = parseFloat(prompt("How much money does You have")),
        rez = Math.floor((money/price)),
        change = money%price;
    alert(`Price on choco - ${price}UAH. You has ${money}UAH. You can buy ${rez} choco-bars and has change - ${change.toFixed(2)}UAH`);
}
function rvrsNmbr(){
    let a = parseInt(prompt("Enter a three-digit number")),
                // 123-3*100=300  23*1=23    123/100=1.23
        rez = ((a%10)*100) + ((a%100) - a%10) + parseInt(a/100);
    alert (`Your number : ${a}, My number : ${rez}`);
    // с 0 в конце не получилось
}
function depoCalc(){
    const k = 0.05,
        m0 = 12,
        m = 2;
    let sumDepo = parseFloat(prompt("Your Deposit ...")),
        sumProc = ((sumDepo*k)/m0)*m,
        sumDoh = parseFloat(sumProc + sumDepo);
    alert (`Your Deposit : ${sumDepo}UAH, after 2 month You'll have ${sumDoh.toFixed(2)}UAH with ${sumProc.toFixed(2)}UAH Percent`);
}

