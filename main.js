const botaoRomano = document.getElementById("submit-romano");
const botaoArabico = document.getElementById("submit-arabico");

// Botão escutando evento e função onclick para converter romano para arábico 
botaoRomano.addEventListener("click", converterRomanoParaArabico);

function converterRomanoParaArabico () {
    var numeroRomano = document.getElementById("algarismo-romano").value.toUpperCase();
    var arabicoConvertido = romanoParaArabico(numeroRomano);
    if (isNaN(arabicoConvertido )) {
        alert("Digite um algarismo romano válido");
    } else {
        document.getElementById("resultado").innerHTML = arabicoConvertido;
    }
    
}

// Botão escutando evento e função onclick para converter arábico para romano
botaoArabico.addEventListener("click", converterArabicoParaRomano);

function converterArabicoParaRomano () {
    var numeroArabico = parseInt(document.getElementById("algarismo-arabico").value);
    var romanoConvertido = arabicoParaRomano(numeroArabico);
    if (isNaN(numeroArabico) || numeroArabico < 1 || numeroArabico > 3999) {
        alert("Por favor, digite um número válido entre 1 e 3999.");
    } else {
        document.getElementById("resultado").innerHTML = romanoConvertido;
    }
}

// Função do calculo da conversão de número arábico para número romano 
function romanoParaArabico (numeroRomano) {

    var conversorRomanoParaArabico = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    var numeroArabico = 0;

    for ( var i = 0; i < numeroRomano.length; i++) {
        var digitoAtual = conversorRomanoParaArabico[numeroRomano[i]];
        var proximoDigito = conversorRomanoParaArabico[numeroRomano[i+1]];

        if (proximoDigito && digitoAtual < proximoDigito) {
            numeroArabico -= digitoAtual;
        } else {
            numeroArabico += digitoAtual;
        }
    }

    return numeroArabico
}

// Função do calculo da conversão de número romano para número arábico
function arabicoParaRomano(numeroArabico) {
    var conversorArabicoParaRomano = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
  
    var numeroRomano = "";

    for (var i in conversorArabicoParaRomano) {
        while (numeroArabico >= conversorArabicoParaRomano[i]) {
            numeroRomano += i;
            numeroArabico -= conversorArabicoParaRomano[i];
        }
    }
  
    return numeroRomano;
  }
