function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
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

Student.prototype.getAverage = function getAverage () {
  let sum = 0;
  this.marks.forEach((item, idx, arr) => sum = sum + item);
  sum = sum / this.marks.length;
  sum.toFixed();
  return Number(sum);
}

Student.prototype.exclude = function (reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
}
