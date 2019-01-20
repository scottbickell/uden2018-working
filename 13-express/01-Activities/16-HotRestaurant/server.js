// Dependencies
// =============================================================
var express = require("express");
// var nodemon = require("nodemon");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Star Wars Characters (DATA)
// ===================================================
var reservations = [{
        customerName: "Scott",
        phoneNumber: "9874563289",
        customerEmail: "scott@scott.com",
        customerID: "1"
    },
    {
        customerName: "Bill",
        phoneNumber: "1234567890",
        customerEmail: "bill@bill.com",
        customerID: "2"
    },
    {
        customerName: "Tom",
        phoneNumber: "1111111111",
        customerEmail: "tom@tom.com",
        customerID: "3"
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

// Displays all tables
app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

// Displays all waitlist
// app.get("/api/waitlist", function (req, res) {
//     return res.json(reservations);
// });

// Displays a single character, or returns false
// app.get("/api/characters/:character", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

// Create New Characters - takes in JSON input
// app.post("/api/characters", function (req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     var newcharacter = req.body;

//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//     console.log(newcharacter);

//     characters.push(newcharacter);

//     res.json(newcharacter);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});