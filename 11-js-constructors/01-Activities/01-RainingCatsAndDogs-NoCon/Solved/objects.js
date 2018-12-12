var person = {
  fistName: "Matt",
  lastName: "Smith",
  age: 34,
  fullName: function() {
    return this.fistName + " " + this.lastName;
  }
};

console.log(person.fullName());
