function verificarPalindromo(string) {
    if(!string) return "string inexistente";

   return string.split("").reverse().join("") === string; 
}

function verificarPalindromo(string) {
    if (!string) return "string inexPaistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string.length - 1 - i) {
            return false;
        }
    }
    return true;
}





console.log(verificarPalindromo("thiago"));