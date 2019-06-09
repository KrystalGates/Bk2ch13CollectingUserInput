// Practice: These are a few of my favorite things
// Build two fieldsets and input fields that will allow 
// you to enter the name of a favorite thing of yours, and 
// a location where you might purchase it (Target, Amazon, 
//     Best Buy, etc...)

// Add a button beneath the fieldsets labeled "Save to Wishlist".

// When the button is clicked, display the data in the following 
// format in the DOM.

const container = document.querySelector("#wishList")

document.querySelector("#saveEntry").addEventListener("click", event => {
    const item =document.querySelector("#favThing").value
    const location = document.querySelector("#store").value
    // CHALLENGE 2
    if (item === "") {
        alert("Please enter in all information!")
    }
    else if (location === ""){
        alert("Please enter in all information!")
    }
    else {
    container.innerHTML += `<div>
    I can purchase ${item} at ${location}.
    </div>
    `
    }
// CHALLENGE 1
    document.getElementById("wish").reset();
    document.getElementById("favThing").focus();
})

// Challenge 1
// When you click the button and the new favorite thing is 
// added to the DOM, clear out the value of both input fields. 
// Then set the focus to the first input field.

// // Challenge 2
// // When you click the button check if both input fields have 
// // a value that is not empty string (""). If it is that, then 
// // you did not type anything into that input field.

// // If either input field is blank, do not add anything to 
// // the DOM and alert the user that they need to enter in all 
// // information.


