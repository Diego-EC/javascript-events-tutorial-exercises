window.calculateSumListener = function calculateSumListener() {
	//Return the value of the input #firstNumber
	var stringA = document.getElementById("firstNumber").value;
	//Return the value of the input #secondNumber
	var stringB = document.getElementById("secondNumber").value;

	//your code goes here
	let resultNumber = document.getElementById("resultNumber");
	const intA = parseInt(stringA);
	const intB = parseInt(stringB);
	const sum = intA + intB;
	resultNumber.value = sum;
};
