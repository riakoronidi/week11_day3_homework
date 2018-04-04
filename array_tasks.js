var arrayTasks = {

	concat: function (arr1, arr2) {
		return arr1.concat(arr2);
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index,0,itemToAdd);
		return arr;
	},

	square: function (arr) {
		const newArray = arr.map(element => element * element);
		return newArray;
	},

	sum: function (arr) {
		let total = 0;
		arr.forEach(function(element){
			total +=element;
		});
		return total;
	},

	findDuplicates: function (arr) {
		let duplicateArray = [];
		for(let i=0; i < arr.length; i++){
			//if element in previous position equals element in current position
			if(arr[i+1] === arr[i]){
				duplicateArray.push(arr[i]);
			}
		}
		// [4,5,5]
		// if element is not in the duplicateArray then add
		for(let i=0; i < duplicateArray.length; i++){
			if(duplicateArray[i+1] === duplicateArray[i]){
				duplicateArray.splice(i, 1);
			}
		}
		return duplicateArray;
	},


	removeAndClone: function (arr, valueToRemove) {
		const newArray = [];
		for(let element of arr){
			if(element !== valueToRemove){
				newArray.push(element);
			}
		}
		return newArray;
	},


	findIndexesOf: function (arr, itemToFind) {
		const newArray = [];
			for(let i=0; i < arr.length; i++){
				if(arr[i] === itemToFind){
					newArray.push(i);
				}
			}
		return newArray;
	},


	sumOfAllEvenNumbersSquared: function (arr) {
		const newArray = [];
		for(let element of arr){
			if(element % 2 === 0 ){
				newArray.push(element);
			}
		}
		const squareArray = arrayTasks.square(newArray);
		return arrayTasks.sum(squareArray);
	}

}

module.exports = arrayTasks
