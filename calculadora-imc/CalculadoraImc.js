
function calculaImc(peso,altura){
    return peso/(altura**2);
}

function classificaImc(imc){
    if (imc < 18.5){
        return "Abaixo do peso";
    } else if (imc < 24.9){
        return "Peso normal";
    } else if (imc < 29.9){
        return "Sobrepeso";
    } else if (imc < 34.9){
        return "Obesidade grau I"
    } else if (imc < 39.9){
        return "Obesidade grau II"
    } else{
        return "Obesidade grau III"
    }
}

// DADOS FIXOS
let imc = calculaImc(50,1.72);
let classificacao = classificaImc(imc);

console.log(`Seu IMC é ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);

imc = calculaImc(70,1.72);
classificacao = classificaImc(imc);

console.log(`Seu IMC é ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);

imc = calculaImc(90,1.72);
classificacao = classificaImc(imc);

console.log(`Seu IMC é ${imc.toFixed(2)}`);
console.log(`Classificação: ${classificacao}`);

// NO NAVEGADOR
// while (true){
//     const peso = parseFloat(prompt("Digite seu peso (em kg):"));
//     const altura = parseFloat(prompt("Digite sua altura (em metros):"));

//     const imc = calculaImc(peso,altura);
//     const classificacao = classificaImc(imc);

//     console.log(`Seu IMC é ${imc.toFixed(2)}`);
//     console.log(`Classificação: ${classificacao}`);

//     if (prompt("Sair (s): ")=="s"){
//         break;
//     }
// }

