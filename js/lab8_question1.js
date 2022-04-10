let student = {
	firstName: '',
	lastName: '',
	grades: [],
	inputNewGrade: function(newGrade) {
		console.log(this.grades);
		this.grades.push(newGrade);
	},
	computeAverageGrade: function() {
		return this.grades.reduce((aggregate, element) => aggregate + element, 0)/this.grades.length;
	}
};

let student1 = Object.create(student);
student1.inputNewGrade(98);
student1.inputNewGrade(65);

let student2 = Object.create(student);
student2.inputNewGrade(87);
student2.inputNewGrade(47);

let student3 = Object.create(student);
student3.inputNewGrade(75);
student3.inputNewGrade(89);

let studentArray = [student1, student2, student3];
let averageOfAllStudents = studentArray.reduce((aggregate, element) => aggregate + element.computeAverageGrade(), 0)/studentArray.length;
// console.log(`The average of all student grade is : ${averageOfAllStudents}`);