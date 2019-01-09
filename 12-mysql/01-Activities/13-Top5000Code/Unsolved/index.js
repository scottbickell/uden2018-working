var mysql = require("mysql");
var inquirer = require("inquirer")


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "top_songsDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

function songSearch() {
  inquirer.prompt({
    name: 'song',
    type: 'input',
    message: 'What song would you like to search for?'
  }).then(answer) => {
    const query = 'SELECT postition, song, year FROM'
  }
}

// function start() {
//   inquirer
//     .prompt({
//       name: "postOrBid",
//       type: "rawlist",
//       message: "Would you like to [POST] an auction or [BID] on an auction?",
//       choices: ["POST", "BID"]
//     })
//     .then(function(answer) {
//       // based on their answer, either call the bid or the post functions
//       if (answer.postOrBid.toUpperCase() === "POST") {
//         postAuction();
//       } else {
//         bidAuction();
//       }
//     });
// }