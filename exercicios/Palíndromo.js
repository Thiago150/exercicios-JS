function verificarPalindromo(string) {
    if(!string) return "string inexistente";

   return string.split("").reverse().join("") === string; 
}

function verificarPalindromo(string) {
    if (!string) return "string inexistente";

    for(let i = 0; i < string.length / 2; i++) {
        if(string[i] !== string.length - 1 - i)
    }
}





console.log(verificarPalindromo("ovo"));