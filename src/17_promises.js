// When we create a Promise, we don’t immediately have the value it will produce.
// It acts as a placeholder (proxy) for a future result.

let promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 2000); // This is scheduled to happen after 2 seconds.
});

// Here, promise is a proxy for the value "Data loaded"
// we don't know it yet, but we will get it after 2 seconds.

// We can associate a handlers to handle eventual success value or failure reason of an asynchronous action.
// .then() and .catch() are the handlers for success and failure respectively.

promiseOne
  .then((data) => {     // data is the value we pass to the resolve function in Promise created
    console.log("Success:", data);  // if resolved
  })
  .catch((error) => { // error is the value we pass to the reject function in Promise created
    console.error("Error:", error);  // if rejected
  });

// Again to understand - 
// Creating a new Promise requires an executor function. 
// That function takes two parameters: resolve (for success) and reject (for failure). 
// You call resolve() with a result when the operation completes successfully, 
// We can call reject() with an error when it fails. 
// This whole setup returns a Promise that can be handled using .then() and .catch().

let promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Inside setTimeout → trying to resolve...");
    resolve("Data loaded in Promise Two");
  }, 1000);

  console.log("Rejecting immediately...");
  reject("Error");
});

promiseTwo
  .then((data) => console.log("Then:", data))
  .catch((err) => console.log("Catch:", err));


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

//getAllUsers()

fetch('https://api.github.com/users/vkjadon')
.then((response) => {
    return response.json()
})
.then((data) => {
    // console.log(data);
    console.log("data");
})
.catch((error) => console.log(error))
/*
fetch is not exactly equivalent to manually creating a promise using new Promise(...).
However, fetch returns a Promise, which behaves the same as a manually created promise — just abstracted away.
*/
