// Solução 1 (uma checagem basica)
function verificarPalindromo(string) {
    if (!string) return "String Inexistente";

    return string.split("").reverse().join("") === string;
}

console.log(verificarPalindromo("Barbara"));

// Solução 2 (uma checagem basica)

function verificarPalindromo2(string) {
    if (!string) return "String Inexistente";

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }

    }

    return true;

}

console.log(verificarPalindromo2("Barbara"));