class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.score = [];
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.score.push(score);
    return this.score;
  }
}

const firstStudent = new Student('Lim', 'Jaedo', 1);
const secondStudent = new Student('Colt', 'Steele', 2);

console.log(firstStudent);
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());
console.log(secondStudent.markLate());
console.log(firstStudent.fullName());
console.log(secondStudent.fullName());
