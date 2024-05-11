function calculateSum(a, b) {
    // Variable declared using 'var' keyword
    console.log("Inside function before assignment:", num); // Output: undefined
    var num = a + b; // Variable assignment
    console.log("Inside function after assignment:", num); // Output: Sum of a and b
    return num;
}

// Calling the function
console.log(calculateSum(5, 3)); // Output: Sum of 5 and 3
