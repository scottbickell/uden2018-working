const fs = require("fs");

// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "transaction" (add, subtract, multiply, etc) and the numbers
var transaction = inputString[2];
var num1 = inputString[3];
// var num2 = inputString[4];

var transaction = process.argv[2];

switch (transaction) {
    case "total":
        fs.readFile("bank.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            // read the contents of the file and add all the values together
            // console.log(data);

            const output = data.split(',');

            output.forEach(data => {

                function sum() {
                    var s = 0;
                    for (var i = 0; i < arguments.length; i++) {
                        s += arguments[i];
                    }
                    return s;
                    console.log(s);

                }


                // console.log(parseFloat(data));
                // var total = output.sum;
                // console.log(total);
            })
        })
        break;

    case "deposit":
        deposit();
        break;

        // case withdraw:
        //     // stuff for withdraw
        //     break;

        // case loto:
        //     // stuff for loto
        //     break;

    default:
        console.log("you didn't enter a value");
        break;
}

function total() {
    fs.readFile("bank.txt", "utf8", (err, data) => {
        data = data.split
    })
}

function deposit() {
    fs.appendFile("bank.txt", ", " + num1, function (err) {

        // If an error was experienced we will log it.
        if (err) {
            console.log(err);
        }
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
            console.log("Content Added!");
        }
    });
}