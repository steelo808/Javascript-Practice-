
//love calculator
// Create a love calculator that gives produces a random number 1-100 based on two names

// function loveCalculator(){
//     prompt("what is your name");
//     prompt("What is your spouses name");

//     let n = Math.random();
//     let compatibilty = Math.floor(n * 100) + 1;

//     alert("Your compatibility percentage is " + compatibilty + "%");

// }

// loveCalculator();



//BMI Calculator
//Create a function that determines your BMI and gives feedback based on the results

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
//create a function that determines what year is a leap year

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



    //isLeap(year);

// Fizz Buzz Challenge Using Arrays only
// Write a short program that prints each number from 1 to 100 on a new line. 

// For each multiple of 3, print "Fizz" instead of the number. 

// For each multiple of 5, print "Buzz" instead of the number. 

// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.FizzBuzz

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


//fizzBuzz();

// Whos Buying Lunch Program
//Create a program that determines who is buying lunch using an array
let names = ["Sterling", "Tatiyana", "Split"];

function whosPaying(names){

    let numberOfPeople = names.length;
    let randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    let randomPerson = names[randomPersonPosition];
    
    if (randomPerson === "Split"){
        console.log("You both are spliting the bill today!")
    }
    else{
    console.log(randomPerson + " is going to buy today");
    }
}

whosPaying(names);


// FizzBuzz program using the for loop 

function fizzBuzz(){

for (n = 1; n<= 100; n++){

    if(n % 3 === 0 && n % 5 === 0){
        console.log("FizzBuzz")
    }else if (n % 3 === 0){
        console.log("Fizz");
    }else if(n % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(n);
    }
}
}

fizzBuzz();