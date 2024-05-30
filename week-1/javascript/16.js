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


function average(){
  const students = [
    { name: "John", mark: 90 },
    { name: "Jane", mark: 85 },
    { name: "Joe", mark: 95 },
    { name: "Tom", mark: 65 },
    { name: "Nancy", mark: 75 },
  ];


  const totalMarks = students.reduce((sum,student) => sum + student.mark, 0);
  const averageMarks = totalMarks / students.length;
  let grade = '';

  if (averageMarks < 60){
    grade = 'F';
  } else if (averageMarks >= 60 && averageMarks < 70 ){
    grade = 'D';
  } else if (averageMarks >= 70 && averageMarks < 80){
    grade = 'C';
  } else if (averageMarks >= 80 && averageMarks < 90){
    grade = 'B';
  } else {
    grade = 'A'
  }

  return (`Average Mark: ${averageMarks} \n  Grade: ${grade}`)
}


const result = average();
console.log(`${result}`)