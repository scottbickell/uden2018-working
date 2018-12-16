function lessonStarted(subject, callback) {
  console.log(`Today we learned about ${subject}.`);
  callback(subject);
}

function lessonFinished(subject) {
  console.log(`I am now a Jedi Master knowing ${subject}. `);
}
lessonStarted('Callbacks', lessonFinished);
