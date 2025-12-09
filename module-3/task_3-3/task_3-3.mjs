"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let today;
function norTime (){
     today = new Date() ;
    const options = { 
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",

    };
    printOut(today.toLocaleString('no-NB', options));
    return today
}
norTime();
printOut(newLine);



printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const release = new Date("2025-05-14");

function timeUntilRelease() {
    const timeMs = release.getTime() - today.getTime();
    const timeDays = Math.floor(timeMs / (1000 * 60 * 60 * 24));
    printOut(timeDays + " Days until game release!!");
// Coundown timer will not work with negative amount of days
    for (let day = timeDays; day > 0; day -= 5) { 
        printOut( day + " DAYS UNTIL RELEASE!!");
    }
}

norTime();     
timeUntilRelease();


printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const pi = 3.14 
let r = ""; 

function circle (r) { 
    const d = r*2;
    const A = pi*(r*r);
    const C = 2*pi*r;

    
    printOut ("If radius is "+ r + "then ");
    printOut ("Diameter =" + d);
    printOut ("Area = "+ A);
    printOut ("Circumference = "+ Math.round(C));
}

circle (10);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/



function rectangleCalculations (aValue1, aValue2){
const rectangle = { 
    width: aValue1,
    height: aValue2,
}
    const area = rectangle.width * rectangle.height 
    const circumference = rectangle.width*2 + rectangle.height*2

   printOut("Rectangle: width=" + rectangle.width + ", height=" + rectangle.height);
    printOut("Area = " + area);
    printOut("Circumference = " + circumference);
}
rectangleCalculations (5, 2)

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
 
function convert (aTemp, aType){
      
    const t = Number(aTemp);
    const type = String(aType).toUpperCase();
 
    if (type === "K"){
    const F = (t-273.15)*(9/5)+32;
    const C = t - 273.15;  
    printOut ( Math.round(t) + " Kelvin is " + Math.round(F)+" in Fahrinheit, and " + Math.round(C)+ " in Celsius")
  } else if (type=== "C") { 
    const F = t /(5/9)+32;
    const K = t + 273.15;
    printOut( Math.round(t) + " in Celsius is " + Math.round(F) + "in Fahrenheit and " + Math.round(K) +" in Kelvin")
 } else if (type=== "F"){
    const C = (t-32)*(5/9); 
    const K = C + 273.15
    printOut( Math.round(t) + " in Fahrenheit is " + Math.round(C) + " in Celsius and " + Math.round(K) +" in Kelvin")
 }
    }
convert (40, "F");
convert (100,"K");
convert (20, "C");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function noVAT (aGroos, aVATgroup){
   const price = Number(aGroos);
   const VATgroup = String(aVATgroup);

   if (isNaN(price)) {
        printOut("Invalid price");
        return;
    }

   if (VATgroup === "NORMAL"){
    const netPrice = (100*price)/(25+100);
    printOut(Math.round(netPrice) + " without VAT");
   }else if (VATgroup === "FOOD"){
     const netPrice = (100*price)/(15+100);
    printOut(Math.round(netPrice) + " without VAT");
   } else if (VATgroup === "HOTEL", "TRANSPORT","CINEMA"){
      const netPrice = (100*price)/(10+100);
    printOut(Math.round(netPrice) + " without VAT");
}else {
    printOut("Unknown VAT group!");
}
}

noVAT (100, "normal");
noVAT (40, "Food");
noVAT (70, "cinema");
noVAT(210, "dragons");
noVAT("one kingdom","normal" );
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
// paramertres has to be inputed in right order, and the one is needed to be calculated has to be replaced with  text format

function moveCalc (aSpeed, aDistance, aTime){
    const S = Number(aSpeed);
    const D = Number(aDistance);
    const T = Number(aTime);

    if (isNaN(S)){
        const speed = D/T;
        printOut("Your speed is "+ speed);
    } else if (isNaN(D)){
        const distance = S*T;
        printOut("Your distance is "+ distance);
    } else if(isNaN(T)){
        const time =D/S
    printOut("Your time is "+ time );
    }   else{ return(NaN)};
}
moveCalc(10, "no", 3)
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
function textfull (aText, aMaxSize, aTextChar, before){
    const textString  = String(aText);
    const sizeNum = Number(aMaxSize);
    const fillChar = String(aTextChar);
    let resultString  = ""; 
     
    if (textString.length < sizeNum){
        const missing = sizeNum - textString.length;
        let addChar = "";
         for (let i = 0; i < missing; i++){
             addChar += fillChar
            };
        if(before === true){
           let resultString = String(addChar) + textString
        }else if (before === false){
            resultString = textString + String(addChar);

        }
        printOut(resultString);
    } else {return textString} 
}

textfull("code", "10", "0", false);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
function factorial (aFacNumber){
const n =  Number(aFacNumber);

function fact(k) {
    if (k === 0) {
        return 1
    } else {
    return k * fact(k - 1);
    }
  }

const result = fact(n);
printOut("Factorial " + n + "= " + String(result));
printOut(newLine);
}

factorial("5");
printOut(newLine);
