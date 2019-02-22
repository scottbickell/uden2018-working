/* TODO:

  1. Make a reusable function for creating a table body in index.html with the results from your MongoDB query
  Each row should have info for one animal.

  2. Make two AJAX functions that fire when users click the two buttons on index.html.
      a. When the user clicks the Weight button, the table should display the animal data sorted by weight.
      b. When the user clicks the Name button, the table should display the animal data sorted by name.

  Good luck!

  *Hint*: We don't want to keep adding to the table with each button click. We only want to show the new results.
  What can we do to the table to accomplish this?

  *Bonus*: Write code to set an 'active' state on the column header. It should make the color sorted-by column red.
  *Bonus*: Add additional ways to sort (e.g. by class or number of legs)
*/

// We'll be rewriting the table's data frequently, so let's make our code more DRY
// by writing a function that takes in data (JSON) and creates a table body
function displayResults(data) {
  // Add to the table here...
}

$.getJSON("/all", function(data) {
  // Call our function to generate a table body
  displayResults(data);
  console.log(data);

  var newRow = $("<tr>").append(
    $("<td>").text(animals.name),
    $("<td>").text(empRole),
    $("<td>").text(empStartPretty),
    $("<td>").text(empMonths),
    $("<td>").text(empRate),
    $("<td>").text(empBilled)
  );

  // Append the new row to the table
  $("#employee-table > tbody").append(newRow);
});


// will build the table
  // // Create the new row


// EXAMPLE TABLE

// $("#add-employee-btn").on("click", function(event) {
//   event.preventDefault();

//   // Grabs user input
//   var empName = $("#employee-name-input").val().trim();
//   var empRole = $("#role-input").val().trim();
//   var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");
//   var empRate = $("#rate-input").val().trim();

//   // Creates local "temporary" object for holding employee data
//   var newEmp = {
//     name: empName,
//     role: empRole,
//     start: empStart,
//     rate: empRate
//   };

//   // Uploads employee data to the database
//   database.ref().push(newEmp);

//   // Logs everything to console
//   console.log(newEmp.name);
//   console.log(newEmp.role);
//   console.log(newEmp.start);
//   console.log(newEmp.rate);

//   alert("Employee successfully added");

//   // Clears all of the text-boxes
//   $("#employee-name-input").val("");
//   $("#role-input").val("");
//   $("#start-input").val("");
//   $("#rate-input").val("");
// });

// // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
// database.ref().on("child_added", function(childSnapshot) {
//   console.log(childSnapshot.val());

//   // Store everything into a variable.
//   var empName = childSnapshot.val().name;
//   var empRole = childSnapshot.val().role;
//   var empStart = childSnapshot.val().start;
//   var empRate = childSnapshot.val().rate;

//   // Employee Info
//   console.log(empName);
//   console.log(empRole);
//   console.log(empStart);
//   console.log(empRate);

//   // Prettify the employee start
//   var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

//   // Calculate the months worked using hardcore math
//   // To calculate the months worked
//   var empMonths = moment().diff(moment(empStart, "X"), "months");
//   console.log(empMonths);

//   // Calculate the total billed rate
//   var empBilled = empMonths * empRate;
//   console.log(empBilled);

//   // Create the new row
//   var newRow = $("<tr>").append(
//     $("<td>").text(empName),
//     $("<td>").text(empRole),
//     $("<td>").text(empStartPretty),
//     $("<td>").text(empMonths),
//     $("<td>").text(empRate),
//     $("<td>").text(empBilled)
//   );

//   // Append the new row to the table
//   $("#employee-table > tbody").append(newRow);
// });