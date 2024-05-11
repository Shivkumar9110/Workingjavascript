// Block scope
{
    // Attempting to log letVar before initialization
    console.log(letVar); // Output: ReferenceError: Cannot access 'letVar' before initialization

    // Variable declaration using let
    let letVar = "Hello";
    
    // Logging letVar after initialization
    console.log(letVar); // Output: "Hello"
}
