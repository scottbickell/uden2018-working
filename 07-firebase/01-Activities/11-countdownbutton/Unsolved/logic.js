// Initialize Firebase (YOUR OWN APP)
var config = {
    apiKey: "AIzaSyBkcn-hCDJBISa2ElRH2LNBGf3NVsc6kG0",
    authDomain: "countdown-button2.firebaseapp.com",
    databaseURL: "https://countdown-button2.firebaseio.com",
    projectId: "countdown-button2",
    storageBucket: "countdown-button2.appspot.com",
    messagingSenderId: "168591405426"
};
firebase.initializeApp(config);

// URL to view the database
// https://console.firebase.google.com/u/0/project/countdown-button2/database/countdown-button2/data/

// VARIABLES
// --------------------------------------------------------------

// Create a variable to reference the database

var database = firebase.database();

// Use the below initialValue
var initialValue = 100;

// Use the below variable clickCounter to keep track of the clicks.
var clickCounter = initialValue;

// FUNCTIONS + EVENTS
// --------------------------------------------------------------

// I MOVED THIS EVENTS SECTION ABOVE THE MAIN PROCESS + INITIAL CODE SECTION (LIKE IN THE PREVIOUS CLICKBUTTON EXAMPLE)

// Whenever a user clicks the click button
$("#click-button").on("click", function () {

    // Reduce the clickCounter by 1
    clickCounter--;

    // Alert User and reset the counter
    if (clickCounter === 0) {

        alert("Phew! You made it! That sure was a lot of clicking.");

        clickCounter = initialValue;

    }

    // Save new value to Firebase

    database.ref().set({
        clickCount: clickCounter
    });

    // Log the value of clickCounter
    console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function () {

    // Set the clickCounter back to initialValue
    clickCounter = initialValue;

    // Save new value to Firebase

    database.ref().set({
        clickCount: clickCounter
    });

    // Log the value of clickCounter
    console.log(clickCounter);

    // Change the HTML Values
    $("#click-value").text(clickCounter);

});

// MAIN PROCESS + INITIAL CODE
// --------------------------------------------------------------------------------

// At the initial load and on subsequent data value changes, get a snapshot of the current data. (I.E FIREBASE HERE)
// This callback keeps the page updated when a value changes in firebase.
// HINT: Assuming 'database' is our database variable, use...
// database.ref().on("value", function(snapshot)) {}

database.ref().on("value", function (snapshot) {

    // We are now inside our .on function...

    // Console.log the "snapshot" value (a point-in-time representation of the database)
    // This "snapshot" allows the page to get the most current values in firebase.

    console.log(snapshot.val());

    // Change the value of our clickCounter to match the value in the database
    // ___________ = snapshot.val().______________________

    clickCounter = snapshot.val().clickCount;

    // Console Log the value of the clickCounter

    console.log(clickCounter);

    // Change the HTML using jQuery to reflect the updated clickCounter value

    $("#click-value").text(clickCounter);

}, function (errorObject) {

    // In case of error this will print the error
    console.log("The read failed: " + errorObject.code);
});