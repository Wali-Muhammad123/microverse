/*const yearUntilRetirement = (birthYear,Name) => {
    const age=2037-birthYear;
    const retirment=60-age;
    return `${Name} retires at the age of ${retirment}`;
}
console.log(yearUntilRetirement(1997,'Joseph')); */
function cutFruit(fruit){
    return fruit*4;
}
function foodProcessor(apples,oranges){
    const applePieces=cutFruit(apples);
    const orangePieces=cutFruit(oranges);
    const juice=`Juice is made of ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
console.log(foodProcessor(2,3))
