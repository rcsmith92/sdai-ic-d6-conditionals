// all code for this lab to be completed in this file
let currentTemperature = 40

//2 possibilites: it's freezing or it's not
if (currentTemperature > 32) {
    console.log("It is not freezing.")
} else {
    console.log("It is freezing")
}

//3 possibilities: odler, younger, or same age
// if...else if statement

let myAge = 32
let yourAge = 36

if (myAge === yourAge) {
    console.log("We are the same age!")
}  else if (myAge > yourAge) {
    console.log("I am older than you.")
}  else if (myAge < yourAge) {
    console.log("I am younger than you.")
}  else {
    console.log("Error! Try Again") 
}