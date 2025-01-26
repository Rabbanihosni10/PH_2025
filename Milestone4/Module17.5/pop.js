const friends=["Balam","Kalam","Salam","Pailam"];
console.log(friends);
friends.push("Nokib");
console.log(friends);

const out1= friends.pop();
console.log(friends);
const out2= friends.pop();    //pop from the last of the array
console.log(friends);
console.log(out1,out2);


console.log(friends);
friends.shift();    //pop from the 1st of the array
console.log(friends);

friends.unshift("tobarok");
console.log(friends);

// .push()
// .pop()
// .shift()
// .unshift()