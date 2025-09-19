"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
let wakeTime = 7;
if (wakeTime == 7) {
  printOut("I can take the bus to school.");
 } else if (wakeTime == 8) {
  printOut("I can take  the train to school") 
}
else {printOut("I have to take a car to school");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let number = 0;
 if (Number.isInteger(number)) {
  printOut("Positiv");
 }else {printOut("Negative");
}
printOut(newLine);

printOut("--- Part 6 and 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let size1 = Math.random()*8
printOut("Image size: " + size1.toFixed(1) + " MP"); 
if (size1 <= 4) {printOut("Image is too small");
} else if (size1 >= 6){printOut("Imge is too large");
 } else {
  printOut("Thank you!"); 
}
printOut(newLine);

printOut("--- Part 8 + 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const monthList =["January", "February", "Mars", "April", "Mai",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut(monthName);
if (monthName.includes("r")){
  printOut ("You must take vitamin D");
} else {printOut ("You do not need vitamin D");
}
if (monthName == "February") {printOut("It is 28 days in February");
} else if (monthName == "April" || monthName == "June" || monthName == "September" || monthName == "November") {
  printOut("It is 30 days in " + monthName);
}else {printOut("It is 31 days in " + monthName);}

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
if(monthName == "April") {
  printOut ("We moved to the building next door due to refubishment in April.");
}else if (monthName == "Mars" || monthName == "Mai") {
  printOut ("Sorry, the galley is closed for refubishment in " + monthName + " waiting for you in June!");
}else {printOut ("Welcome to the gallery!");
}
printOut(newLine);
