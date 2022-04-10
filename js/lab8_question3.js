Array.prototype.sort = function() {
	console.log(this);
	if(this.length < 2) return this;
	return bubbleSort(this, this.length);
};

function bubbleSort(arr, n){
	console.log("Sorting!!");
	let i, j;
	for (i = 0; i < n-1; i++){
	    for (j = 0; j < n-i-1; j++){
	        if (arr[j] > arr[j+1]){
	        	swap(arr,j,j+1);
	        }
	    }
	 
	}
	return arr;
}

function swap(arr, i, j){
	console.log(`Swapping ${arr[i]} and ${arr[j]}`);
	let temp = arr[i];
	arr[i] = arr[j]
	arr[j] = temp;
}


let arr = [3, 2, 1, 5];
console.log(arr.sort());