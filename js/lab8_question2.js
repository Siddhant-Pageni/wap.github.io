function Student(fname, lname) {
	this.firstName= fname;
	this.lastName= lname;
	this.grades= [];
};

Student.prototype.inputNewGrade = function(newGrade) {
		this.grades.push(newGrade);
	};
Student.prototype.computeAverageGrade = function() {
		return this.grades.reduce((previousElement, currentElement) => previousElement + currentElement, 0)/this.grades.length;
	};

let student1 = new Student('Siddhant', 'Pageni');
student1.inputNewGrade(98);
student1.inputNewGrade(78);

let student2 = new Student('John', 'Doe');
student2.inputNewGrade(67);
student2.inputNewGrade(87);

let student3 = new Student('Jack', 'Hun');
student3.inputNewGrade(84);
student3.inputNewGrade(87);

let studentArray = [student1, student2, student3];
let averageOfAllStudents = (student1.computeAverageGrade() + student2.computeAverageGrade() + student3.computeAverageGrade()) / 3;

console.log(`The average of all student grade is : ${averageOfAllStudents}`);