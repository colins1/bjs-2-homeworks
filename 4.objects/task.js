function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.grades = {};
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){
      this.marks = [mark];
      } else {
          this.marks.push(mark);
      }
}

Student.prototype.addMarks = function (...marksAll) {
      this.marks = marksAll;
}

Student.prototype.getAverage = function () {
  let course_count = 0;
  let sum = 0;
    for (let course in this.marks) {
      sum += course;
    }
    sum = sum / this.marks.length;
    return Number(sum.toFixed());
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}

Number(
