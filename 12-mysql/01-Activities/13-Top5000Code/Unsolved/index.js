var mysql = require("mysql");
var inquirer = require("inquirer")


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8889,

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
    // start();
    console.log("connection successful");
});

// function songSearch() {
//     inquirer.prompt({
//         name: 'song',
//         type: 'input',
//         message: 'What song would you like to search for?'
//     }).then(function (answer) {
//         console.log(answer.song);
//         connection.query("SELECT * FROM top5000 WHERE ?", {
//             song: answer.song
//         }, function (err, res) {
//             console.log(
//                 "Position: " +
//                 res[0].position +
//                 " || Song: " +
//                 res[0].song +
//                 " || Artist: " +
//                 res[0].artist +
//                 " || Year: " +
//                 res[0].year
//             );
//             songSearch();
//         })
//     })
// }
