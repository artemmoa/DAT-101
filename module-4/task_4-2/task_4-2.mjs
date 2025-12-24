"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let part1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
for(let i = 0; i< part1.length; i++){
    printOut(part1[i])
}
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

printOut(part1.join (" a "));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const textP3 = "Hei på deg, hvordan har du det?";
const arrayP3 = textP3.split(" ");
let outputP3 = " "; 
for(let i = 0; i < arrayP3.length; i++){
    const words = arrayP3[i];
    outputP3 += words + ": index = "+ i.toString()  + "; a word number " + (i+1).toString() + newLine;
}
printOut(outputP3);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const names = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
function remove (aArray, aText){
    const array =aArray;
    let textRemove = aText;
    let removeIndex = -1
    for(let i = 0; i< array.length; i++){
    textRemove = array[i];
    if(textRemove === aText){
        removeIndex = i;
        break; 
    }
    }

    if (removeIndex>= 0){
        printOut(textRemove + " is removed from the list.");
        array.splice(removeIndex,1);    
    }else{
        printOut(aText + " is not in the list.")
    }

}

remove(names, "Ingrid");
remove(names, "Alex");
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const namesP5 = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor"];
const allNames = names.concat(namesP5);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
class TBook{
#title = 0 
#author = 0
#isbn = 0
constructor(aTitle, aAuthor, aISBN){
this.#title = aTitle;
this.#author = aAuthor; 
this.#isbn  = aISBN;  
}
toString(){
    return this.#title + ", " + this.#author + ", " + this.#isbn
}

}

 let books = [ new TBook("title1", "author1", "number1"),
    new TBook("title2", "author2", "number2"),
    new TBook("title3", "author3", "number3")
 ] ;
for (let i=0; i<books.length; i++){
    printOut(books[i].toString())
}

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const EWeekDays = {
    Monday: { value: 0x01, name: "Monday" },
    Tuesday: { value: 0x02, name: "Tuesday" },
    Wednesday: { value: 0x04, name: "Wednesday" },
    Thursday: { value: 0x08, name: "Thursday" },
    Friday: { value: 0x10, name: "Friday" },
    Saturday: { value: 0x20, name: "Saturday" },
    Sunday: { value: 0x40, name: "Sunday" },
    WeekDays: { value: 0x01 | 0x02 | 0x04 | 0x08 | 0x10, name: "Weekdays" },
    Workdays: { value: 0x01 | 0x02 | 0x04 | 0x08 | 0x10, name: "Workdays" },
    Weekends: { value: 0x20 | 0x40, name: "Weekends" },
    WorkoutDays: { value: 0x01 | 0x04 | 0x08, name: "Workout days" }
};
let daysKey = Object.keys(EWeekDays);
for (let i = 0; i< daysKey.length; i++){
    printOut(daysKey[i]);
}


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let arrayP8 = [];
for (let i=0; i<36; i++){
let randNumber = Math.floor((Math.random()*20)+1)

arrayP8.push(randNumber); 
}
let ascending = arrayP8.sort(function(num1, num2){
    return num1-num2});
    printOut("Ascending: " + ascending.join(", "));
let descending = arrayP8.sort(function(num1, num2){
    return num2-num1});
printOut("Descending: " + descending.join(", "));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

let counts = {};

for (let num of arrayP8) {
    if (counts[num] === undefined) {
        counts[num] = 1;
    } else {
        counts[num]++;
    }
}
let data = [];
for (let num in counts) {
    data.push({
        number: Number(num),
        freq: counts[num]
    });
}

data.sort(function(a, b) {
    if (b.freq !== a.freq) {
        return b.freq - a.freq;
    }
    return a.number - b.number;
});

for (let item of data) {
    printOut("Number " + item.number + " appears " + item.freq + " times");
}
let lastFreq = -1;
let line = "";

for (let item of data) {
    if (item.freq !== lastFreq) {
        if (line !== "") {
            printOut(line);
        }
        line = "Frequency " + item.freq + ": ";
        lastFreq = item.freq;
    }
    line += item.number + ", ";
}

if (line !== "") {
    printOut(line);
}
printOut(newLine);

//Det er så vanskeliiiig 

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let column = 0;
let row = 0;
let newCell = 0

class cell {
constructor(row, column){
    this.row = "row: " + row;
    this.column= "column: " + column;
}
 
}
let arrayP10 = [];

for (let i = 1; i < 6; i++){
    row = [];
    let colNum = i.toString();
        for (let c = 1; c < 10; c++){
        let rowNum = c.toString();
         newCell = new cell(colNum, rowNum);
        row.push(newCell);
    }
arrayP10.push(row)
}

for (let i = 0; i < arrayP10.length; i++){
    let rowPrint =  "";
    for (let c = 0; c<9; c++){
    let cell = arrayP10[i][c];
        rowPrint += `(${cell.row}:${cell.column})`;
    } 
printOut(rowPrint)
}
printOut(newLine);
