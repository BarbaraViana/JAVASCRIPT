// Anonymous function
// IIFE Immediately invoked Function Expression (Função auto invocavel)

(function(a, b, c) {
    let x = 3 // variavel no scopo local, só é vista dentro da function
    console.log(`Result: ${a + b + c}`)
    console.log(x)
})(1, 2, 3); // usar ponto e virgula entre function's

(function(a, b, c) {
    let x = 300 // variavel no scopo local, só é vista dentro da function
    console.log(x)
});

(() => {
    console.log('Arrow #01')
})();

(() => console.log('Arrow #02'))();