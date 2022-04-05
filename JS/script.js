/*
Website Name - Web-Calculator
Name : Vanshul Kesharwani
Date : 05/04/2022
Version : 4.1.1
Email : vkvanshulkesharwani54@gmail.com
Description : This is a Web calculator application for performing different types of calculations.this project works without refreshing page in javaScript.
*/

// Taken display of calculator.
let display = document.getElementById("display");

// Taken all buttons here.
let buttons = document.querySelectorAll(".table button");

// Empty display value so we can add later here.
let displayValue = "";

// Loop all buttons here for click event.
for (let button of buttons) {
    button.addEventListener("click", (e) => {
        // Taken display values here.
        let buttonText = e.target.innerText;
        if (buttonText == "=") {
            display.value = eval(displayValue);
        } else if (buttonText == "C") {
            display.value = "";
            displayValue = "";
        } else {
            displayValue += buttonText;
            display.value = displayValue;
        };
    });
};