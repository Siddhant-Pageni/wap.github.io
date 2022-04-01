function sum(inputArray) {
	console.log("Input Integer Array : " + inputArray);
	let filteredArray = inputArray.filter(element => element > 20);
	console.log("Filtered Integer Array : " + filteredArray);
	let reduced = filteredArray.reduce((accumulator, item) => accumulator + item);
	console.log("Sum : "+reduced);
	return reduced;
}

const getNewArray = stringArray => {
	console.log("Input String Array : " + stringArray);
	let filteredStringArray = stringArray.filter(element => element.length >= 5 && element.toUpperCase().includes("A"));
	console.log("Filtered String Array : " + filteredStringArray);
	return filteredStringArray;
}
let inputArray = [100, 200, 50, 10, 5, 20, 30, 30];
let stringArray = ["Alphabet", "Ball", "Caviar", "Dodge", "Element", "Finland", "Garage"];


console.log("------------1-------------");
sum(inputArray);
console.log("------------2-------------");
getNewArray(stringArray);