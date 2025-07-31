// The consumer writes a function (the callback)
// You (as the user or consumer of the API) define a function to be passed as an argument.

function myCallback(result) {
  console.log("Result is:", result);
}

// The API provider (the "caller") accepts that function and uses it
// They invoke your function inside theic logic.
// Following is the caller function 

function doMath(a, b, callback) {
  let sum = a + b;
  callback(sum);  // calling back with the result
}

// So here 'doMath' is an API which is defined to take two parameters and one function (callback)
// Here 'myCallback'
