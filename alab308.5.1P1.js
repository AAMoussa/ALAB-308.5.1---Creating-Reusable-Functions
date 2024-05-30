//Part 1: Thinking Functionally
//write functions that accomplish the following:
let nums = [10, 5, 20, 15, 7, 3, 40];

//Take an array of numbers and return the sum.
function elementSum(numbers) {
    let sum = 0;   
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }   
    return console.log("The sum of the numbers of that array which is: " + sum );
}



// Take an array of numbers and return the average.
function elementAvg(numbers) {
    let sum = 0;
    let elemCount = numbers.length;   
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }   
    return console.log("and the average of the numbers in that array which is: " + (sum / elemCount) + "\n");
}


console.log("\nIf we have an array of numbers as this:\n" + nums + "\nI created functions to return:");
elementSum(nums);
elementAvg(nums);