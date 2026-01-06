"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

let cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
let txtRectWidth = document.getElementById("txtRectWidth");
let txtRectHeight = document.getElementById("txtRectHeight");
let txtTask1Output = document.getElementById("txtTask1Output");
cmbTask1Calculate.addEventListener("click", function(event){
    let width = parseFloat(txtRectWidth.value);
    let height = parseFloat(txtRectHeight.value);
    let perimeter = (width + height) * 2;
    let area = width * height;
    txtTask1Output.textContent = "Circumference = " + (perimeter)+  "Area = " + (area);
})

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
let txtTask2Word = document.getElementById("txtTask2Word");
let txtTask2Output  = document.getElementById("txtTask2Output");
let arrayWords = [];
function txtTask2WordKeyPress(event){
  if (event.key !== "Enter") return;
arrayWords.push(txtTask2Word.value);

  txtTask2Output.textContent = "Number of words = " + arrayWords.length;
  txtTask2Word.value = "";
}
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);


//--- Part 3 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/

let cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
let txtTask3Output = document.getElementById ("txtTask3Output"); 
cmbTask3CheckAnswer.addEventListener("click", function(event){
   const checked = document.querySelectorAll(
    'input[name="chkTask3"]:checked');
    let resultCheckboxes = "Checked boxes: "; 
    for( let i of checked){
      resultCheckboxes += i.value + "; ";
    }
txtTask3Output.textContent = resultCheckboxes;
})

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
let divTask4Cars = document.getElementById("divTask4Cars");
let txtTask4Output = document.getElementById("txtTask4Output");

for (let brand of CarTypes){
  const radioButton = document.createElement("input")
  const label = document.createElement("label");

  radioButton.type = "radio";
  radioButton.name = "cars";  
  radioButton.value = brand.caption;
  // radioButton.textContent = brand.caption
  label.append(radioButton, " " + brand.caption);
  divTask4Cars.append(radioButton);
  divTask4Cars.append(label);
 }
divTask4Cars.addEventListener("change", function(event){
 const selectedRadio = event.target;
txtTask4Output.textContent = "Car: " + selectedRadio.value 
})

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
let selectTask5Animals = document.getElementById("selectTask5Animals");
let txtTask5Output =document.getElementById("txtTask5Output");

selectTask5Animals.addEventListener("change", function(event){
 let selectResult = event.target.selectedOptions[0].textContent;
  txtTask5Output.textContent = "Selected " + selectResult;
})

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
let selectTask6Girls = document.getElementById("selectTask6Girls");
let txtTask6Output = document.getElementById("txtTask6Output");

for(let name of GirlsNames){
  let nameOption = document.createElement("option");
  nameOption.value = name; 
  nameOption.textContent = name; 
  selectTask6Girls.append(nameOption);
};
selectTask6Girls.addEventListener("change", function(event){
  let selectName =  event.target.value 
  txtTask6Output.textContent = "Name: " + selectName;
})

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Put your code below here!*/
let selectMovieGenre = document.getElementById("selectMovieGenre");
let tblMovies = document.getElementById("tblMovies"); 
let txtMovieTitle = document.getElementById("txtMovieTitle");
let txtMovieDirector = document.getElementById("txtMovieDirector");
let txtMovieRate = document.getElementById("txtMovieRate");
let cmbAddMovie = document.getElementById("cmbAddMovie"); 
let moiveData = [];

for (let genre of MovieGenre){
  let optionGenre = document.createElement("option");
  optionGenre.value =genre; 
  optionGenre.textContent = genre;    
  selectMovieGenre.append(optionGenre)
};




