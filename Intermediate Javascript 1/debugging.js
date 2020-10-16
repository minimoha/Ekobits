// The throw keyword is used to create custom error, it can also be used together with an exception type. Optionally, a message can be added to give more details.

// The finally keyword is used with the try and catch statements, and the within the block executes regardless if there is an exception or not.

// A TypeError occurs when the operation you're trying to perform is not appropriate for the type of value it contains while A ReferenceError occurs when you try to use or access a variable that doesn't exist.

// A snippet is created by clicking on the sources tab and then new snippet

// An exception is an event that occurs during the execution of a program that disrupts the normal flow of instructions.


try {
    let k;
   	let x = k();
} catch(e){
   console.log(`The error message is: "${e.message}"`);
}


// 1.	Reference error
// 2.	Type error
// 3.	Type error
// 4.	Reference error

// Part 2
// 1.	Code won't run because 5 is lesser than i.
	// Corrected
	for(let i=0; i < 5; i++){
    		console.log(i);
	}
// 2.	Conditional statement uses assignment operator instead of equality operator
	// Corrected
	function addIfEven(num){
    if(num % 2 == 0){
        return num + 5;
    }
    return num;
}
//	Uses comma in the loop instead of semi-colon
//	Corrected
	function loopToFive(){
    for(let i=0; i < 5; i++){
        console.log(i);
    }
}
  /* 
  Semi-colon after if statement, ssignment operator instead of equality operator, minusing one from the length of array, return array in for loop, semi-colon after the increment (i++), not accessing array element(numbers), not pushing elements into the array
  */
	// Corrected
	function displayEvenNumbers() {
    let numbers = [1,2,3,4,5,6,7,8];
    let evenNumbers = [];
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] % 2 == 0) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
  }
