// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Vijay"))
// console.log(loginUserMessage("Vijay"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const userObject = {
    username: "Vijay",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(userObject)

// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Vijay"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Vijay"
    if (username === "Vijay") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

function addone(num){
    return num + 1
}



//addThree(5)

const addThree = function(num){
    return num + 3
}

const user = {
    username: "Vijay",
    price: 999,

    welcomeMessage: function() {
        console.log(`${user.username} , welcome to website`);
        console.log(this);
    }

}
/*
Use `this` inside object methods instead of hardcoding the object name.
If the variable (object) name `user` changes, this line would break.
*/
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// Run `console.log(this)` on browser -> the Global context is window()

function arrow(){
    console.log(this);
}
arrow()

function arrow(){
    let username = "Vijay"
    console.log(this.username);
}

arrow()

// const chai = function () {
//     let username = "Vijay"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "Vijay"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => ({username: "Vijay"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('Vijay')