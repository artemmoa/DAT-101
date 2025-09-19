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
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
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