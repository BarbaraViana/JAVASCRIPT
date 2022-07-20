// Function Declaration Quantro formas de criar função
function sayHello() {
    console.log('Hello!')
}

sayHello()
    //let x = sayHello()
    //console.log(x)

/* function sayHelloTo(name) {
    console.log('Hello ' + name)
} */

function sayHelloTo(name) {
    console.log(`Hello ${name}`)
}
sayHelloTo('Mike')
sayHelloTo()

function returnHi() {
    return 'Hi!'
}

let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name) {
    return `Hi! ${name}`
}
console.log(returnHiTo('John'))