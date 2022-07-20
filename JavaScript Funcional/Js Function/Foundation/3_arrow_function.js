// function expression
const increment1 = function(n) {
        return n + 1
    }
    // function arrow is always anonymous

const increment2 = (n) => {
    return n + 1
}

const increment3 = (n) => {
    return n + 1
}

const increment4 = n => n + 1

console.log(increment1(2))
console.log(increment2(2))
console.log(increment3(2))
console.log(increment4(199))

const sum = (a, b) => a + b
console.log(sum(3, 2))