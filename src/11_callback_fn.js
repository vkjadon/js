function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Vijay", sayBye); // sayBye is the callback



// anonymous function is a callback passed without function name.

// Define the function that accepts a callback
function sayHello(callback) {
    callback("Vijay");
}

sayHello(function(name) {
    console.log("Hello, " + name);
});

// anonymous function is a callback passed to setTimeout.

setTimeout(function() {
    console.log("Hello after 2 seconds");
}, 2000);
