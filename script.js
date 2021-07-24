
//love calculator
// Create a love calculator that gives produces a random number based on two names

// function loveCalculator(){
//     prompt("what is your name");
//     prompt("What is your spouses name");

//     let n = Math.random();
//     let compatibilty = Math.floor(n * 100) + 1;

//     alert("Your compatibility percentage is " + compatibilty + "%");

// }

// loveCalculator();



//BMI Calculator
//Create a function that figures out your BMI and gives feedback based on the results

// alert("Hello this is a program that will determine your bmi as well as if you're healthy or not. Select ok if you're ready");
// let weight = prompt("How much do you weigh?");
// let height = prompt("What is you height in inches?");

// function bmiCalculator (weight, height) {

//     let interpretation = 703 * weight/(height*height);

//     if (interpretation >= 25){
//         console.log("Your BMI is " + interpretation + " Based on this data you are currently overweight");
//     }
//     else if (interpretation >= 18.5 && interpretation <= 24.9){
//         console.log("Your BMI is " + interpretation + " Based on this data you are currently healthy");
//     }
//     else if (interpretation <= 24.9){
//         console.log("Your BMI is " + interpretation + " Based on this data you are currently underweight")
//     }
//     else{
//         console.log("Hmmm must be a mistake refresh the page and try inputing your numbers again");
//     }
//     return interpretation;

// }

// bmiCalculator(weight, height);


// Leap year challenge

// let year = prompt("Enter a year to determine if its a leap year or not");

// function isLeap(year) {

//     if(year % 4 === 0 && year % 400 === 0 && year % 100 !== 0){
//         console.log("year " + year + " is a leap year");
//     }
//     else if (year % 4 === 0 && year % 100 !== 0){
//         console.log("year " + year + " is a leap year");
//     }
//     else{
//         console.log("year " + year + " is not a leap year");
//     }
//     }

//     isLeap(year);

// Fizz Buzz Challenge


let output = []; 
let number = 1;


function fizzBuzz(){

    if(number % 3 === 0 && number % 5 === 0){
        output.push("FizzBuzz");
    }

    else if (number % 3 === 0){
        output.push("Fizz");
        
    }
    else if(number % 5 === 0){
        output.push("Buzz");
        

    }
    else{
        output.push(number);
    }

    number++
    console.log(output);
    
}


fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();






