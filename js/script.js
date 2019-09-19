"use strict";

const input = document.getElementById("input"), // input/output button
    numbers = document.querySelectorAll(".numbers div"), // number buttons
    operators = document.querySelectorAll(".operators div"), // operator buttons
    result = document.getElementById("result"), // equal button
    clear = document.getElementById("clear"); // clear button

let resultDisplayed = false; // flag to keep an eye on what output is displayed

// numbers is a NodeList object, we need to make it into an array first, then we can map through it...
numbers.forEach(function(number){
    number.addEventListener("click", function(e){
        if(this.innerHTML === "C"){
            input.innerHTML = ""
        } else {
            input.innerHTML += this.innerHTML;
        }
    })
});
// adding click handlers to the calculation buttons
operators.forEach(function(operator){
    operator.addEventListener("click", function(e){
        input.innerHTML += this.innerHTML;
    })
});
// on click of 'equal' button, perform the mathematical operation
result.addEventListener("click", function(e){
    var numArr = (input.innerHTML).split(/\+|\-|\×|\÷/g);
    console.log(numArr);
    var symbs = (input.innerHTML).match(/\+|\-|\×|\÷/g);
    console.log(symbs)
    while(symbs.length > 0){
        if(symbs.indexOf("\×") >-1){
            let newNum = numArr[symbs.indexOf("\×")]*numArr[symbs.indexOf("\×")+1];
            numArr.splice(symbs.indexOf("\×"),2,newNum);
            symbs.splice(symbs.indexOf("\×"),1)
        } else{
        if(symbs.indexOf("\÷") >-1){
            let newNum = numArr[symbs.indexOf("\÷")]/numArr[symbs.indexOf("\÷")+1];
            numArr.splice(symbs.indexOf("\÷"),2,newNum);
            symbs.splice(symbs.indexOf("\÷"),1)
        } else {
        if(symbs.indexOf("\+") >-1){
            let newNum = numArr[symbs.indexOf("\+")]+numArr[symbs.indexOf("\+")+1];
            numArr.splice(symbs.indexOf("\+"),2,newNum);
            symbs.splice(symbs.indexOf("\+"),1)
        } else {
        if(symbs.indexOf("\-") >-1){
            let newNum = numArr[symbs.indexOf("\-")]-numArr[symbs.indexOf("\-")+1];
            numArr.splice(symbs.indexOf("\-"),2,newNum);
            symbs.splice(symbs.indexOf("\-"),1)
        }
    }}}}
    console.log(numArr[0])
    input.innerHTML = numArr[0]
    });