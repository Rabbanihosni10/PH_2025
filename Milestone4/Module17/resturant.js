const age=17;
const price=1200;
if(age<=12){
    console.log("You can eat for free");
}
else if(age>=60){
    //50% discount
    const discount=price*(50/100);
    const payment=price-discount;
    console.log(payment);
}
else{
    console.log(price);
}