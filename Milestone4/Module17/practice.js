/**
 * Free Drinks
 * -Burger more than 500 tk : free Coke
 * -Else Coke: 30tk
*/

let pocket=1000;
let burger=700;
if(burger>500){
    pocket-=burger;
    console.log("You have:",pocket,"TK");
    console.log("The Coke is free!");
}
else{
    pocket-=burger;
    pocket-=30;
    console.log("You have:",pocket,"TK");
}



/**
 * BMI Calculator(Program):
 */
const weight= 97;
const height=1.60;
const BMI=weight/(height**2);
console.log("Your BMI is:", BMI);
if(BMI<18.5){
    console.log("You are underweight");
}
else if(BMI >=18.5 && BMI <=24.9){
    console.log("You are Normal");
}
else if(BMI >=25 && BMI <=29.9){
    console.log("You are Overweight");
}
else{
    console.log("You are Obase");
}

//Grade Calculator

const mark=82;
let grade="";
if (mark>0){
    if (mark>=90 && mark<=100){
        grade+="A";
        console.log(`Your Mark is ${mark} and Your grade is ${grade}`);
    }
    else if(mark>=80 && mark<=89){
        grade+="B";
        console.log(`Your Mark is ${mark} and Your grade is ${grade}`);
    }
    else if(mark>=70 && mark<=79){
        grade+="C";
        console.log(`Your Mark is ${mark} and Your grade is ${grade}`);
    }
    else if(mark>=60 && mark<=69){
        grade+="D";
        console.log(`Your Mark is ${mark} and Your grade is ${grade}`);
    }
    else{
        grade+="F";
        console.log(`Your Mark is ${mark} and Your grade is ${grade}`);
    }
}
else{
    console.log("Your Mark is Invalid!");
}

const friend_mark=40;
if (mark>=80){
    if(friend_mark >= 80){
        console.log("Go for a lunch!");
    }
    else if(friend_mark < 80 && friend_mark>=60){
        console.log("Good Luck next time");
    }
    else if(friend_mark < 60 && friend_mark>=40){
        console.log("Keep Friend Message Unseen");
    }
    else if(friend_mark < 40){
        console.log("Block Your Friend!");
    }
}
else{
    console.log("Go Home and Sleep and Act Sad");
}

//ternary
let num1=22;
let num2=43;
let result=0;
result=(num1>num2)?(num1*2):(num1+num2);
console.log(result);