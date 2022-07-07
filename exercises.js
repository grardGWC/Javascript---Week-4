var numOne = 7; 
var numTwo = 5; 

//VERY EASY 
function min(numOne, numTwo){
    if(numOne > numTwo){
        console.log(numTwo);
    }else if(numTwo > numOne){
        console.log(numOne); 
    }else{
        console.log(`You entered an incorrect value. Please try again. `)
    }
}
min(numOne, numTwo); 

//EASY
const studentOne = {firstName:"Grecia", lastName: "Ardiles", age: 20}; 
const studentTwo = {firstName:"Megan", lastName: "Ardiles", age: 18};
const studentThree = {firstName:"Nathaly", lastName: "Ardiles", age: 25};

console.log(`Hello, my name is ${studentTwo["firstName"]} ${studentTwo["lastName"]} and I'm ${studentTwo["age"]} years old.`); 

//MEDIUM 

let person = prompt("Please enter a number 1-12"); 
var input = parseInt(person); 

if(input === 1){
    alert("January"); 
}else if(input === 2){
    alert("Feburary"); 
}else if(input === 3){
    alert ("March"); 
}else if(input === 4){
    alert("April"); 
}else if(input === 5){
    alert("May"); 
}else if(input === 6){
    alert("June"); 
}else if(input === 7){
    alert("July"); 
}else if(input === 8){
    alert("August"); 
}else if(input === 9){
    alert("September"); 
}else if(input === 10){
    alert("October"); 
}else if(input === 11){
    alert("November"); 
}else if(input === 12){
    alert("December"); 
}else{
    alert("Invalid number"); 
}

//HARD
const TomInfo = {height: 9, mass: 8}; 
const JerryInfo = {height: 10, mass: 45}; 

function BMI(mass, height){
    var result = (mass / (Math.pow(height,2))); 
    console.log(result); 
}
var resultForTom = BMI(TomInfo["mass"], TomInfo["height"]); 
var resultForJerry = BMI(JerryInfo["mass"], JerryInfo["height"]); 

const x = false; 
if(resultForTom > resultForJerry){
    console.log(`Is Tom's BMI higher than Jerry? ${x}`); 
}else{
    console.log(`Is Tom's BMI higher than Jerry? ${!x}`); 
}

