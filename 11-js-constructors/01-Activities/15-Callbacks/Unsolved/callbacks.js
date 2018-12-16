var fs = require("fs");

// Write a function that logs a message, then executes
// a function argument.

// Write a function that runs a function argument if
// its other argument is truthy.

// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.
// This isn't as hard as it sounds!

// Use fs.writeFile to log a message to a file called
// log.txt. Are yo using callbacks anywhere? Where?

function lessonStarted(suject, callback) {
    console.log(`Today we learned about ${subject}.`);
    callback(subject);
}

function lessonFinished(subject) {
    console.log(`I am now a Jedi master knowing ${subject}. `);
}
console.log( lessonStarted('Callbacks', lessonFinished));