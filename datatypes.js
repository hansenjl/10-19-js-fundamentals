//Primitives

//String

"string with double quotes"
'string with single quotes'
`string with backticks for ${interpolation}`











// --------------------
//Number

//Negative ex: -1

//Exponent ex: -1e2

//Float ex: -1.1e2

//NaN  ex: 'hello' * 3

// parseInt / parseFloat
parseInt("3")
parseInt("3", 10)
parseFloat("3.56")
parseInt("3.56") // 3




//---------------------------------
//Boolean

// Falsey values
0 
NaN
undefined
false 
null
""

// Truthy values (everything else)







//-----------------------
// Undefined







// -------------------
// Null

let someVar = null
console.log(someVar) // => null



// -------------------
// Symbol

// use them as keys when making objects
//{key: "value"}







// ----------------------------------------------------------------------
// Non-Primitives - pass by reference

let arr = [1,2,3,4]
arr === [1,2,3,4]

function multiply(col){
    let i = 0
    col.forEach(e => {
        col[i] = e * 2
        i += 1
    })
}



// Object  (object literals) 

const dog = {name: "Toby", age: 10}
dog["age"] = 11 
const ageKey = "age"
dog[ageKey] = 12 
dog.breed = "lab"
dog.toys = {favorite: "bone"}




// ----------------
// Function
    function iLikePancakes() {
        console.log('Pancake technology is truly incredible. What a time to be alive!')
    }
    iLikePancakes
    iLikePancakes()  // CALLING THE FUNCTION
    
    function doubleFunction(){
        let greeting = "hello"
        console.log("parent function")
       return function innerFunction(){
         console.log(greeting)
      }
    }
   
    doubleFunction()()

// Function Expression
let arr = [1,2,3]
let doSomething = function() { return true }
let doSomethingElse = () => false //arrow function
arr.map(function(n) { return n + 1 })


// Function declaration
function doSomething() {
    return true
}
console.log(doSomething)











// ----------------
// Array
let arr = [1, 2, 3, "a", "b", "c", { hello: 'world' }]

// MDN documentation for array methods
// .map
// .reduce
// .forEach


// typeOf