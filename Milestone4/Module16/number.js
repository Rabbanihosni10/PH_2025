var orangePrice=20;
var chocolate=0.5;
var applePrice="26";
var aplPrice=parseInt("26");
console.log(orangePrice);
console.log(typeof orangePrice);
console.log(applePrice);
console.log(typeof applePrice);
console.log(orangePrice+applePrice);
console.log(Number(applePrice)+orangePrice);
console.log(aplPrice);
console.log(parseInt("safdsdsfadfs"));
if(typeof applePrice === "string"){
    console.log(true);
}
else{
    console.log(false);
}
applePrice=parseInt(22.5);
console.log(applePrice);
applePrice=parseFloat(22.5);
console.log(applePrice);

var first=0.1;
var second=0.2;
var total=first+second;
console.log(total);
console.log(total.toFixed(3));
console.log(typeof total.toFixed(2));

console.log(50/0);