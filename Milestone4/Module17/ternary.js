/**
 * Ternary-->Three parts
 * condition ? do vote: ghumai thako
 */
const age=20;
if(age>=18){
    console.log("You can vote.");
}
else{
    console.log("Jau bacha ghumai thako!");
}



// simple ternary
age>=18? console.log("Vote Dio"): console.log("Ghumai thako!");

let price=500;
const isLeader=true;

if(isLeader===true){
    price=0;

}
else{
    price+=100;
}
console.log(price);


price=isLeader===true?0:price+100;


console.log(price);

price=isLeader===true?(price > 1000)?(price/2):0:price+1000