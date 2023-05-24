/**
 * @author      @italijancic
 *
 * @description File to example documentation an a right way of document code
 * @sumary      pc-2023 examples
 *
 * Created at:    11-05-2023
 * Last modified: 11-05-2023
 */

// Data types
// ----------

// Data definition
var globalVar
let globalLet

const globalConst = 24

// Data initialization
globalVar = 'globalVar'
globalLet = 'globalLet'

// ----------

/**
 * Function to print examples separator
 * @param  {string} exampleName [self descripted]
 * @param  {function} callBackFunction [self descripted]
 */
function runExample(exampleName, callBackFunction) {
  console.log('')
  console.log(`Runing [${exampleName}] function: `)
  callBackFunction()
  console.log('')
}

/**
 * Function to add two numbers
 * @param  {number} a first number
 * @param  {number} b second number
 */
// function add(a, b) {
//   return a+b
// }

// console.log(add(3, 'h'))


// Void function definition and call
// ----------------------------------

/**
 * Function to give an example of function definition on .js
 */
// function example() {
//   console.log('[example]: Hello from example')
// }

// Function call
// runExample('example', example)

// ----------------------------------


// Data scopes
// -----------

/**
 * Function give an example of files scopes vars
 */
// function fileScopes() {

//   // Private vars decalaration and definition
//   var privateVar = 'privateVar'
//   let privateLet = 'privateLet'

//   console.log('')
//   console.log('Print private vars:')
//   console.log('------------------')
//   console.log(`privateVar: ${privateVar}`)
//   console.log(`privateLet: ${privateLet}\r\n`)

//   console.log('Print global vars:')
//   console.log('------------------')
//   console.log(`globalVar: ${globalVar}`)
//   console.log(`globalLet: ${globalLet}`)
//   console.log(`globalConst: ${globalConst}`)

//   if(true) {
//     var privateLet2 = 'hola'
//     console.log(privateLet)
//     console.log(privateLet2)
//   }

//   // console.log(privateLet2)
// }

// runExample('fileScopes', fileScopes)

// console.log(privateVar)
// console.log(privateLet)

/**
 * Function to see var scope example
 */
// function varScoping() {
//   var x = 1

//   if (true) {
//     var x = 2
//     console.log(x)
//   }

//   console.log(x)
// }

/**
 * Function to see let scope example
 */
// function letScoping() {
//   let x = 1

//   if (true) {
//     let x = 2
//     console.log(x)
//   }

//   console.log(x)
// }

// runExample('varScoping', varScoping)
// runExample('letScoping', letScoping)
// -----------


// Loops
// -----

/**
 * For stament exaple
 * @param  {Number} iteration name of iteration to run
 */
// function forExample(iterations) {

//   for (let index = 0; index < iterations; index++) {
//     console.log(`Runing for loop, iteration: ${index + 1} of ${iterations}`)
//   }
// }

// console.log('-------------------')
// console.log('for stament example:')
// console.log('-------------------')
// forExample(2)
// console.log('-------------------\r\n')
// -----


// Prime number
const isPrime = (num) => {
  if (num < 2) return false

  // for (let i = 2; i < num; i++) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }

  return true
}

let max = 11

console.log('')
console.log('Testing isPrime()')
console.log('-----------------\r\n')
for (let i = 1; i <= max; i++) {
  console.log(isPrime(i) ? `${i}: Is prime` : `${i}: Is not prime`)
}
