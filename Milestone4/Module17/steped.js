/**
 *  Multi_level Condition
 *  
 * */ 

const price=5000;
if(price>=5000){
    //10% discount
    const discount= price*(10/100);
    const pay=price-discount;
    console.log(pay);
}
else if(price>2500){
    //5% discount
    const dis=price*(10/100);
    const payAmount=price-dis;
    console.log(payAmount);
}
else{
    console.log(price);
}