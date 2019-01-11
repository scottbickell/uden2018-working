// Create a website with four routes:
// Home
// Favorite Foods
// Favorite Movies
// Favorite CSS Frameworks
// Each route should be triggered by a different URL.
// Each route should display an HTML page listing your favorite three things of each.
// Be sure to use fs to serve your HTML files.

// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Starts our server
server.listen(PORT, function () {
  console.log("Server is listening on PORT: " + PORT);
});


// Create a function which handles incoming requests and sends responses
function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {


    // HOME
    case "/":
      return fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      });

      // FOOD
    case "/food":
      return fs.readFile(__dirname + "/food.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      });

      // MOVIES
    case "/movies":
      return fs.readFile(__dirname + "/movies.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      });

      // CSS
    case "/css":
      return fs.readFile(__dirname + "/css.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      });

      // DEFAULT
    default:
      return fs.readFile(__dirname + "/index.html", function (err, data) {
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.end(data);
      });
  }
}