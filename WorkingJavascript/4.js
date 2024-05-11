// Variables inside a block scope
{
    // Variable declared using let
    console.log("Before letVar:", letVar); // Output: ReferenceError: Cannot access 'letVar' before initialization
    let letVar = "Hello";
    console.log("After letVar:", letVar); // Output: "Hello"

    // Variable declared using var
    console.log("Before varVar:", varVar); // Output: undefined
    var varVar = "World";
    console.log("After varVar:", varVar); // Output: "World"

    // Variable declared using const
    console.log("Before constVar:", constVar); // Output: ReferenceError: Cannot access 'constVar' before initialization
    const constVar = "!";
    console.log("After constVar:", constVar); // Output: "!"
}

// Outside the block scope
console.log("Outside letVar:", letVar); // Output: ReferenceError: letVar is not defined
console.log("Outside varVar:", varVar); // Output: "World"
console.log("Outside constVar:", constVar); // Output: ReferenceError: constVar is not defined
