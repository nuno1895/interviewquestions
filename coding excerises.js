// Level 1:

// eventually you want to be able to do each of these questions on paper in 3 minutes or less

// Write a function named greatThanThree that takes in two numbers and returns true if they are both greater than 3 and false if not.


//simple if statement to return value if a number is equal to the parameter
function greatThanThree(numOne, numTwo) {
	if(numOne > 3 && numTwo > 3) {
		return true;
	}else {
		return false;
	}
}

greatThanThree(5,5);

// Write a function named aOrB that takes in a letter and if it is a or b then return true otherwise return false.

//simple if statement to return value if a number is equal to the parameter

function aOrB(letter) {
	if(letter === "b") {
		return true;
	}else {
		return false;
	}
}

aOrB(j);
// Write a function named greatThanTwo that returns true if the number is 2 and false otherwise

//simple if statement to return value if a number is equal to the parameter

function greatThanTwo(number) {
	if (number === 2) {
		return true;
	}else {
		return false;
	}
}

greatThanTwo(4);

// Level 2:

// eventually you want to be able to do each of these questions on paper in 5 minutes or less

// Write a function named printEvenBetween that takes in two numbers and will return an array of all the even numbers between the given two numbers.

//numbers example 4, 20, so 4+1, 5+1. 6+1 then divide by 2 to see if it's even make sure to stop at 20, need to check if Number one is greater then number two and also if they are equal to each other

function printEvenBetween (numOne, numTwo) {
	var evenNumArray = [];
	if(numOne < numTwo) {
		for(var i = numOne + 1; i < numTwo; i++ ) {
			if ((i % 2) === 0) {
				evenNumArray.push(i);
			}	
		}
		return evenNumArray;
	}else if (numOne > numTwo) {
		for(var i = numTwo + 1; i < numOne; i++ ) {
			if ((i % 2) === 0) {
				evenNumArray.push(i);
			}	
		}
		
		return evenNumArray;	
	}else {
		return "Nothing in Between"
	}
}
printEvenBetween(4, 20);


// Write a function named printBetween that takes in two arguments. Assume they are integers. This function will return an array of the numbers between those two arguments.

//numbers example 7+1. 8+1. 9+1 until 22, need to check if Number one is greater then number two and also if they are equal to each other

function printBetween (numOne, numTwo) { 
	var numberArray = [];	
	if (numOne < numTwo) {
		for (var i = numOne + 1; i < numTwo; i++) {
			numberArray.push(i);	
		}
		return numberArray;
	}else if (numOne > numTwo) {
		for (var i = numTwo + 1; i < numOne; i++) {
			numberArray.push(i);	 	
		}
		return numberArray;
	}else {
		return "Nothing in Between"
	}

	printBetween();

};


printBetween(7, 22);

// Level 3:

// eventually you want to be able to do this question on paper in 10 minutes or less

// Write a function named fib that takes an argument n. Assume that n is a number. And the function returns an array of n numbers of the fibonacci sequence.

// In mathematical terms, the sequence Fn of Fibonacci numbers is defined by the recurrence relation

// 0,1,1,2,3,5,8,13,21,34,55,89,144.....

//  F{n}=F{n-1}+F{n-2}

function fib(n){
   if (n==0) return [];
   if (n==1) return [0];
   if (n==2) return [0,1];

   var fibList = [0, 1];
   for (var i=2; i<n; i++){
       var last = fibList[fibList.length-1];
       var secondToLast = fibList[fibList.length-2];
       fibList.push(last + secondToLast);
   }

   return fibList;
}

fib(3);

//OR

