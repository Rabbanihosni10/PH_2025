const friends=["Kalam","Tobarok","Salim","Nayek"];
console.log(friends);

//Does the element present there or not

console.log(friends.includes("Tobarok"));
console.log(friends.includes("Salim"));

if(friends.includes("Salim")){
    console.log("Party");
}
else{
    console.log("No Food! We are Fasting!");
}

//get the index of a perticular element

console.log(friends.indexOf("Tobarok"));   
console.log(friends.indexOf("Toba"));


// check its array or not (Array.isArray(___))
const friends1=[12,21,23,34];
const aspr="saffafda";
const rwwe=[];

console.log(Array.isArray(friends1));
console.log(Array.isArray(rwwe));
console.log(Array.isArray(aspr));

// .join()
// arr.concat(arr2);
// /var.slice(inx1,inx2);
// .splice()