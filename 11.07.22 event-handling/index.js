"use strict";

const myInput = document.querySelector("input#myInput");
const output = document.querySelector("#output");


const writeInput = (event) => {
    // to disable default handling
    event.preventDefault();
    // create p tag and populate it
    const newInput = document.createElement("p");
    // imput use .value instead of .innertext = attribute to get the value of the input 
    newInput.innerText = myInput.value;
    output.appendChild(newInput);

    myInput.value = "";
    myInput.focus();
}

const milesInput = document.querySelector("#milesinput");
const kmsInput = document.querySelector("#kmsInput");

const convertToKms = () => {
    const miles = parseFloat(milesInput.value);
    const kms = miles * 1.6;
    kmsInput.value = kms;
}

const convertToMiles = (event) => {
    console.log("EVENT:", event);
    const kms = parseFloat(event.target.value);
    const miles = kms/1.6;
    milesInput.value = miles;
}
