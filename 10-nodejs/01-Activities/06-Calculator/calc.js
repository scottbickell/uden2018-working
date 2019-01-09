// node calculator.js add 1 2 ... and outputs 3
// node calculator.js subtract 5 2 ... and outputs 3
// node calculator.js multiply 3 2 ... and outputs 6
// node calculator.js divide 8 2 ... and outputs 4
// node calculator.js remainder 7 2... and outputs 1

let operand = process.argv[2];
let val1 = process.argv[3];
let val2 = process.argv[4];
var outputNumber;

if (operand === "add") {
    outputNumber = (parseInt(val1) + parseInt(val2));
}

if (operand === "subtract") {
    outputNumber = (parseInt(val1) - parseInt(val2));
}

if (operand === "multiply") {
    outputNumber = (parseInt(val1) * parseInt(val2));
}

if (operand === "divide") {
    outputNumber = (parseInt(val1) / parseInt(val2));
}

if (operand === "remainder") {
    outputNumber = (parseInt(val1) % parseInt(val2));
}

// print the result
console.log(outputNumber);
