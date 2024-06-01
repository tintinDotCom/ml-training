/**
 * Write a function that computes the average marks of the following students: Then this average is used to determine the corresponding grade.
 * - John: 90
 * - Jane: 85
 * - Joe: 95
 * - Tom: 65
 * - Nancy: 75
 *
 * Grade computed as follows:
 * < 60 : F
 * 60-70 : D
 * 70-80 : C
 * 80-90 : B
 * > 90 : A
 * @return {number} The average marks of the students.
 */

function Average() : number {
  const students = [
    { name: "John", mark: 90 },
    { name: "Jane", mark: 85 },
    { name: "Joe", mark: 95 },
    { name: "Tom", mark: 95 },
    { name: "Nancy", mark: 75 },
  ];

  let totalMarks : number = 0;
  for (let student of students) {
    let grade : string;
    if (student.mark < 60) {
      grade = 'F';
    } else if (student.mark >= 60 && student.mark <= 69) {
      grade = 'D';
    } else if (student.mark >= 70 && student.mark <= 79) {
      grade = 'C';
    } else if (student.mark >= 80 && student.mark <= 89) {
      grade = 'B';
    } else {
      grade = 'A';
    }
    console.log(`Name: ${student.name}\nMark: ${student.mark}\nGrade: ${grade}\n`);
    totalMarks += student.mark
  }

  const averageMarks = totalMarks / students.length;
  return averageMarks;
}

Average()

