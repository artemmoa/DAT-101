"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let text1 = "";
let text2 = "";


for(let i = 1; i<= 10; i++){
    text1 += " " + i.toString();
}
for(let j = 10; j>0; j--){
    text2 += " " + j.toString();
}
printOut(text1);
printOut(text2);


printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part1GuessNumber = 45
let part1Random = Math.floor(Math.random() * 60) + 1;
while (part1Random !== part1GuessNumber) {
    part1Random = Math.floor(Math.random() * 60) + 1;
}
printOut("Yes! You guessed it: " + part1Random);


printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const part3Number =84
let part3Random= Math.floor(Math.random() * 1000000);
let tries = 1;
const startTime = Date.now();

while (part3Number !== part3Random){
   part3Random = Math.floor(Math.random() * 100000) + 1;
   tries++;

}
const timeResult = Date.now() - startTime;
printOut("Yes! I guessed it: " + part3Random);
printOut("It took me " + tries + " tries")
printOut("And " + timeResult + " milliseconds")


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = ""

for (let allNumbers = 2; allNumbers < 200; allNumbers++){
    let prime = true
    for(let i = 2; i<= Math.sqrt(allNumbers); i++)
        if(allNumbers % i == 0) {
            prime = false;
            break
        }
        if(prime) {
            primeNumbers += " " + allNumbers;
        }
}
printOut(primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let result = ""

for(let rNum = 1; rNum<8; rNum++){

   for (let kNum = 1; kNum < 10; kNum++){
    result += "K" +kNum.toString() + "R" + rNum + " ";   
   }
   result += "<br>";
}
printOut(result);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let student = 1; student <= 5; student++) {
    let points = Math.floor(Math.random() * 236) + 1;
    let percent = (points / 236) * 100; 

let grade = "";
    if (percent >= 89) {
        grade = "A";
    } else if (percent >= 77) {
        grade = "B";
    } else if (percent >= 65) {
        grade = "C";
    } else if (percent >= 53) {
        grade = "D";
    } else if (percent >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }
    
  printOut("Student " + student + ": " + points + " points - " + grade);
} 

printOut("--- Part 6 bonus ----------------------------------------------------------------------------------------------");
printOut("it is separated from part 6, in case if it is wrong. Other numbers generated")
let pointsSt1 = Math.floor(Math.random() * 236) + 1;
    let percentSt1 = (pointsSt1 / 236) * 100;
let pointsSt2 = Math.floor(Math.random() * 236) + 1;
    let percentSt2 = (pointsSt2 / 236) * 100;
let pointsSt3 = Math.floor(Math.random() * 236) + 1;
    let percentSt3 = (pointsSt3 / 236) * 100;
let pointsSt4 = Math.floor(Math.random() * 236) + 1;
    let percentSt4 = (pointsSt4 / 236) * 100;
let pointsSt5 = Math.floor(Math.random() * 236) + 1;
    let percentSt5 = (pointsSt5 / 236) * 100;

let stGrade1 = "";
let stGrade2 = "";
let stGrade3 = "";
let stGrade4 = "";
let stGrade5 = "";

    if (percentSt1 >= 89) {
        stGrade1 = "A";
    } else if (percentSt1 >= 77) {
        stGrade1 = "B";
    } else if (percentSt1 >= 65) {
        stGrade1 = "C";
    } else if (percentSt1 >= 53) {
        stGrade1 = "D";
    } else if (percentSt1 >= 41) {
        stGrade1 = "E";
    } else {
        stGrade1 = "F";
    }

     if (percentSt2 >= 89) {
        stGrade2 = "A";
    } else if (percentSt2 >= 77) {
        stGrade2 = "B";
    } else if (percentSt2 >= 65) {
        stGrade2 = "C";
    } else if (percentSt2 >= 53) {
        stGrade2 = "D";
    } else if (percentSt2 >= 41) {
        stGrade2 = "E";
    } else {
        stGrade2 = "F";
    }

     if (percentSt3 >= 89) {
        stGrade3 = "A";
    } else if (percentSt3 >= 77) {
        stGrade3 = "B";
    } else if (percentSt3 >= 65) {
        stGrade3 = "C";
    } else if (percentSt3 >= 53) {
        stGrade3 = "D";
    } else if (percentSt3 >= 41) {
        stGrade3 = "E";
    } else {
        stGrade3 = "F";
    }

      if (percentSt4 >= 89) {
        stGrade4 = "A";
    } else if (percentSt4 >= 77) {
        stGrade4 = "B";
    } else if (percentSt4 >= 65) {
        stGrade4 = "C";
    } else if (percentSt4 >= 53) {
        stGrade4 = "D";
    } else if (percentSt4 >= 41) {
        stGrade4 = "E";
    } else {
        stGrade4 = "F";
    }

      if (percentSt5 >= 89) {
        stGrade5 = "A";
    } else if (percentSt5 >= 77) {
        stGrade5 = "B";
    } else if (percentSt5 >= 65) {
        stGrade5 = "C";
    } else if (percentSt5 >= 53) {
        stGrade5 = "D";
    } else if (percentSt5 >= 41) {
        stGrade5 = "E";
    } else {
        stGrade5 = "F";
    }

let currentGrade = "A";
do{
    if(stGrade1 == currentGrade) printOut(stGrade1)
    if(stGrade2 == currentGrade) printOut(stGrade2)
    if(stGrade3 == currentGrade) printOut(stGrade3)
    if(stGrade4 == currentGrade) printOut(stGrade4)
    if(stGrade5 == currentGrade) printOut(stGrade5)

        if (currentGrade === "A") currentGrade = "B";
    else if (currentGrade === "B") currentGrade = "C";
    else if (currentGrade === "C") currentGrade = "D";
    else if (currentGrade === "D") currentGrade = "E";
    else if (currentGrade === "E") currentGrade = "F";
    else currentGrade = "";
} while (currentGrade !== "");

    
printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/


let throws = 0
let straight = ""
const target = "1 2 3 4 5 6 ";
do{
    straight = "";
    for(let dice =6; dice >0; dice--){
    const roll = Math.floor(Math.random()*6)+1
    straight += String(roll) + " ";
    throws++;
     }
    
}while (straight !== target);


printOut(straight);
printOut("Total tries: " + throws)
printOut(newLine);

printOut("___7.2___3 par");
let throws2 = 0; 
let trials2 = 0;
let straight2 = ""; 
let pairs = 0; 

do {
    straight2 = "";
    trials2 ++;
    let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

    for(let dice =6; dice >0; dice--){
    const roll = Math.floor(Math.random()*6)+1
    straight2 += String(roll) + " ";

    //I have found about switch on W3school 
    switch (roll) {
            case 1: c1++; break;
            case 2: c2++; break;
            case 3: c3++; break;
            case 4: c4++; break;
            case 5: c5++; break;
            case 6: c6++; break;
        }
  }
    pairs = 0;
    if (c1 === 2) pairs++;
    if (c2 === 2) pairs++;
    if (c3 === 2) pairs++;
    if (c4 === 2) pairs++;
    if (c5 === 2) pairs++;
    if (c6 === 2) pairs++;
} while (pairs !== 3);
printOut(newLine)
printOut("Three pairs " + straight2  )
printOut(" Total tries " + trials2 )
printOut(newLine)


printOut("____7.3___")
 

let throws3 = 0; 
let trials3 = 0; 
let straight3 = ""; 
let fourTwoFound = false;

do{
    straight3 = ""; 
    trials3++; 
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;
for(let dice =6; dice >0; dice--){
    const roll = Math.floor(Math.random()*6)+1
    straight3 += roll + " ";
    switch (roll) {
            case 1: c1++; break;
            case 2: c2++; break;
            case 3: c3++; break;
            case 4: c4++; break;
            case 5: c5++; break;
            case 6: c6++; break;
}
}
 let fourCount = 0;
    let twoCount = 0;
    if (c1 === 4) fourCount++;
    if (c2 === 4) fourCount++;
    if (c3 === 4) fourCount++; 
    if (c4 === 4) fourCount++;
    if (c5 === 4) fourCount++; 
    if (c6 === 4) fourCount++;

    if (c1 === 2) twoCount++;
     if (c2 === 2) twoCount++;
    if (c3 === 2) twoCount++; 
    if (c4 === 2) twoCount++;
    if (c5 === 2) twoCount++; 
    if (c6 === 2) twoCount++;

  fourTwoFound = (fourCount === 1 && twoCount === 1);
} while (!fourTwoFound);
printOut(newLine); 
printOut("Towers "+ straight3); 
printOut("trials " + trials3);
printOut(newLine); 

printOut("___7.4___");  

let trials4 = 0; 
let straight4 = ""; 
let sameResult = 0; 
do{
    straight4 = ""; 
    trials4++; 
let c1 = 0, c2 = 0, c3 = 0, c4 = 0, c5 = 0, c6 = 0;

for(let dice =6; dice >0; dice--){
    const roll = Math.floor(Math.random()*6)+1
    straight4 += roll + " ";
    switch (roll) {
            case 1: c1++; break;
            case 2: c2++; break;
            case 3: c3++; break;
            case 4: c4++; break;
            case 5: c5++; break;
            case 6: c6++; break;
}
}
 if (c1 === 6||c2 ===6|| c3 ===6|| c4 ===6|| c5 === 6|| c6 === 6){
  sameResult = 1; 
 } 
} while (sameResult===0);
printOut("Yahtze "+ straight4);
printOut("Trials "+ trials4);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
