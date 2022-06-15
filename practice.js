var bill=prompt("Enter the amount of the bill:");
var tip=0;
if (bill>=50 && bill<=300){
    tip=0.15*bill;
    console.log('The food was for ',bill,'the tip is ',tip,'the total becomes',tip+bill)
}
else if (bill>300){
    tip=0.20*bill;
    console.log(console.log('The food was for ',bill,'the tip is ',tip,'the total becomes',tip+bill))
}
else {
    console.log("Your total becomes",bill)
}