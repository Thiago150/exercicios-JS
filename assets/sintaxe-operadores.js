function comparaNumeros (num1, num2) {
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoiguais} são iguais. `
}

function criaSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let reusltado10 = 'menor';
    let reusltado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        reusltado10 = 'maior';
    }

    if(compara20) {
        reusltado20 = 'maior';
    }

    return  `Sua soma é ${ soma } , que é ${ compara10 } do que 10 e ${ compara20 } do que 20.` ;
}
console.log(comparaNumeros(1, 2));