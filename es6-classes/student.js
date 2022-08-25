/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
  }
  getStudent() {
    return student;
  }
}

let student = new Student();

Student.prototype.getFullName = function () {
  const { firstName, lastName } = this;
  return `${firstName} ${lastName}`;
};

Student.prototype.getIntroduction = function () {
  const { subject } = this;
  const fullName = this.getFullName();
  return `Hello, my name is ${fullName} and I am studying ${subject}.`;
};
