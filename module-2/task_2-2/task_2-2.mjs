"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let a = 2+3*2-4*6
let b = 2+(3*(2-4)*6)
printOut("2+3*2-4*6 = " + a);
printOut("2+(3*(2-4)*6) = " + b);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let cmdist =25*100 + 34
let mmdist = (25*100 + 34)*10
let inchdist = mmdist / 25.4
let roundinches = inchdist.toFixed(2)
printOut("in inches = " + roundinches);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let TotalHours  = 3*24 + 12
let SecToMinutes = 45 / 60
let TotalMinutes = TotalHours * 60 + 14 + SecToMinutes
printOut("Total Minutes = " + TotalMinutes);
printOut(newLine);


printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let TaskMinutes = 6322.52, MinutesInDay = 60*24
let AnsDays = Math.floor(TaskMinutes / MinutesInDay)

let RemMinutesAfterDays = TaskMinutes % MinutesInDay
let AnsHours = Math.floor(RemMinutesAfterDays / 60)

let RemMinutesAfterHours = RemMinutesAfterDays % 60
let AnsMinutes = Math.floor(RemMinutesAfterHours)

let AnsSeconds = Math.round((RemMinutesAfterHours - AnsMinutes) * 60)
printOut("Days: " + AnsDays + " Hours: " + AnsHours + " Minutes: " + AnsMinutes + " Seconds: " + AnsSeconds);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const DollarToNok = 76 / 8.6 
const NoktoDollar = 8.6 / 76

let TotalDollar = 54
let TotalNok = TotalDollar * DollarToNok
printOut("54 USD = " + TotalNok.toFixed(0) + "kroner");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let myText = "There is much between heaven and earth that we do not understand."
let Spaces = myText.indexOf(" ") 
let totalSpaces = myText.split(" ").length;
let totalChars = myText.length
let totalCharsNoSpaces = totalChars - totalSpaces

let char19 = myText.charAt(19)

let char35plus = myText.slice(35, (35+8)); 

let earthIndex = myText.indexOf("earth");
printOut(myText);
printOut("Total characters (no spaces): " + totalCharsNoSpaces);
printOut("Character at index 19: " + char19);
printOut("Characters from index 35 plus 8: " + char35plus);
printOut("Index of 'earth': " + earthIndex);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let comp1 = 5 > 3 
let comp2 = 7 >= 7 
let comp3 = "a" > "b"
let comp4 = "1" < "a" 
let comp5 = "2500" < "abcd"
let comp6 = "arne" != "thomas" 
let comp7 = 2===5
let comp8 = !("abcd" > "bcd")  

printOut("5 > 3 is " + comp1);
printOut(" 7 >= 7 is " + comp2);
printOut('"a" > "b" is ' + comp3);
printOut('"1" < "a" is ' + comp4);
printOut('"2500" < "abcd" is ' + comp5); 
printOut('"arne" != "thomas" is ' + comp6);
printOut("2===5 is " + comp7);
printOut('!"abcd" > "bcd" is false? ' + comp8);
printOut(newLine);  

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let num1 = parseInt("254")
let num2 = parseInt("57.23")
let num3 = parseFloat("25kroner")
printOut("254 = " + num1);
printOut("57.23 = " + num2);
printOut("25kroner = " + num3);
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let r = Math.ceil(Math.random()*360)
printOut("Random 1 >= r <= 360 = " + r);
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let weeks = Math.floor(131/7)
let days = 131 % 7
printOut("131 days is " + weeks + " weeks and " + days + " days.");
printOut(newLine);