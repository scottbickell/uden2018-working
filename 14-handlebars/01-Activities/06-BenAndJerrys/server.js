// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Data
var icecreams = [{
    name: 'vanilla',
    price: 10,
    awesomeness: 3
  },
  {
    name: 'chocolate',
    price: 4,
    awesomeness: 8
  },
  {
    name: 'banana',
    price: 1,
    awesomeness: 1
  },
  {
    name: 'greentea',
    price: 5,
    awesomeness: 7
  },
  {
    name: 'jawbreakers',
    price: 6,
    awesomeness: 2
  },
];

// Routes
// app.get("/icecreams", function (req, res) {
//   res.render("icecreams", icecreams[0]);
// });

// app.get("/weekend", function (req, res) {
//   res.render("index", lunches[1]);
// });

app.get("/icecreams", function (req, res) {
  res.render("icecreams", {
    icecreams: icecreams
  });
});

app.get("/icecream/:name", function (req, res) {
  res.render("icecreams", {
    icecreams: icecreams
  });
});


// syntax is busted
// app.get('/:route/:subroute', (req, res) {
//       const route = req.params.route;
//       const subroute = req.params.subroute
//       switch (route) {
//         case ('cast'):
//           doSomething();
//           break;
//         case ('coolness-chart'):
//           doSomething();
//           break;
//         case ('attitude-chart'):
//           doSomething(subroute);
//           break;
//       });

    // Start our server so that it can begin listening to client requests.
    app.listen(PORT, function () {
      // Log (server-side) when our server has started
      console.log("Server listening on: http://localhost:" + PORT);
    });