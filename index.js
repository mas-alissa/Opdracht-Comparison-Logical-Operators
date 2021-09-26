/* opdracht gebruik if else statements
//Deel - 1

const age = 20;

if(age >= 18){
    console.log("This age is greater or equal to 18 years old, You can go inside ")
} else {
    console.log("Sorry you can not go inside becouse your age is less than 18 years old")
}



//Deel - 2

const isFemale = true;

if(isFemale){
    console.log("Yes , you are female");
} else {
    console.log("No , You are not female");
}

//Deel - 3

const driverStatus = "bob";

if(driverStatus === "bob"){
    console.log("Mag rijden")
} else {
    console.log("Mag niet rijden")
}

*/




///////////////////////////////////////////////

//Opdracht: Comparison && Logical Operators


//Deel - 1
const age = 25;

if(age >= 18 && age <= 25){
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Je krijgt geen korting!")
}


// Deel - 2

const firstName = "Sarahs";

if(firstName === "Bram" || firstName === "Sarah"){
    console.log("Je krijgt een gratis biertje op deze feestelijke dag!")
} else {
    console.log("Sorry, je hebt geen recht op een gratis biertje!")
  
}


// Deel - 3

const totalAmount = 26;

if(totalAmount >= 100){
    console.log("je krijgt gratis flesje champagne")
} else if(totalAmount > 50){
    console.log("je krijgt gratis portie nachos")
} else if(totalAmount > 25 ){
    console.log("je krijgt gratis (vega)bitterballen")

}