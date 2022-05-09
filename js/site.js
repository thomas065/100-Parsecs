//get the values from the Page
//starts or controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate our input
    //parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("You must use Integers only")
    }

}

//generate numbers from the startValue to the endValue
//logic function(s)
function generateNumbers(sValue, eValue) {

    let numbers = [];

    //we want to get all numbers from start to end

    for (let i = sValue; i <= eValue; i++) {
        //this will execute in a loop until index = eValue
        numbers.push(i);
    }

    return numbers;

}


//display the numbers and mark even numbers bold
//display or view functions
function displayNumbers(numbers) {

    let templateRows = "";

    for (let i = 0; i < numbers.length; i++) {

        let className = "even";

        let number = numbers[i];

        if (number % 2 == 0) {
            className = "even";
        }
        else {
            className = "odd";
        }
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}